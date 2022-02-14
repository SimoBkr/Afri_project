package com.peaqock.handle.errors;

public class CheckPasswordOrEmail extends RuntimeException {

    public CheckPasswordOrEmail(String message) {
        super(message);
    }
}
