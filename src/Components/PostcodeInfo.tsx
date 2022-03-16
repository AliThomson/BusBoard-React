import { useState, useEffect, ChangeEventHandler, FormEventHandler} from "react";
import { getPostCodeInfo } from "../Clients/getTflInfo";
//import { BusStopInfo } from "./BusStopInfo";

export function PostcodeInfo() 
{
    const [longitude, setLongitude] = useState<number>();
    const [latitude, setLatitude] = useState<number>();
    const [ward, setWard] = useState<string>();
    const [postcode, setPostcode] = useState<string>();
    
    const formAction: FormEventHandler<HTMLFormElement> = (event) =>
    {
        event.preventDefault();
        getPostCodeInfo(postcode)
                .then(postcodeData => {
                    setLongitude(postcodeData.result.longitude);
                    setLatitude(postcodeData.result.latitude);
                    setWard(postcodeData.result.admin_ward);
                });
                const postcodeTitle = document.getElementById("postcode-title");

                if (postcodeTitle)
                {
                    postcodeTitle.textContent = `Postcode ${postcode}`;
                }
    }
    
    const onPostcodeChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    {
        setPostcode(event.target.value);
    }


    return (
        <main>
            <h1 id="postcode-title">Postcode</h1>
            <p>Latitude {latitude}, longitude {longitude}</p>
            <p>Ward: {ward}</p>
            <form onSubmit={formAction}>
                <label htmlFor="postcode">Postcode: </label>
                <input id="postcode" value={postcode} onChange={onPostcodeChange} />

                <input type="submit" />
            </form>
        </main>
    )
} 
{/* <h2>BusBoard: {postcode}</h2>
                {
                longitude !== undefined && latitude !== undefined
                    ? <BusStopInfo longitude={longitude} latitude={latitude}/>
                    : <p>Loading info...</p>
                }
                 */}