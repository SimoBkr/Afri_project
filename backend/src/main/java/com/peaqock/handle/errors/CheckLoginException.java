package com.peaqock.handle.errors;

public class CheckLoginException extends RuntimeException {

    public CheckLoginException(String message) {
        super(message);
    }
}
