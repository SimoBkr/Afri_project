package com.peaqock.utils.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class UserPrincipalReset {
    private final String userId, firstname, lastname, phonenumber, username, email, password;
}
