package com.peaqock.services.email;

import com.peaqock.docs.UserEntity;
import com.peaqock.handle.ApiErrorMessage;
import com.peaqock.handle.errors.NewInfoSend;
import com.peaqock.handle.errors.UserNotFound;
import com.peaqock.repos.UserRepository;
import com.peaqock.security.JwtTokenProvider;
import com.peaqock.utils.dto.EmailRequest;
import com.peaqock.utils.dto.UserInfoEmailAndToken;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Service
@Log4j2
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    private final SpringTemplateEngine springTemplateEngine;

    @Async
    public void sendHtmlMessage(String to, String subject, String htmlBody) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        helper.setFrom("medbkr.sb@gmail.com");
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(htmlBody, true);
        javaMailSender.send(message);
    }

    public void sendMessageUsingThymeleafTemplate(
            String to, String subject, Map<String, Object> templateModel)
            throws MessagingException {

        Context thymeleafContext = new Context();
        thymeleafContext.setVariables(templateModel);
        String htmlBody = springTemplateEngine.process("template-thymeleaf.html", thymeleafContext);
        sendHtmlMessage(to, subject, htmlBody);
    }

    public UserInfoEmailAndToken sendToEmail(EmailRequest email) throws MessagingException {

        if (userRepository.findByEmailIgnoreCase(email.getEmail()).isEmpty())
            throw new UserNotFound(ApiErrorMessage.NO_USER_FOUND.getErrorMessage());
        else {

            Map<String, Object> templatemail = new HashMap<>();

            var token = jwtTokenProvider.generateTokenForResetPassword(email.getEmail()).getAccess_token();

            templatemail.put("textheader", "This email is for reset your password.");
            //templatemail.put("imageofbrand",file.getPath());
            templatemail.put("username", userRepository.findByEmailIgnoreCase(email.getEmail()).get().getFirstname());
            templatemail.put("text", "If you need to Reset your Password just Click to the link below");
            templatemail.put("textvariable1", "Link:");
            templatemail.put("linkforesetPassword", "http://localhost:3000/reset-password/" + token);

            sendMessageUsingThymeleafTemplate(email.getEmail(), "Reset Password", templatemail);

            return new UserInfoEmailAndToken(email.getEmail(), token);
        }
    }

    public EmailRequest getEmailByPayload(String token) {

        EmailRequest emailRequest = new EmailRequest();
        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getDecoder();
        String payload = new String(decoder.decode(chunks[1]));
        emailRequest.setEmail((payload.split(":")[1].split(",")[0]).replaceAll("\"", ""));

        return emailRequest;
    }

    public void sendToEmailReset(EmailRequest email, String password) throws MessagingException {

        if (userRepository.findByEmailIgnoreCase(email.getEmail()).isEmpty())
            throw new UserNotFound(ApiErrorMessage.NO_USER_FOUND.getErrorMessage());
        else {

            Map<String, Object> stringObjectMap = new HashMap<>();

            UserEntity currentUser = userRepository.findByEmailIgnoreCase(email.getEmail()).get();

            stringObjectMap.put("textheader", "This email is for new Information");
            stringObjectMap.put("username", currentUser.getFirstname());
            stringObjectMap.put("text", "you found below the new information");
            stringObjectMap.put("textvariable1", "Email :");
            stringObjectMap.put("linkforesetPassword", currentUser.getEmail());

            stringObjectMap.put("textvariable2", "Password :");
            stringObjectMap.put("valuetext", password);

            sendMessageUsingThymeleafTemplate(email.getEmail(), "Your New Information", stringObjectMap);

            throw new NewInfoSend(ApiErrorMessage.NEW_INFO_SEND.getErrorMessage());
        }
    }
}
