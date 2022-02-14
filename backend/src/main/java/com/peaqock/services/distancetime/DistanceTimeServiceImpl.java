package com.peaqock.services.distancetime;

import com.peaqock.clients.SearatesClientService;
import com.peaqock.clients.models.DistanceandtimeParams;
import com.peaqock.config.SearatesProps;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.net.URI;

@Log4j2
@Service
@RequiredArgsConstructor
public class DistanceTimeServiceImpl implements DistanceTimeService {

    private final SearatesProps props;
    private final SearatesClientService searatesClientService;

    @Override
    public Object calculateDistanceAndTime(DistanceandtimeParams distanceandtimeParams) {
        var apiKey = props.getKey();
        distanceandtimeParams.setKey(apiKey);
        return searatesClientService.callDistanceAndTimeApi(URI.create(props.getDistanceandtime().getApi()), distanceandtimeParams);
    }
}
