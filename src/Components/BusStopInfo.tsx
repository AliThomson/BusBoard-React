import React, { useState, useEffect} from "react";
import { getBusStopInfo } from "../Clients/getTflInfo";

export function BusStopInfo( {longitude}, {latitude})
{
    const [nearestBusStops, setNearestBusStops] = useState<Array<number>>();
    
    let busStopRadius = 500;
    useEffect(
        function() {
            getBusStopInfo(latitude, longitude, busStopRadius)
                .then(busStopData => {
                    setNearestBusStops(busStopData.stopPoints.naptanID);
                    
                });
        },
        [latitude, longitude, busStopRadius]
    );


    return (
        <div>
            <h2>BusBoard: </h2>
                {
                longitude !== undefined
                    ? <p>Longitude = {longitude}</p>
                    : <p>Loading info...</p>
                }
                {
                latitude !== undefined
                    ? <p>Latitude = {latitude}</p>
                    : <p>Loading info...</p>
                }

        </div>
    )
}