import PincodeData from "./PincodeToGeoCode";
import pincodeToCity from "./pincodeToCity";
import Fuse from "fuse.js";
import { cities } from "./DelhiveryCities";

function getGeoCoordsFromPincode(
  pincode: number | string
): { lat: number; lng: number } | null {
  return PincodeData[pincode];
}

function generateCityNameToCalcZone(city: string): string {
  const fuse = new Fuse(cities);

  const result = fuse.search(city);

  return result[0]?.item;
}
export { getGeoCoordsFromPincode, pincodeToCity, generateCityNameToCalcZone };
