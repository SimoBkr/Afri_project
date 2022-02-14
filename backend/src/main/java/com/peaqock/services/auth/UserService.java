package com.peaqock.services.auth;

import com.peaqock.docs.Response.UserResponse;
import com.peaqock.docs.UserEntity;
import com.peaqock.handle.ApiErrorMessage;
import com.peaqock.handle.errors.AlreadyExistException;
import com.peaqock.handle.errors.AuthenticationFailedException;
import com.peaqock.handle.errors.CheckPasswordOrEmail;
import com.peaqock.handle.errors.UserNotFound;
import com.peaqock.repos.UserRepository;
import com.peaqock.security.JwtTokenProvider;
import com.peaqock.services.email.EmailService;
import com.peaqock.utils.Utils;
import com.peaqock.utils.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.util.Optional;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final Utils utils;

    private final EmailService emailService;

    public UserResponse createUser(UserRequest user) {

        Optional<UserEntity> checkUserByUserNameAndEmailAndPhone = userRepository.findByEmailAndPhonenumber(user.getEmail(), user.getPhonenumber());

        if (checkUserByUserNameAndEmailAndPhone.isPresent())
            throw new AlreadyExistException(ApiErrorMessage.USER_ALREADY_EXISTS_Full.getErrorMessage());

        Optional<UserEntity> checkUserByEmail = userRepository.findByEmailIgnoreCase(user.getEmail());

        if (checkUserByEmail.isPresent())
            throw new AlreadyExistException(ApiErrorMessage.THIS_USER_ALREADY_EXIST.getErrorMessage() + " Email");

        Optional<UserEntity> checkUserByPhonenumer = userRepository.findByPhonenumber(user.getPhonenumber());

        if (checkUserByPhonenumer.isPresent())
            throw new AlreadyExistException(ApiErrorMessage.THIS_USER_ALREADY_EXIST.getErrorMessage() + " Phonenumber");

        ModelMapper modelMapper = new ModelMapper();

        UserEntity userEntity = modelMapper.map(user, UserEntity.class);

        userEntity.setEncryptedPassword(passwordEncoder.encode(user.getPassword()));

        userEntity.setUserId(UUID.randomUUID());

        UserEntity newUser = userRepository.save(userEntity);

        UserResponse userResponse = modelMapper.map(newUser, UserResponse.class);

        userResponse.setMessage("successfully registered");

        return userResponse;
    }

    public UserResponse updatePassword(UserUpdatePassword userUpdatePassword) {

        ModelMapper modelMapper = new ModelMapper();

        Optional<UserEntity> checkUserByEmail = userRepository.findByEmailIgnoreCase(userUpdatePassword.getEmail());

        if (!checkUserByEmail.isPresent()) throw new UserNotFound(ApiErrorMessage.NO_USER_FOUND.getErrorMessage());
        if (!(userUpdatePassword.getNewpassword().equals(userUpdatePassword.getConfirmpassword())))
            throw new UserNotFound(ApiErrorMessage.PASSWORD_NO_MATCHE.getErrorMessage());
        if (!(passwordEncoder.matches(userUpdatePassword.getOldpassword(), checkUserByEmail.get().getEncryptedPassword())))
            throw new UserNotFound(ApiErrorMessage.OLD_PASSWORD_NOT_EQUALS.getErrorMessage());

        UserEntity currentUser = checkUserByEmail.stream().filter(userEntity -> passwordEncoder.matches(userUpdatePassword.getOldpassword(), userEntity.getEncryptedPassword())).findFirst().get();

        currentUser.setEncryptedPassword(passwordEncoder.encode(userUpdatePassword.getNewpassword()));

        UserEntity newUser = userRepository.save(currentUser);

        UserResponse userResponse = modelMapper.map(newUser, UserResponse.class);

        userResponse.setMessage("Password successfully Updated");

        return userResponse;
    }

    public AccessToken accessToken(UserAuthRequest userAuthRequest) {

        Optional<UserEntity> checkUserByEmail = userRepository.findByEmailIgnoreCase(userAuthRequest.getEmail());

        if (checkUserByEmail.isPresent()) {
            if (!checkUserByEmail.stream()
                    .map(userEntity -> passwordEncoder.matches(userAuthRequest.getPassword(), userEntity.getEncryptedPassword()))
                    .findFirst()
                    .get()) {
                throw new CheckPasswordOrEmail(ApiErrorMessage.BAD_CREDENTIALS.getErrorMessage());
            } else {
                try {
                    var authenticate = authenticationManager
                            .authenticate(new UsernamePasswordAuthenticationToken(userAuthRequest.getEmail(), userAuthRequest.getPassword()));

                    log.info(authenticate);

                    var user = (UserPrincipal) authenticate.getPrincipal();

                    return jwtTokenProvider.generateAccessToken(user);

                } catch (Exception ex) {
                    throw new AuthenticationFailedException(ApiErrorMessage.BAD_CREDENTIALS.getErrorMessage());
                }
            }
        } else throw new CheckPasswordOrEmail(ApiErrorMessage.BAD_CREDENTIALS.getErrorMessage());
    }

    public void sendNewPassword(EmailRequest email) throws MessagingException {

        UserEntity userEntity = userRepository.findByEmailIgnoreCase(email.getEmail()).get();

        var newPassword = utils.generateStringId(8);

        var prerecorded = passwordEncoder.encode(newPassword);

        userEntity.setEncryptedPassword(prerecorded);

        userRepository.save(userEntity);

        emailService.sendToEmailReset(email, newPassword);
    }
}
