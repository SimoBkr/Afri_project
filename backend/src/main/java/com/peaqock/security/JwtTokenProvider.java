package com.peaqock.security;

import com.peaqock.config.AuthProps;
import com.peaqock.utils.dto.AccessToken;
import com.peaqock.utils.dto.UserPrincipal;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.security.KeyPair;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Log4j2
@Component
@RequiredArgsConstructor
public class JwtTokenProvider {

    private final KeyPair keyPair;
    private final AuthProps authProps;

    public AccessToken generateAccessToken(UserPrincipal userDetails) {
        final var props = authProps.getJwt();
        final var actualDate = Instant.now();
        var jwt = Jwts.builder()
                .setSubject(userDetails.getUserId())
                .setIssuer(props.getIssuer())
                .setIssuedAt(Date.from(actualDate))
                .setExpiration(Date.from(actualDate.plus(props.getAccessTokenValidity())))
                .signWith(SignatureAlgorithm.RS256, keyPair.getPrivate())
                .compact();
        var expireDate = getExpirationDate(jwt);
        return AccessToken.builder()
                .access_token(jwt)
                .expire(ChronoUnit.SECONDS.between(LocalDateTime.now(), LocalDateTime.ofInstant(expireDate.toInstant(), ZoneOffset.UTC)))
                .build();
    }

    public AccessToken generateTokenForResetPassword(String email) {
        final var props = authProps.getJwt();
        final var actualDate = Instant.now();
        var jwt = Jwts.builder()
                .setSubject(email)
                .setIssuer(props.getIssuer())
                .setIssuedAt(Date.from(actualDate))
                .setExpiration(Date.from(actualDate.plus(props.getAccessTokenValidity())))
                .signWith(SignatureAlgorithm.RS256, keyPair.getPrivate())
                .compact();
        var expireDate = getExpirationDate(jwt);
        return AccessToken.builder()
                .access_token(jwt)
                .expire(ChronoUnit.SECONDS.between(LocalDateTime.now(), LocalDateTime.ofInstant(expireDate.toInstant(), ZoneOffset.UTC)))
                .build();
    }

    public String getUserId(String token) {
        final var claims = Jwts.parser()
                .setSigningKey(keyPair.getPublic())
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public Date getExpirationDate(String token) {
        final var claims = Jwts.parser()
                .setSigningKey(keyPair.getPublic())
                .parseClaimsJws(token)
                .getBody();
        return claims.getExpiration();
    }

    public boolean validate(String token) {
        try {
            Jwts.parser().setSigningKey(keyPair.getPublic()).parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature - {}", ex.getMessage());
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token - {}", ex.getMessage());
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token - {}", ex.getMessage());
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token - {}", ex.getMessage());
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty - {}", ex.getMessage());
        }
        return false;
    }
}
