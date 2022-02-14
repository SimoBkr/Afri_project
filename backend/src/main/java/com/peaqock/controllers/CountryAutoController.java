package com.peaqock.controllers;

import com.peaqock.clients.models.CountryAuto;
import com.peaqock.services.countryauto.CountryAutoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countryauto")
@RequiredArgsConstructor
@Log4j2
public class CountryAutoController {

    private final CountryAutoService countryAutoService;

    @GetMapping("/get")
    public List<CountryAuto> getContainer(@RequestParam String name) {
        return countryAutoService.getAutoCountry(name);
    }
}
