package com.peaqock.repos;

import com.peaqock.docs.CountryPorts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountryPortsRepo extends JpaRepository<CountryPorts, Long> {

    Optional<CountryPorts> findBycName(String cName);
    Optional<CountryPorts> findBycCode(String cCode);

}
