package com.peaqock;

import com.peaqock.clients.models.CityPort;
import com.peaqock.docs.*;
import com.peaqock.repos.PermissionRepo;
import com.peaqock.repos.RoleRepository;
import com.peaqock.repos.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Log4j2
@SpringBootApplication
@EnableJpaRepositories
@EnableJpaAuditing
@EnableScheduling
@EnableCircuitBreaker
@EnableFeignClients
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository userRepo, RoleRepository roleRepo, PermissionRepo permissionRepo, PasswordEncoder encoder) {
        return args -> {

//            var permissions = List.of(PermissionEntity.builder()
//                            .name(PermissionName.create_profiles).build(),
//                    PermissionEntity.builder()
//                            .name(PermissionName.read_profiles).build(),
//                    PermissionEntity.builder()
//                            .name(PermissionName.manage_profiles).build()
//            );
//            permissions = permissionRepo.saveAll(permissions);
//
//            var create_profiles= permissionRepo.findByName(PermissionName.create_profiles);
//            var read_profiles= permissionRepo.findByName(PermissionName.read_profiles);
//            var manage_profiles= permissionRepo.findByName(PermissionName.manage_profiles);

////            var roles = List.of(
////                    RoleEntity.builder()
////                            .name(RoleName.ROLE_ADMIN)
////                            .permissions(permissions)
////                            .build()
////            );

//            var roles = List.of(
//                    RoleEntity.builder()
//                            .name(RoleName.ROLE_ADMIN)
//                            .permissions(create_profiles)
//                            .permissions(read_profiles)
//                            .permissions(manage_profiles)
//                            .build()
//            );
//
//            roles = roleRepo.saveAll(roles);
//
//            if (userRepo.findByUsernameIgnoreCase("test").isEmpty()) {
//                userRepo.save(UserEntity.builder()
//                        .firstname("mohamed")
//                        .lastname("bakadir")
//                        .phonenumber("0617445063")
//                        .username("test")
//                        .email("test@mail.com")
//                        .encryptedPassword(encoder.encode("admin"))
//                        .roles(roleRepo.findByName(RoleName.ROLE_ADMIN))
//                        .build()
//                );
//            }
//            if (userRepo.findByUsernameIgnoreCase("test1").isEmpty()) {
//                userRepo.save(UserEntity.builder()
//                        .firstname("mohamed")
//                        .lastname("bakadir")
//                        .phonenumber("0617445064")
//                        .username("test1")
//                        .email("test1@mail.com")
//                        .encryptedPassword(encoder.encode("admin"))
//                        .roles(roles)
//                        .build()
//                );
//            }
        };
    }
}
