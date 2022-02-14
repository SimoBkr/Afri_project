package com.peaqock.controllers;

import com.peaqock.clients.models.ContainerParams;
import com.peaqock.clients.models.CountryAuto;
import com.peaqock.services.scheduler.PredictionAutoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedules")
@RequiredArgsConstructor
@Log4j2
public class SchedullerController {

    private final PredictionAutoService predictionAutoService;

    @PostMapping("/get")
    public List<CountryAuto> getContainer(@RequestBody CountryAuto countryAuto) {
        return predictionAutoService.getNearPort(countryAuto);
    }
}
