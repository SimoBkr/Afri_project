package com.peaqock.clients.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CountryPort {

    @JsonProperty("port_id")
    public String portId;

    @JsonProperty("unlocode")
    public String unlocode;

    @JsonProperty("country_code")
    public String countryCode;

    @SerializedName("name")
    @Expose
    public String name;

    @SerializedName("ckey")
    @Expose
    public String cKey;

    @SerializedName("t")
    @Expose
    public Boolean terminal;

    @SerializedName("lat")
    @Expose
    public String lat;

    @JsonProperty("distance")
    public String distance;

    @SerializedName("lng")
    @Expose
    public String lng;
}