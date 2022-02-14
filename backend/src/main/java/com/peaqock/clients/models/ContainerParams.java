package com.peaqock.clients.models;

import feign.Param;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContainerParams {

    @Param("api_key")
    public String key;

    @Param("sealine")
    public String sealine;

    @Param("number")
    public String number;


}
