package com.peaqock.utils.dto;

import lombok.*;
import org.checkerframework.common.aliasing.qual.Unique;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserAuthRequest {

    @NotNull
    @Email
    @Unique
    private String email;

    @NotNull
    private String password;

}
