package com.peaqock.services.containers;

import com.peaqock.clients.SearatesClientService;
import com.peaqock.clients.models.ContainerParams;
import com.peaqock.config.SearatesProps;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.net.URI;

@Log4j2
@Service
@RequiredArgsConstructor
public class ContainerServiceImpl implements ContainerService {

    private final SearatesProps props;
    private final SearatesClientService searatesClientService;

    @Override
    public Object getContainer(ContainerParams containerParams) {
        var apiKey = props.getKey();
        containerParams.setKey(apiKey);
        return searatesClientService.callTrackingContainersApi(URI.create(props.getTracking().getApi()),containerParams);
    }
}
