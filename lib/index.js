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
    var _a;
    const fuse = new fuse_js_1.default(DelhiveryCities_1.cities);
    const result = fuse.search(city);
    return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.item;
}
exports.generateCityNameToCalcZone = generateCityNameToCalcZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEVBQTZDO0FBQzdDLG9FQUE0QztBQWlCVix3QkFqQjNCLHVCQUFhLENBaUIyQjtBQWhCL0Msc0RBQTJCO0FBQzNCLHVEQUEyQztBQUUzQyxTQUFTLHVCQUF1QixDQUM5QixPQUF3QjtJQUV4QixPQUFPLDBCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQVNRLDBEQUF1QjtBQVBoQyxTQUFTLDBCQUEwQixDQUFDLElBQVk7O0lBQzlDLE1BQU0sSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyx3QkFBTSxDQUFDLENBQUM7SUFFOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQyxPQUFPLE1BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxJQUFJLENBQUM7QUFDekIsQ0FBQztBQUNnRCxnRUFBMEIifQ==