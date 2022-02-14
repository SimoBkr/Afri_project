package com.peaqock.controllers;

import com.peaqock.clients.models.DistanceandtimeParams;
import com.peaqock.services.distancetime.DistanceTimeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/distanceandtime")
@RequiredArgsConstructor
public class DistanceTimeController {

    private final DistanceTimeService distanceTimeService;

    @GetMapping
    public Object distanceAndTime(@RequestParam DistanceandtimeParams distanceandtimeParams) {
        return distanceTimeService.calculateDistanceAndTime(distanceandtimeParams);
    }
}
