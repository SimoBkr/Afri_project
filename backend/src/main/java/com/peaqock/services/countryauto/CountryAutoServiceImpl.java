package com.peaqock.services.countryauto;

import com.peaqock.clients.models.CountryAuto;
import com.peaqock.repos.CountryAutoRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class CountryAutoServiceImpl implements CountryAutoService{

    private final CountryAutoRepo countryAutoRepo;

    @Override
    public List<CountryAuto> getAutoCountry(String name) {
        return countryAutoRepo.getAll(name);
    }
}
