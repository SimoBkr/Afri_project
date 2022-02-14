package com.peaqock.docs.Response;

import lombok.*;
import org.checkerframework.common.aliasing.qual.Unique;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    @NotNull
    @Unique
    private String username;

    @NotNull
    @Email
    @Unique
    private String email;

    private String message;

}
