package com.peaqock.services.scheduler;


import com.peaqock.clients.models.CountryAuto;
import com.peaqock.repos.CountryAutoRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.peaqock.utils.GeometryUtils.checkPointIsNear;
import static com.peaqock.utils.GeometryUtils.createPoint;

@Log4j2
@Service
@RequiredArgsConstructor
public class PredictionAutoServiceImpl implements PredictionAutoService{

    private final CountryAutoRepo countryAutoRepo;

    @Override
    public List<CountryAuto> getNearPort(CountryAuto predictionAuto) {

        List<CountryAuto> listNearPort = new ArrayList<>();

        var listCountryAuto= countryAutoRepo.getAllnotNull(predictionAuto.getCountry_iso2());

        System.out.println(listCountryAuto.get(2).toString()+"ssss");

        var centerPoint = createPoint(Double.parseDouble(predictionAuto.getLng()),Double.parseDouble(predictionAuto.getLat()));

        listNearPort.add(listCountryAuto.stream()
                                        .filter(countryAuto -> checkPointIsNear(centerPoint,
                 createPoint(Double.parseDouble(countryAuto.getLng().toString()),Double.parseDouble(countryAuto.getLat().toString())))).findFirst().get());

        return listNearPort;
    }

}
