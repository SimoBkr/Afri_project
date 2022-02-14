package com.peaqock.utils.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.peaqock.docs.UserEntity;
import lombok.Getter;
import org.springframework.security.core.userdetails.User;

@Getter
@JsonIgnoreProperties(ignoreUnknown = true, value = {"password"})
public class UserPrincipal extends User {

    private final String userId;
    private final String firstname, lastname, phonenumber, username, email;

    public UserPrincipal(UserEntity userEntity) {
        super(userEntity.getUsername(), userEntity.getEncryptedPassword(), true, true, true, true, userEntity.getGrantedAuthorities());
        this.userId = userEntity.getUserId().toString();
        this.firstname = userEntity.getFirstname();
        this.lastname = userEntity.getLastname();
        this.phonenumber = userEntity.getPhonenumber();
        this.email = userEntity.getEmail();
        this.username = userEntity.getUsername();
    }
}
