import PincodeData from "./PincodeToGeoCode";
import pincodeToCity from "./pincodeToCity";
import Fuse from "fuse.js";
import { cities } from "./DelhiveryCities";

function getGeoCoordsFromPincode(
  pincode: number | string
): { lat: number; lng: number } | null {
  return PincodeData[pincode];
}

function generateCityNameToCalcZone(city: string): string | undefined {
  const options = {
    includeScore: true,
  };
  const fuse = new Fuse(cities, options);
  city = city.trim();
  let result = fuse.search(city);

  // Results with less than 60% accuracy need not to be considered
  if (typeof result?.[0]?.score !== "undefined" && result?.[0]?.score > 0.4) {
    result = [];
  }
  if (result.length === 0) {
    // When city name entered by user contains multiple comma sepereated place name
    // eg. Kanjiramattom, Ernakulam, Kochi
    // In this case we search by splitting them and result with highest accuracy is taken
    if (city.indexOf(",")>=0) {
      const cities = city.split(",");

      let score = 1;

      for (let city of cities) {
        city = city.trim();
        const res = fuse.search(city);
        if (typeof res?.[0]?.score !== "undefined" && res?.[0]?.score < score) {
          score = res[0].score;
          result = res;
        }
      }
    } 
    // When city name entered by user contains multiple space sepereated place name
    // eg. Kanjiramattom, Ernakulam, Kochi
    // In this case we search by excluding first word in each itereation and result with highest accuracy is taken
    else if (city.indexOf(' ')>=0){
      let score = 1;
      while(city.indexOf(' ')>=0){
        const ind = city.indexOf(' ');
        city = city.slice(ind,city.length);
        city = city.trim();
        const res = fuse.search(city);
        if (typeof res?.[0]?.score !== "undefined" && res?.[0]?.score < score) {
          score = res[0].score;
          result = res;
        }
       
      }
    }
  }

  if (typeof result[0]?.score !== "undefined") {
    console.log(`Found the city with ${(1 - result[0].score) * 100}% accuracy`);
  }

  // Results with less than 60% accuracy need not to be considered
  if (typeof result?.[0]?.score !== "undefined" && result?.[0]?.score > 0.4) {
    return undefined;
  }
  return result[0]?.item;
}
export { getGeoCoordsFromPincode, pincodeToCity, generateCityNameToCalcZone };
