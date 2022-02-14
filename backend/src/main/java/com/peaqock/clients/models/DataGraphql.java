package com.peaqock.clients.models;

import com.peaqock.docs.MapModels.*;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class DataGraphql {

    private String from_lat;
    private String from_lng;
    private String to_lat;
    private String to_lng;
    private String date;
    private String type;
    private String containerType;
    private String id;
    private String quantity;
    private String mode;
    private CityToPortTruck cityToPortTruck;
    private CityToPortRail cityToPortRail;
    private PortToPort portToPort;
    private PortToCityTruck portToCityTruck;
    private PortToCityRail portToCityRail;
    private String volume;
    private Boolean ismap;
    private String weight;

}
