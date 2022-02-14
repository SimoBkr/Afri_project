package com.peaqock.services.scheduler;

import com.peaqock.clients.models.CountryAuto;

import java.util.List;

public interface PredictionAutoService {

    List<CountryAuto> getNearPort(CountryAuto predictionAuto);
}
