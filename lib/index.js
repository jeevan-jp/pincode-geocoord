"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pincodeToCity = exports.getGeoCoordsFromPincode = void 0;
const data_1 = __importDefault(require("./data"));
const pincodeToCity_1 = __importDefault(require("./pincodeToCity"));
exports.pincodeToCity = pincodeToCity_1.default;
function getGeoCoordsFromPincode(pincode) {
    return data_1.default[pincode];
}
exports.getGeoCoordsFromPincode = getGeoCoordsFromPincode;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQWlDO0FBQ2pDLG9FQUE0QztBQU1WLHdCQU4zQix1QkFBYSxDQU0yQjtBQUovQyxTQUFTLHVCQUF1QixDQUFDLE9BQXdCO0lBQ3ZELE9BQU8sY0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFUSwwREFBdUI7QUFGL0IsQ0FBQyJ9