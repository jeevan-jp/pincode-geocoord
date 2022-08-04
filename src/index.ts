import PincodeData from "./data";
import pincodeToCity from "./pincodeToCity";

function getGeoCoordsFromPincode(pincode: number | string): { lat: number, lng: number } | null {
  return PincodeData[pincode];
};

export { getGeoCoordsFromPincode, pincodeToCity };
