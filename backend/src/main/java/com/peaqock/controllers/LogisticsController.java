package com.peaqock.controllers;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.peaqock.clients.models.DataGraphql;
import com.peaqock.config.SearatesProps;
import com.peaqock.docs.Response.UserResponse;
import com.peaqock.services.logistics.LogisticsSearchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/logistics")
@RequiredArgsConstructor
public class LogisticsController {

    private final SearatesProps props;
    private final LogisticsSearchService logisticsSearchService;
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();
    @GetMapping("/token")
    public ResponseEntity<Object> gettoken() {
        return new ResponseEntity<Object>(logisticsSearchService.getsstoken().toString().replace("{s-token=", "").replace("}", ""), HttpStatus.CREATED);
    }

    @PostMapping(value = "/graphqlrates")
    public ResponseEntity<Object> getlogi(@RequestBody DataGraphql dataGraphql) {
        var headers = new HttpHeaders();
        headers.set("Authorization","Bearer "+props.getLogistics().getTokenLogistics());
        var bodyquery = logisticsSearchService.getBodyLogistics(dataGraphql.getType(),dataGraphql);
        return new ResponseEntity<Object>(logisticsSearchService.getResponseGraphql(bodyquery,headers), HttpStatus.CREATED);
    }
}
