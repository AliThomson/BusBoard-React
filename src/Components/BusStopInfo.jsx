import React, { useState, useEffect} from "react";
import { getBusStopInfo } from "../Clients/getTflInfo";

export function BusStopInfo( {longitude, latitude})
{
    const [nearestBusStops, setNearestBusStops] = useState();
    
    let busStopRadius = 500;
    useEffect(
        function() {
            getBusStopInfo(latitude, longitude, busStopRadius)
                .then(busStopData => {
                    setNearestBusStops(busStopData.stopPoints[0].naptanId);
                });
        },
        [latitude, longitude, busStopRadius]
    );


    return (
        <div>
            {
            nearestBusStops !== undefined
                ? <p>Busstop = {nearestBusStops}</p>
                : <p>Loading info...</p>
            }
        </div>
    )
}