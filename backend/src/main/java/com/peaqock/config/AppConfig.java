package com.peaqock.config;

import com.google.maps.GeoApiContext;
import feign.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.io.IOException;
import java.security.*;
import java.security.cert.CertificateException;
import java.util.concurrent.TimeUnit;

@Configuration
public class AppConfig {

    @Bean
    @Description("Cors origin filter")
    CorsFilter corsFilter() {
        final var config = new CorsConfiguration();
        config.setMaxAge(1800L);
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        final var source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Bean
    @Description("Geo Api Context")
    GeoApiContext geoApiContext(@Value("${google.map.api-key}") String apiKey) {
        return new GeoApiContext.Builder()
                .apiKey(apiKey)
                .retryTimeout(0, TimeUnit.MICROSECONDS)
                .build();
    }

    @Bean
    public KeyPair keyPair(AuthProps authProps) throws IOException, UnrecoverableKeyException, NoSuchAlgorithmException, KeyStoreException, CertificateException {
        final var props = authProps.getJwt();
        final var ksFile = props.getKeyStore();

        final var keystore = KeyStore.getInstance(ksFile.getFile(), props.getKeyPassword().toCharArray());
        final var certificate = keystore.getCertificate(props.getKeyAlias());

        final var publicKey = certificate.getPublicKey();
        final var privateKey = (PrivateKey) keystore.getKey(props.getKeyAlias(), props.getKeyPassword().toCharArray());

        return new KeyPair(publicKey, privateKey);
    }

    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}
