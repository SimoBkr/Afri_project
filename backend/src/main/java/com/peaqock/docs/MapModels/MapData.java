package com.peaqock.docs.MapModels;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class MapData {

    private String from_lat;
    private String from_lng;
    private String to_lat;
    private String to_lng;
    private String mode;
}
