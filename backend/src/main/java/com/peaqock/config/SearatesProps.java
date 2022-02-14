package com.peaqock.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Validated
@Configuration
@ConfigurationProperties("searates")
@NoArgsConstructor
@AllArgsConstructor
public class SearatesProps {

    @NotNull
    private String key;

    @Valid
    @NotNull
    private Distanceandtime distanceandtime;

    @Valid
    @NotNull
    private Tracking tracking;

    @Valid
    @NotNull
    private Schedules schedules;

    @Valid
    @NotNull
    private Logistics logistics;

    @NotNull
    private String portsMap;

    @NotNull
    private String googleGeocode;

    @NotNull
    private String googleQuery;

    @Getter
    @Setter
    public static class Distanceandtime {

        @NotNull
        public String api;
    }

    @Getter
    @Setter
    public static class Logistics {

        @NotNull
        public String api;

        @NotNull
        public String tokenId;

        @NotNull
        public String tokenApi;

        @NotNull
        public String tokenLogistics;
    }

    @Getter
    @Setter
    public static class Schedules {

        @NotNull
        public String api;
    }

    @Getter
    @Setter
    public static class Tracking {

        @NotNull
        public String api;

        @NotNull
        public String billBooking;

        @NotNull
        public String containers;

        @NotNull
        public String routes;
    }
}
