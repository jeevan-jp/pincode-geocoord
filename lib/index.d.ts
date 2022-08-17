import pincodeToCity from "./pincodeToCity";
declare function getGeoCoordsFromPincode(pincode: number | string): {
    lat: number;
    lng: number;
} | null;
declare function generateCityNameToCalcZone(city: string): string;
export { getGeoCoordsFromPincode, pincodeToCity, generateCityNameToCalcZone };
