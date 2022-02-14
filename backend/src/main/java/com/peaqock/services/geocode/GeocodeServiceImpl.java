package com.peaqock.services.geocode;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.maps.GeoApiContext;
import com.google.maps.PlaceAutocompleteRequest;
import com.google.maps.PlacesApi;
import com.google.maps.model.AddressType;
import com.google.maps.model.AutocompletePrediction;
import com.google.maps.model.PlaceAutocompleteType;
import com.google.maps.model.PlaceDetails;
import com.peaqock.clients.models.AirSeaPorts;
import com.peaqock.clients.models.CityInfo;
import com.peaqock.clients.models.Prediction;
import com.peaqock.docs.CountryPorts;
import com.peaqock.docs.CountryPortsnew;
import com.peaqock.handle.errors.EmptyInputException;
import com.peaqock.repos.AirSeaPortRepo;
import com.peaqock.repos.CountryPortsRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static com.peaqock.utils.GeometryUtils.checkPointIsNear;
import static com.peaqock.utils.GeometryUtils.createPoint;

@Log4j2
@Service
@RequiredArgsConstructor
public class GeocodeServiceImpl implements GeocodeService {

    private final GeoApiContext geoApiContext;
    private final CountryPortsRepo countryPortsRepo;
    private final PlaceAutocompleteRequest.SessionToken sessionToken = new PlaceAutocompleteRequest.SessionToken();
    final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    private final AirSeaPortRepo airSeaPortRepo;

    @Override
    public List<Prediction> placeAutoComplete(String input) {

        if (input.isEmpty()) throw new EmptyInputException("please fill out this field.");
        final var autocompletePredictions =
                PlacesApi.placeAutocomplete(geoApiContext, input.toLowerCase(), sessionToken)
                        .types(PlaceAutocompleteType.GEOCODE)
                        .awaitIgnoreError();
        return assemblyPrediction(autocompletePredictions, input.toLowerCase());
    }

//    @Override
//    public AutocompletePrediction[] placeAutoComplete(String input) {
//
//        if (input.isEmpty()) throw new EmptyInputException("please fill out this field.");
//
//        var dd = PlacesApi.placeAutocomplete(geoApiContext, input.toLowerCase(), sessionToken)
//                .types(PlaceAutocompleteType.GEOCODE)
//                .awaitIgnoreError();
//
//        System.out.println(dd+"Hello");
//
//        return dd;
//    }

    @Override
    public CountryPorts isCountryOrCity(Prediction prediction) {
        return null;
    }

    @Override
    public CountryPortsnew isCountryOrCityy(Prediction prediction) {

        var placeDetails = getPlaceDetailsById(prediction.getPlaceId());

        //log.info(gson.toJson(placeDetails)+"gson data");

        var addressTypes = placeDetails.types;

        var locality = Arrays.stream(addressTypes)
                .filter(Predicate.isEqual(AddressType.COUNTRY))
                .findAny()
                .orElse(AddressType.LOCALITY);

        if (prediction.getCity().isEmpty() || prediction.getPlaceId().isEmpty()) {
            throw new EmptyInputException("please check if all the fields is entered");
        }

        if (prediction.getCity().isBlank() || prediction.getPlaceId().isBlank()) {
            throw new EmptyInputException("please you are missing");
        }

        switch (locality) {

            case COUNTRY: {

                List<AirSeaPorts> listseaport = airSeaPortRepo.findByCountrycodeAndType(prediction.getCounrty_code(),"port");
                List<AirSeaPorts> listairport = airSeaPortRepo.findByCountrycodeAndType(prediction.getCounrty_code(),"airport");

                CountryPortsnew countryPortsnew = new CountryPortsnew();

                countryPortsnew.setType("country");

                countryPortsnew.setSeaPorts(listseaport.stream()
                        .collect(Collectors.toList()));

                countryPortsnew.setAirPorts(listairport.stream()
                        .collect(Collectors.toList()));
                return countryPortsnew;
            }

            case LOCALITY: {

                var cityLagLat = placeDetails.geometry.location;

                var centerPoint = createPoint(cityLagLat.lng, cityLagLat.lat);

                CityInfo cityInfo = new CityInfo();

                cityInfo.setId(prediction.getPlaceId());
                cityInfo.setName(prediction.getCity());
                cityInfo.setLat(cityLagLat.lat);
                cityInfo.setLng(cityLagLat.lng);


                var countryPorts = countryPortsRepo.findBycCode(prediction.getCode())
                        .orElse(null);

                List<AirSeaPorts> listseaport = airSeaPortRepo.findByCountrycodeAndType(prediction.getCounrty_code(),"port");
                List<AirSeaPorts> listairport = airSeaPortRepo.findByCountrycodeAndType(prediction.getCounrty_code(),"airport");

                CountryPortsnew countryPortsnew = new CountryPortsnew();

                countryPortsnew.setCityInfo(cityInfo);

                countryPortsnew.setType("city");

                countryPortsnew.setSeaPorts(listseaport.stream()
                        .filter(airSeaPorts -> airSeaPorts.getLat()!=null || airSeaPorts.getLng() != null)
                        .filter(airSeaPorts -> checkPointIsNear(centerPoint, createPoint(Double.parseDouble(airSeaPorts.getLng()),Double.parseDouble(airSeaPorts.getLat()))))
                        .collect(Collectors.toList()));

                countryPortsnew.setAirPorts(listairport.stream()
                        .filter(airSeaPorts -> airSeaPorts.getLat()!=null || airSeaPorts.getLng() != null)
                        .filter(airSeaPorts -> checkPointIsNear(centerPoint, createPoint(Double.parseDouble(airSeaPorts.getLng()),Double.parseDouble(airSeaPorts.getLat()))))
                        .collect(Collectors.toList()));
                return countryPortsnew;
            }
        }
        return null;
    }

    private PlaceDetails getPlaceDetailsById(String placeId) {
        if (placeId.isEmpty()) throw new EmptyInputException("Please fill out the PlaceId.");
        return PlacesApi.placeDetails(geoApiContext, placeId).awaitIgnoreError();
    }

    private List<Prediction> assemblyPrediction(AutocompletePrediction[] autoCompletePredictions, String input) {
        var predictions = Arrays.asList(autoCompletePredictions);

        return predictions.stream().map(prediction -> {

           var country = prediction.terms[prediction.terms.length - 1].value;

            System.out.println(country+"countryName");

            var countryCode = getCountryCode(country);

//            if (countryCode.equals("Unknown")) {
//
////                var placesSearchResponse =
////                        PlacesApi.textSearchQuery
////                                (geoApiContext,country).awaitIgnoreError();
//
//                //System.out.println(placesSearchResponse+"placesearchsss");
//
//                countryCode = getCountryCode(Arrays.asList(PlacesApi.textSearchQuery
//                        (geoApiContext,country).awaitIgnoreError().results).get(0).formattedAddress.toLowerCase());
//
////                countryCode = Arrays.asList(placesSearchResponse.results).stream()
////                        .map(placesSearchResponse1 -> getCountryCode(placesSearchResponse1.formattedAddress))
////                        .findFirst().get();
//            }

//            var types = Arrays.stream(prediction.types)
//                    .findFirst()
//                    .orElse("Unknown");

            var types = Arrays.stream(prediction.types)
                    .findFirst()
                    .orElse("Unknown");

            System.out.println(types+"tyoesssss");

            return Prediction.builder()
                    .placeId(prediction.placeId)
                    .city(prediction.terms[0].value)
                    .country(country)
                    .place_type(types)
                    .counrty_code(countryCode)
                    .code(countryCode)
                    .flag((countryCode + ".png").toLowerCase())
                    .build();
        }).filter(prediction -> prediction.getCity().toLowerCase().contains(input.toLowerCase()))
                .filter(prediction -> prediction.getPlace_type().equals("country") || prediction.getPlace_type().equals("locality"))
                .collect(Collectors.toList());
    }

    private String getCountryCode(String countryName) {

        return Arrays.stream(Locale.getISOCountries())
                .map(iso -> new Locale("", iso))
                .filter(local -> local.getDisplayCountry(Locale.ENGLISH).toLowerCase().equalsIgnoreCase(countryName.toLowerCase()))
                .findFirst()
                .map(locale -> locale.getCountry().toLowerCase())
                .orElse("Unknown");
    }

}

