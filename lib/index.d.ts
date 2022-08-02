declare function getGeoCoordsFromPincode(pincode: number | string): {
    lat: number;
    lng: number;
} | null;
export default getGeoCoordsFromPincode;
