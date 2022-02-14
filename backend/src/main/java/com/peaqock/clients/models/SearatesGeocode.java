package com.peaqock.clients.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.Collections;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearatesGeocode {

    @JsonProperty("country_ports")
    @Builder.Default
    private List<CityPort> seaPorts = Collections.emptyList();

    @JsonProperty("airports")
    @Builder.Default
    private List<CityPort> airPorts = Collections.emptyList();
}