package com.peaqock.initializer;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.google.maps.GeoApiContext;
import com.peaqock.clients.SearatesClientService;
import com.peaqock.clients.models.AirSeaPorts;
import com.peaqock.config.SearatesProps;
import com.peaqock.initializer.models.PortCountry;
import com.peaqock.repos.AirSeaPortRepo;
import com.peaqock.repos.CountryPortsRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.ResourceLoader;

import java.lang.reflect.Type;
import java.util.List;

@Log4j2
@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final static Type portCountriesType = new TypeToken<List<PortCountry>>() {
    }.getType();

    private final SearatesProps props;
    private final GeoApiContext geoApiContext;
    private final CountryPortsRepo countryPortsRepo;
    private final SearatesClientService searatesClientService;
    private final ResourceLoader resourceLoader;
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    private final AirSeaPortRepo airSeaPortRepo;

    @Bean
    @Primary
    CommandLineRunner runner() {
        return args -> {

           List<AirSeaPorts> list = airSeaPortRepo.findByCountrycodeAndType("AE","port");
           System.out.println(gson.toJson(list));

//            final var results = GeocodingApi.newRequest(geoApiContext)
//                    .components(ComponentFilter.country("FR"))
//                    .resultType(AddressType.LOCALITY)
//                    .await();
//
//            log.info(gson.toJson(results)+"jsonfi");
//
//            final var searatesGeocode = searatesClientService.searatesPorts(
//                    URI.create(props.getGoogleGeocode()),
//                    "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
//                    "place_id",
//                    "FR",
//                    "locality"
//            );
//
//            log.info(gson.toJson(searatesGeocode.getAirPorts())+"jsonfi");
//
//
//            var apiKey = props.getKey();
//            var distanceandtimeParams = DistanceandtimeParams.builder()
//                    .key(apiKey)
//                    .latFrom("31.230416")
//                    .lngFrom("121.473701")
//                    .latTo("456.48226")
//                    .lngTo("30.7233095")
//                    .type("sea")
//                    .build();
//
//            log.info(searatesClientService.callDistanceAndTimeApi(URI.create(props.getDistanceandtime().getApi()), distanceandtimeParams));
//
//            agadir();
//            casablanca();
//            WrongResult();
//
//            if (countryPortsRepo.count() == 0) {
//                final var gson = new GsonBuilder().setPrettyPrinting().create();
//                final var portCountriesResource = resourceLoader.getResource("classpath:data/port-countries.json");
//                if (portCountriesResource.isReadable()) {
//                    final var reader = new BufferedReader(new InputStreamReader(portCountriesResource.getInputStream()));
//                    final List<PortCountry> portCountries = gson.fromJson(reader, portCountriesType);
//                    portCountries.forEach(portCountry -> {
//                        final var countryCode = portCountry.getCode();
//                        final var ports = gson.fromJson(searatesClientService.countryPorts(URI.create(props.getPortsMap()), countryCode), CountryPorts.class);
//                        ports.setCCode(countryCode);
//                        ports.setCName(portCountry.getName());
//                        var result = portsMapper(ports.getSeaPorts(), countryCode);
//
//                        ports.setSeaPorts(result.getSeaPorts());
//                        ports.setAirPorts(result.getAirPorts());
//
//                        countryPortsRepo.save(ports);
//                    });
//                }
//            }
        };
    }


//    private void agadir() {
//        var centerPoint = GeometryUtils.createPoint(-9.5981072, 30.4277547);
//        var checkPoint = GeometryUtils.createPoint(-9.556429295145723, 30.435613224616542);
//        var result = GeometryUtils.checkPointIsNear(centerPoint, checkPoint); // 30Km
//        log.info(result);
//    }
//
//    private void casablanca() {
//        var centerPoint = GeometryUtils.createPoint(-7.589843399999999, 33.5731104);
//        var checkPoint = GeometryUtils.createPoint(-7.624511995954908, 33.578500865535815);
//        var result = GeometryUtils.checkPointIsNear(centerPoint, checkPoint); // 30Km
//        log.info(result);
//    }
//
//    private void WrongResult() {
//        var centerPoint = GeometryUtils.createPoint(-9.5981072, 30.4277547); // center point is agadir
//        var checkPoint = GeometryUtils.createPoint(-7.624511995954908, 33.578500865535815); // port is casablanca
//        var result = GeometryUtils.checkPointIsNear(centerPoint, checkPoint); // 30Km
//        log.info(result);
//    }

//    private SearatesGeocode portsMapper(List<CityPort> seaPorts, String countryCode) {
//        if (Objects.nonNull(seaPorts)) {
//            try {
//                final var results = GeocodingApi.newRequest(geoApiContext)
//                        .components(ComponentFilter.country(countryCode))
//                        .resultType(AddressType.COUNTRY)
//                        .await();
//                if (results.length > 0) {
//                    final var searatesGeocode = searatesClientService.searatesPorts(
//                            URI.create(props.getGoogleGeocode()),
//                            results[0].placeId,
//                            "place_id",
//                            countryCode,
//                            "country"
//                    );
//
//                    var airPorts = searatesGeocode.getAirPorts();
//                    var searatesPorts = searatesGeocode.getSeaPorts();
//
//                    if (Objects.nonNull(searatesPorts)) {
//                        searatesPorts.replaceAll(cityPort ->
//                                searatesPorts.stream().filter(sea -> sea.getName().equals(cityPort.getName())).findAny().orElse(cityPort)
//                        );
//                    }
//                    return SearatesGeocode.builder()
//                            .seaPorts(seaPorts)
//                            .airPorts(airPorts)
//                            .build();
//                }
//            } catch (ApiException | InterruptedException | IOException e) {
//                e.printStackTrace();
//            }
//        }
//        return SearatesGeocode.builder().build();
//    }
}