package com.peaqock.repos;

import com.peaqock.docs.RoleEntity;
import com.peaqock.docs.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface RoleRepository extends JpaRepository<RoleEntity, Long> {

    List<RoleEntity> findByName(RoleName name);
}
