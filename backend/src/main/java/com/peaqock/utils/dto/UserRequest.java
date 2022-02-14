package com.peaqock.utils.dto;

import lombok.Data;
import org.checkerframework.common.aliasing.qual.Unique;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class UserRequest {

    @NotNull
    @NotBlank(message = "Please enter your Firstname")
    private String firstname;

    @NotNull
    @NotBlank(message = "Please enter your Lastname")
    private String lastname;

    @NotNull
    @NotBlank(message = "Please enter your Phone number")
    @Unique
    private String phonenumber;

    @NotNull
    @Unique
    private String username;

    @NotNull
    @Email
    @Unique
    @NotBlank(message = "Please enter your Email")
    private String email;

    @NotNull
    @NotBlank(message = "Please enter your Password")
    private String password;

}
