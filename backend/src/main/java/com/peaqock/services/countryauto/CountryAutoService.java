package com.peaqock.services.countryauto;

import com.peaqock.clients.models.CountryAuto;

import java.util.List;

public interface CountryAutoService {

    List<CountryAuto> getAutoCountry(String name);
}
