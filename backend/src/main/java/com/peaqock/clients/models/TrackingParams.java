package com.peaqock.clients.models;

import feign.Param;
import lombok.*;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrackingParams {


    @Param("api_key")
    public String key;

    /*
    Type of document. It takes the value:
    BL = Bill of Lading,
    BK = Booking
    */
    @Param("type")
    public String type;

    @Param("number")
    public String number;

    @Param("sealine")
    public String sealine;
}
