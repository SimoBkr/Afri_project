package com.peaqock.docs;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import com.peaqock.clients.models.CityInfo;
import com.peaqock.clients.models.CityPort;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "country_ports")
public class CountryPorts implements Serializable {

    private static final long serialVersionUID = -2919590222044708893L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String cCode;

    public String cName;

    @SerializedName("ckey")
    @Expose
    public String cKey;

    @SerializedName("cports")
    @Expose
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    public List<CityPort> seaPorts;

    private String type;

    @OneToOne
    private CityInfo cityInfo;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CityPort> airPorts;

}
