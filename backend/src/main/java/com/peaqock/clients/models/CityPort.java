package com.peaqock.clients.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "city_port")
public class CityPort implements Serializable {

    private static final long serialVersionUID = -7994959642493348354L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
    public double lat;

    @JsonProperty("distance")
    public String distance;
    @SerializedName("lng")
    @Expose
    public double lng;
}