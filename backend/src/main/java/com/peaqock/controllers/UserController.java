package com.peaqock.controllers;

import com.peaqock.docs.Response.UserResponse;
import com.peaqock.security.CurrentUser;
import com.peaqock.services.auth.UserService;
import com.peaqock.services.email.EmailService;
import com.peaqock.utils.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Log4j2
public class UserController {

    private final UserService userService;
    private final EmailService emailService;

    @PostMapping("/auth/sign-up")
    public ResponseEntity<UserResponse> createUser(@RequestBody @Valid UserRequest userRequest) {
        return new ResponseEntity<UserResponse>(userService.createUser(userRequest), HttpStatus.CREATED);
    }

    @PostMapping("/auth/sign-in")
    public ResponseEntity<Object> login(@RequestBody @Valid UserAuthRequest userAuthRequest) {

        return ResponseEntity.ok()
                .body(userService.accessToken(userAuthRequest));
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<Object> userinfo(@CurrentUser UserPrincipal principal) {
        return ResponseEntity.ok()
                .body(principal);
    }

    @PostMapping("/auth/sendmail")
    public ResponseEntity<Object> usersendmail(@RequestBody EmailRequest email) throws MessagingException, IOException {
        return new ResponseEntity<>(emailService.sendToEmail(email), HttpStatus.CREATED);
    }

    @PutMapping("/auth/reset")
    public void resetpassword(@RequestParam(name = "token") String token) throws MessagingException {

        EmailRequest emailRequest = emailService.getEmailByPayload(token);

        userService.sendNewPassword(emailRequest);
    }

    @PutMapping("/auth/changepassword")
    public ResponseEntity<UserResponse> changepassword(@RequestBody UserUpdatePassword userUpdatePassword) {
        return new ResponseEntity<UserResponse>(userService.updatePassword(userUpdatePassword), HttpStatus.CREATED);
    }
}