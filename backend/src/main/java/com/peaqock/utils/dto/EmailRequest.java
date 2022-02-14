package com.peaqock.utils.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmailRequest {

    @NotNull
    @Email
    private String email;
}
