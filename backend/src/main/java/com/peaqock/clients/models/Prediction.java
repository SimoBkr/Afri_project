package com.peaqock.clients.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Prediction {

    private String placeId;

    private String city;

    private String country;

    private String place_type;

    private String counrty_code;

    private String code;

    private String flag;

}
