import React, { useState, useEffect} from "react";
import { getPostCodeInfo } from "../Clients/getTflInfo";
import { BusStopInfo } from "./BusStopInfo";

export function PostcodeInfo() 
{
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    
    let postcode = "W139DE";
    useEffect(
        function() {
            getPostCodeInfo(postcode)
                .then(postcodeData => {
                    setLongitude(postcodeData.result.longitude);
                    setLatitude(postcodeData.result.latitude);
                });
        },
        [postcode]
    );


    return (
        <main>
            <h2>BusBoard: {postcode}</h2>
                {
                longitude !== undefined && latitude !== undefined
                    ? <BusStopInfo longitude={longitude} latitude={latitude}/>
                    : <p>Loading info...</p>
                }
                

        </main>
    )
}