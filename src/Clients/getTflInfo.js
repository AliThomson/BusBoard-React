export async function getPostCodeInfo(postcode) {

    const url = `https://api.postcodes.io/postcodes/${encodeURI(postcode)}`
    const response = await fetch(url)
        
    return await response.json();
}
export async function getBusStopInfo(latitude, longitude, busStopRadius) {

    const url = `https://api.tfl.gov.uk/StopPoint/?lat=${latitude}&lon=${longitude}&stopTypes=NaptanPublicBusCoachTram&radius=${busStopRadius}`
    const response = await fetch(url)
        
    return await response.json();
}