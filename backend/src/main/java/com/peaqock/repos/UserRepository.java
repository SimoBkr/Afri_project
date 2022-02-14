package com.peaqock.repos;

import com.peaqock.docs.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {

    Optional<UserEntity> findByPhonenumber(String phonenumber);

    Optional<UserEntity> findByEmailIgnoreCase(String email);

    Optional<UserEntity> findByEmailAndPhonenumber(String email, String phonenumber);

    Optional<UserEntity> findByUsernameIgnoreCase(String email);

}
