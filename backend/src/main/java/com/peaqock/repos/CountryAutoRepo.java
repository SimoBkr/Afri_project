package com.peaqock.repos;

import com.peaqock.clients.models.CountryAuto;
import feign.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryAutoRepo extends JpaRepository<CountryAuto,Long> {

    @Query(
            value = "SELECT * FROM uncode u WHERE u.name LIKE :name% ",
            nativeQuery = true)
    List<CountryAuto> getAll(@Param("name") String name);

    @Query(
            value = "SELECT * FROM uncode u WHERE u.lng IS NOT NULL AND country_iso2 = :isocode",
            nativeQuery = true)
    List<CountryAuto> getAllnotNull(String isocode);
}
