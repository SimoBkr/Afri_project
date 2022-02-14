package com.peaqock.clients.models;

import feign.Param;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DistanceandtimeParams {

    @Param("lat_from")
    public String latFrom;

    @Param("lng_from")
    public String lngFrom;

    @Param("lat_to")
    public String latTo;

    @Param("lng_to")
    public String lngTo;

    @Param("type")
    public String type;

    @Param("key")
    public String key;

    @Param("speed")
    public String speed;
//
//    @Param("road_speed")
//    public String roadSpeed;
}
