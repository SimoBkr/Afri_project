package com.peaqock.repos;

import com.peaqock.docs.PermissionEntity;
import com.peaqock.docs.PermissionName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface PermissionRepo extends JpaRepository<PermissionEntity, Long> {

    List<PermissionEntity> findByName(PermissionName name);
}
