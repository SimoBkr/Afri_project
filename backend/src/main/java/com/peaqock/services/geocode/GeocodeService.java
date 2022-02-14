package com.peaqock.services.geocode;

import com.peaqock.clients.models.Prediction;
import com.peaqock.docs.CountryPorts;
import com.peaqock.docs.CountryPortsnew;

import java.util.List;

public interface GeocodeService {

    List<Prediction> placeAutoComplete(String input);

    CountryPorts isCountryOrCity(Prediction prediction);

    CountryPortsnew isCountryOrCityy(Prediction prediction);

}