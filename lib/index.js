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
    var _a, _b, _c, _d, _e, _f;
    const options = {
        includeScore: true,
    };
    const fuse = new fuse_js_1.default(DelhiveryCities_1.cities, options);
    city = city.trim();
    let result = fuse.search(city);
    if (result.length === 0) {
        if (city.indexOf(",")) {
            const cities = city.split(",");
            let score = 1;
            for (let city of cities) {
                city = city.trim();
                const res = fuse.search(city);
                if (typeof ((_a = res === null || res === void 0 ? void 0 : res[0]) === null || _a === void 0 ? void 0 : _a.score) !== "undefined" && ((_b = res === null || res === void 0 ? void 0 : res[0]) === null || _b === void 0 ? void 0 : _b.score) < score) {
                    score = res[0].score;
                    result = res;
                }
            }
        }
    }
    if (typeof ((_c = result[0]) === null || _c === void 0 ? void 0 : _c.score) !== "undefined") {
        console.log(`Found the city with ${(1 - result[0].score) * 100}% accuracy`);
    }
    if (typeof ((_d = result === null || result === void 0 ? void 0 : result[0]) === null || _d === void 0 ? void 0 : _d.score) !== "undefined" && ((_e = result === null || result === void 0 ? void 0 : result[0]) === null || _e === void 0 ? void 0 : _e.score) > 0.4) {
        return undefined;
    }
    return (_f = result[0]) === null || _f === void 0 ? void 0 : _f.item;
}
exports.generateCityNameToCalcZone = generateCityNameToCalcZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEVBQTZDO0FBQzdDLG9FQUE0QztBQTZDVix3QkE3QzNCLHVCQUFhLENBNkMyQjtBQTVDL0Msc0RBQTJCO0FBQzNCLHVEQUEyQztBQUUzQyxTQUFTLHVCQUF1QixDQUM5QixPQUF3QjtJQUV4QixPQUFPLDBCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQXFDUSwwREFBdUI7QUFuQ2hDLFNBQVMsMEJBQTBCLENBQUMsSUFBWTs7SUFDOUMsTUFBTSxPQUFPLEdBQUc7UUFDZCxZQUFZLEVBQUUsSUFBSTtLQUNuQixDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLHdCQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLElBQUksT0FBTyxDQUFBLE1BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFHLENBQUMsQ0FBQywwQ0FBRSxLQUFLLENBQUEsS0FBSyxXQUFXLElBQUksQ0FBQSxNQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRyxDQUFDLENBQUMsMENBQUUsS0FBSyxJQUFHLEtBQUssRUFBRTtvQkFDckUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ3JCLE1BQU0sR0FBRyxHQUFHLENBQUM7aUJBQ2Q7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxJQUFJLE9BQU8sQ0FBQSxNQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsMENBQUUsS0FBSyxDQUFBLEtBQUssV0FBVyxFQUFFO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDO0tBQzdFO0lBRUQsSUFBSSxPQUFPLENBQUEsTUFBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUcsQ0FBQyxDQUFDLDBDQUFFLEtBQUssQ0FBQSxLQUFLLFdBQVcsSUFBSSxDQUFBLE1BQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFHLENBQUMsQ0FBQywwQ0FBRSxLQUFLLElBQUcsR0FBRyxFQUFFO1FBQ3pFLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxNQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsMENBQUUsSUFBSSxDQUFDO0FBQ3pCLENBQUM7QUFFZ0QsZ0VBQTBCIn0=