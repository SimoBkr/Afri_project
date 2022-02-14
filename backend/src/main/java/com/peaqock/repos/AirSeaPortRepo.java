package com.peaqock.repos;

import com.peaqock.clients.models.AirSeaPorts;
import com.peaqock.docs.RoleEntity;
import com.peaqock.docs.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AirSeaPortRepo extends JpaRepository<AirSeaPorts,Long> {

    List<AirSeaPorts> findByCountrycodeAndType(String countrycode,String type);

    List<AirSeaPorts> findByName(String name);

}
