package com.peaqock.clients;

import com.peaqock.clients.models.*;
import feign.hystrix.FallbackFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.cloud.openfeign.SpringQueryMap;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@FeignClient(
        name = "searates-apis",
        url = "https://www.searates.com",
        fallbackFactory = SearatesClientServiceFallbackFactory.class
)
public interface SearatesClientService {

    @GetMapping
    Object callDistanceAndTimeApi(URI baseUrl, @SpringQueryMap DistanceandtimeParams params);

    @GetMapping("${searates.tracking.bill-booking}")
    Object callTrackingBillBookingApi(URI baseUrl, @SpringQueryMap TrackingParams params);

    @GetMapping("${searates.tracking.containers}")
    Object callTrackingContainersApi(URI baseUrl, @SpringQueryMap ContainerParams containerParams);

    @GetMapping
    Object getstoken(URI baseUrl, @RequestParam String id);

    @PostMapping
    Object getLogisticsApi(URI baseUrl, @RequestBody String query, @RequestHeader HttpHeaders httpHeaders);

    @GetMapping("${searates.tracking.routes}")
    Object callTrackingRoutesApi(URI baseUrl, @SpringQueryMap TrackingParams params);

    @PostMapping
    String countryPorts(URI baseUrl, @RequestParam("c") String countryCode);

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    SearatesGeocode searatesPorts(URI baseUrl,
                                  @RequestPart("input") String input,
                                  @RequestPart("type") String type,
                                  @RequestPart("country_code") String country_code,
                                  @RequestPart("place_type") String place_type
    );
}

@Component
class SearatesClientServiceFallbackFactory implements FallbackFactory<SearatesClientService> {
    @Override
    public SearatesClientService create(Throwable cause) {
        return new SearatesClientServiceFallback(cause);
    }
}

@Log4j2
@RequiredArgsConstructor
class SearatesClientServiceFallback implements SearatesClientService {

    private final Throwable cause;

    @Override
    public Object callDistanceAndTimeApi(URI baseUrl, DistanceandtimeParams params) {
        return null;
    }

    @Override
    public Object callTrackingBillBookingApi(URI baseUrl, TrackingParams params) {
        return null;
    }

    @Override
    public Object callTrackingContainersApi(URI baseUrl, ContainerParams containerParams) {
        return null;
    }

    @Override
    public Object getstoken(URI baseUrl, String id) {
        return null;
    }

    @Override
    public Object getLogisticsApi(URI baseUrl,String query,HttpHeaders httpHeaders) {
        return null;
    }

    @Override
    public Object callTrackingRoutesApi(URI baseUrl, TrackingParams params) {
        return null;
    }

    @Override
    public String countryPorts(URI baseUrl, String countryCode) {
        return null;
    }

    @Override
    public SearatesGeocode searatesPorts(URI baseUrl, String input, String type, String country_code, String place_type) {
        return null;
    }
}