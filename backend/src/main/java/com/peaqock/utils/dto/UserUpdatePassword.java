package com.peaqock.utils.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserUpdatePassword {

    private String email;
    private String oldpassword;
    private String newpassword;
    private String confirmpassword;
}
