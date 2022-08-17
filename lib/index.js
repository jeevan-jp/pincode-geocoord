"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCityNameToCalcZone = exports.pincodeToCity = exports.getGeoCoordsFromPincode = void 0;
const PincodeToGeoCode_1 = __importDefault(require("./PincodeToGeoCode"));
const pincodeToCity_1 = __importDefault(require("./pincodeToCity"));
exports.pincodeToCity = pincodeToCity_1.default;
const fuse_js_1 = __importDefault(require("fuse.js"));
const DelhiveryCities_1 = require("./DelhiveryCities");
function getGeoCoordsFromPincode(pincode) {
    return PincodeToGeoCode_1.default[pincode];
}
exports.getGeoCoordsFromPincode = getGeoCoordsFromPincode;
function generateCityNameToCalcZone(city) {
    const fuse = new fuse_js_1.default(DelhiveryCities_1.cities);
    const result = fuse.search(city);
    return result[0].item;
}
exports.generateCityNameToCalcZone = generateCityNameToCalcZone;
console.log(generateCityNameToCalcZone("Dilli"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEVBQTZDO0FBQzdDLG9FQUE0QztBQW1CVix3QkFuQjNCLHVCQUFhLENBbUIyQjtBQWxCL0Msc0RBQTJCO0FBQzNCLHVEQUEyQztBQUUzQyxTQUFTLHVCQUF1QixDQUM5QixPQUF3QjtJQUV4QixPQUFPLDBCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQVdRLDBEQUF1QjtBQVRoQyxTQUFTLDBCQUEwQixDQUFDLElBQVk7SUFDOUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLHdCQUFNLENBQUMsQ0FBQztJQUU5QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QixDQUFDO0FBR2dELGdFQUEwQjtBQUQzRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMifQ==