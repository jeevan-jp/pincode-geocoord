import PincodeData from "./data";

function getGeoCoordsFromPincode(pincode: number | string): { lat: number, lng: number } | null {
  return PincodeData[pincode];
};

export default getGeoCoordsFromPincode;
