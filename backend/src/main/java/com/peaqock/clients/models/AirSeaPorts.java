package com.peaqock.clients.models;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "air_sea_ports")
public class AirSeaPorts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "port_id")
    private String id;

    @Column(name = "unlocode",nullable = true)
    private String unlocode;

    @Column(name = "name")
    private String name;

    @Column(name = "terminal")
    private Boolean terminal;

    @Column(name = "country_code")
    private String countrycode;

    @Column(name = "distance",nullable = true)
    private String distance;

    @Column(name = "lng",nullable = true)
    private String lng;

    @Column(name = "lat",nullable = true)
    private String lat;

    @Column(name = "type")
    private String type;

}
