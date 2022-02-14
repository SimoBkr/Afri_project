package com.peaqock.controllers;


import com.google.maps.model.AutocompletePrediction;
import com.peaqock.clients.models.Prediction;
import com.peaqock.docs.CountryPorts;
import com.peaqock.docs.CountryPortsnew;
import com.peaqock.services.geocode.GeocodeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/geocode")
@RequiredArgsConstructor
public class GeocodeController {

    private final GeocodeService geocodeService;

    @PostMapping("/autocomplete")
    public ResponseEntity<List<Prediction>> autoComplete(@RequestParam String input) {
       return new ResponseEntity<>(geocodeService.placeAutoComplete(input), HttpStatus.CREATED);
    }

    @PostMapping("/coding")
    public ResponseEntity<CountryPortsnew> geoCodingPorts(@RequestBody Prediction prediction) {
        return new ResponseEntity<>(geocodeService.isCountryOrCityy(prediction),HttpStatus.CREATED);
    }
}
