package com.peaqock.clients.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "uncode")
public class CountryAuto implements Serializable {

    private static final long serialVersionUID = -7994959642493348354L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "country_iso2")
    public String country_iso2;

    @Column(name = "code")
    public String code;

    @Column(name = "location")
    public String countryCode;

    @Column(name = "name")
    public String name;

    @Column(name = "refined_name")
    public String refined_name;

    @Column(name = "lat")
    public String lat;

    @Column(name = "lng")
    public String lng;

    @Column(name = "country_iso_3")
    public String country_iso_3;

    @Column(name = "country_name")
    public String country_name;

    @Override
    public String toString() {
        return "CountryAuto{" +
                "id=" + id +
                ", country_iso2='" + country_iso2 + '\'' +
                ", code='" + code + '\'' +
                ", countryCode='" + countryCode + '\'' +
                ", name='" + name + '\'' +
                ", refined_name='" + refined_name + '\'' +
                ", lat='" + lat + '\'' +
                ", lng='" + lng + '\'' +
                ", country_iso_3='" + country_iso_3 + '\'' +
                ", country_name='" + country_name + '\'' +
                '}';
    }
}