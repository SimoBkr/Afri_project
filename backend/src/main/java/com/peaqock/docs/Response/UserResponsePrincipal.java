package com.peaqock.docs.Response;


import lombok.*;

import java.util.UUID;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponsePrincipal {

    private UUID userId;
    ;

    private String firstname;

    private String lastname;

    private String phonenumber;

    private String username;

    private String email;

}
