package com.peaqock.docs;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import com.peaqock.clients.models.AirSeaPorts;
import com.peaqock.clients.models.CityInfo;
import com.peaqock.clients.models.CityPort;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CountryPortsnew {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String cCode;

    public String cName;

    public String cKey;

    private String type;

    private CityInfo cityInfo;

    public List<AirSeaPorts> seaPorts;

    public List<AirSeaPorts> airPorts;

}
