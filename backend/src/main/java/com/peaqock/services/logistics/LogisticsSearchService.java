package com.peaqock.services.logistics;

import com.peaqock.clients.SearatesClientService;
import com.peaqock.clients.models.DataGraphql;
import com.peaqock.config.SearatesProps;
import com.peaqock.docs.GraphConstants;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import java.net.URI;

@Log4j2
@Service
@RequiredArgsConstructor
public class LogisticsSearchService {

    private final SearatesProps props;
    private final SearatesClientService searatesClientService;

    public Object getsstoken() {
        return searatesClientService.getstoken(URI.create(props.getLogistics().getTokenApi()), props.getLogistics().getTokenId());
    }

    public Object getResponseGraphql(String query, HttpHeaders httpHeaders) {
        return searatesClientService.getLogisticsApi(URI.create(props.getLogistics().getApi()),query,httpHeaders);
    }

    public String getBodyLogistics(String type , DataGraphql dataGraphql){
        var requestBody = GraphConstants.FCLBODY;

        System.out.println(requestBody+"ssssi");

        if(dataGraphql.getIsmap() == true) {
            requestBody = GraphConstants.TARIFF;

            requestBody = requestBody.replace("$fromlatcityToPortTruck",dataGraphql.getCityToPortTruck().getFrom_lat())
                                     .replace("$fromlngcityToPortTruck",dataGraphql.getCityToPortTruck().getFrom_lng())
                                     .replace("$tolatcityToPortTruck",dataGraphql.getCityToPortTruck().getTo_lat())
                                     .replace("$tolngcityToPortTruck",dataGraphql.getCityToPortTruck().getTo_lng())
                                     .replace("$modecityToPortTruck",dataGraphql.getCityToPortTruck().getMode())
                                     .replace("$fromlatcityToPortRail",dataGraphql.getCityToPortRail().getFrom_lat())
                                     .replace("$fromlngcityToPortRail",dataGraphql.getCityToPortRail().getFrom_lng())
                                     .replace("$tolatcityToPortRail",dataGraphql.getCityToPortRail().getTo_lat())
                                     .replace("$tolngcityToPortRail",dataGraphql.getCityToPortRail().getTo_lng())
                                     .replace("$modecityToPortRail",dataGraphql.getCityToPortRail().getMode())
                                     .replace("$fromlatportToPort",dataGraphql.getPortToPort().getFrom_lat())
                                     .replace("$fromlngportToPort",dataGraphql.getPortToPort().getFrom_lng())
                                     .replace("$tolatportToPort",dataGraphql.getPortToPort().getTo_lat())
                                     .replace("$tolngportToPort",dataGraphql.getPortToPort().getTo_lng())
                                     .replace("$modeportToPort",dataGraphql.getPortToPort().getMode())
                                     .replace("$fromlatportToCityTruck",dataGraphql.getPortToCityTruck().getFrom_lat())
                                     .replace("$fromlngportToCityTruck",dataGraphql.getPortToCityTruck().getFrom_lng())
                                     .replace("$tolatportToCityTruck",dataGraphql.getPortToCityTruck().getTo_lat())
                                     .replace("$tolngportToCityTruck",dataGraphql.getPortToCityTruck().getTo_lng())
                                     .replace("$modeportToCityTruck",dataGraphql.getPortToCityTruck().getMode())
                                     .replace("$fromlatportToCityRail",dataGraphql.getPortToCityRail().getFrom_lat())
                                     .replace("$fromlngportToCityRail",dataGraphql.getPortToCityRail().getFrom_lng())
                                     .replace("$tolatportToCityRail",dataGraphql.getPortToCityRail().getTo_lat())
                                     .replace("$tolngportToCityRail",dataGraphql.getPortToCityRail().getTo_lng())
                                     .replace("$modeportToCityRail",dataGraphql.getPortToCityRail().getMode());

            log.info(requestBody+"requestBody");
            return requestBody;
        }

        if(!(dataGraphql.getId().isEmpty()))
        {
            requestBody =GraphConstants.BOOKNOW;
            requestBody=requestBody.replace("$id",dataGraphql.getId())
                        .replace("$option",dataGraphql.getType())
                        .replace("$quantity",dataGraphql.getQuantity())
                        .replace("$containerType",dataGraphql.getContainerType());
            return requestBody;
        }

        switch (type){
            case GraphConstants.FCL: {
//                requestBody = requestBody.replace("$fromlat",dataGraphql.getFrom_lat())
//                        .replace("$fromlng",dataGraphql.getFrom_lng())
//                        .replace("$fromlng",dataGraphql.getFrom_lng())
//                        .replace("$tolat",dataGraphql.getTo_lat())
//                        .replace("$tolng",dataGraphql.getTo_lng())
//                        .replace("$sdate",dataGraphql.getDate())
//                        .replace("$containerType",dataGraphql.getContainerType());
               return requestBody;
            }
            case GraphConstants.LCL:{
                requestBody = GraphConstants.LCLBODY;
                requestBody = requestBody.replace("$fromlat",dataGraphql.getFrom_lat())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$tolat",dataGraphql.getTo_lat())
                        .replace("$tolng",dataGraphql.getTo_lng())
                        .replace("$weight",dataGraphql.getWeight())
                        .replace("$volume",dataGraphql.getVolume())
                        .replace("$sdate",dataGraphql.getDate());
                return requestBody;
            }
            case GraphConstants.BULK:{
                requestBody = GraphConstants.BULKBODY;
                requestBody = requestBody.replace("$fromlat",dataGraphql.getFrom_lat())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$tolat",dataGraphql.getTo_lat())
                        .replace("$tolng",dataGraphql.getTo_lng())
                        .replace("$weight",dataGraphql.getWeight())
                        .replace("$sdate",dataGraphql.getDate());
                return requestBody;
            }
            case GraphConstants.AIR:{
                requestBody = GraphConstants.AIRBODY;
                requestBody = requestBody.replace("$fromlat",dataGraphql.getFrom_lat())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$tolat",dataGraphql.getTo_lat())
                        .replace("$tolng",dataGraphql.getTo_lng())
                        .replace("$weight",dataGraphql.getWeight())
                        .replace("$sdate",dataGraphql.getDate());
                return requestBody;
            }
            case GraphConstants.FTL:{
                requestBody = GraphConstants.FTLBODY;
                requestBody = requestBody.replace("$fromlat",dataGraphql.getFrom_lat())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$tolat",dataGraphql.getTo_lat())
                        .replace("$tolng",dataGraphql.getTo_lng())
                        .replace("$volume",dataGraphql.getVolume())
                        .replace("$sdate",dataGraphql.getDate());
                return requestBody;
            }
            case GraphConstants.LTL:{
                requestBody = GraphConstants.LTLBODY;
                requestBody = requestBody.replace("$fromlat",dataGraphql.getFrom_lat())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$tolat",dataGraphql.getTo_lat())
                        .replace("$tolng",dataGraphql.getTo_lng())
                        .replace("$weight",dataGraphql.getWeight())
                        .replace("$volume",dataGraphql.getVolume())
                        .replace("$sdate",dataGraphql.getDate());
                return requestBody;
            }
            case GraphConstants.RAIL:{
                requestBody = GraphConstants.RAILBODY;
                requestBody = requestBody.replace("$fromlat",dataGraphql.getFrom_lat())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$fromlng",dataGraphql.getFrom_lng())
                        .replace("$tolat",dataGraphql.getTo_lat())
                        .replace("$tolng",dataGraphql.getTo_lng())
                        .replace("$containerType",dataGraphql.getContainerType())
                        .replace("$sdate",dataGraphql.getDate());
                return requestBody;
            }
        }
        return null;
    }
}

