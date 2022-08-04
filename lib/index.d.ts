import pincodeToCity from "./pincodeToCity";
declare function getGeoCoordsFromPincode(pincode: number | string): {
    lat: number;
    lng: number;
} | null;
export { getGeoCoordsFromPincode, pincodeToCity };
