package com.peaqock.controllers;

import com.peaqock.clients.models.ContainerParams;
import com.peaqock.config.SearatesProps;
import com.peaqock.services.containers.ContainerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/container")
@RequiredArgsConstructor
@Log4j2
public class ContainerController {

    private final ContainerService containerService;
    private final SearatesProps props;

    @PostMapping("/get")
    public Object getContainer(@RequestBody ContainerParams containerParams) {
        containerParams.setKey(props.getKey());
        return containerService.getContainer(containerParams);
    }
}
