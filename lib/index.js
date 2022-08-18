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
const lodash_1 = __importDefault(require("lodash"));
function getGeoCoordsFromPincode(pincode) {
    return PincodeToGeoCode_1.default[pincode];
}
exports.getGeoCoordsFromPincode = getGeoCoordsFromPincode;
function generateCityNameToCalcZone(city) {
    var _a, _b, _c, _d, _e;
    const options = {
        includeScore: true,
    };
    const fuse = new fuse_js_1.default(DelhiveryCities_1.cities, options);
    let result = fuse.search(city);
    if (result.length === 0) {
        if (city.indexOf(",")) {
            const cities = city.split(",");
            let score = 1;
            for (let city of cities) {
                city = lodash_1.default.trim(city);
                const res = fuse.search(city);
                if (typeof ((_a = res === null || res === void 0 ? void 0 : res[0]) === null || _a === void 0 ? void 0 : _a.score) !== "undefined" && ((_b = res === null || res === void 0 ? void 0 : res[0]) === null || _b === void 0 ? void 0 : _b.score) < score) {
                    score = res[0].score;
                    result = res;
                }
            }
        }
    }
    if (typeof result[0].score !== "undefined") {
        console.log(`Found the city with ${(1 - result[0].score) * 100}% accuracy`);
    }
    if (typeof ((_c = result === null || result === void 0 ? void 0 : result[0]) === null || _c === void 0 ? void 0 : _c.score) !== "undefined" && ((_d = result === null || result === void 0 ? void 0 : result[0]) === null || _d === void 0 ? void 0 : _d.score) > 0.4) {
        return undefined;
    }
    return (_e = result[0]) === null || _e === void 0 ? void 0 : _e.item;
}
exports.generateCityNameToCalcZone = generateCityNameToCalcZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEVBQTZDO0FBQzdDLG9FQUE0QztBQThDVix3QkE5QzNCLHVCQUFhLENBOEMyQjtBQTdDL0Msc0RBQTJCO0FBQzNCLHVEQUEyQztBQUMzQyxvREFBdUI7QUFFdkIsU0FBUyx1QkFBdUIsQ0FDOUIsT0FBd0I7SUFFeEIsT0FBTywwQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFxQ1EsMERBQXVCO0FBbkNoQyxTQUFTLDBCQUEwQixDQUFDLElBQVk7O0lBQzlDLE1BQU0sT0FBTyxHQUFHO1FBQ2QsWUFBWSxFQUFFLElBQUk7S0FDbkIsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyx3QkFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXZDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0IsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUvQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixJQUFJLE9BQU8sQ0FBQSxNQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRyxDQUFDLENBQUMsMENBQUUsS0FBSyxDQUFBLEtBQUssV0FBVyxJQUFJLENBQUEsTUFBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUcsQ0FBQyxDQUFDLDBDQUFFLEtBQUssSUFBRyxLQUFLLEVBQUU7b0JBQ3JFLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNyQixNQUFNLEdBQUcsR0FBRyxDQUFDO2lCQUNkO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDO0tBQzdFO0lBRUQsSUFBSSxPQUFPLENBQUEsTUFBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUcsQ0FBQyxDQUFDLDBDQUFFLEtBQUssQ0FBQSxLQUFLLFdBQVcsSUFBSSxDQUFBLE1BQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFHLENBQUMsQ0FBQywwQ0FBRSxLQUFLLElBQUcsR0FBRyxFQUFFO1FBQ3pFLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxNQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsMENBQUUsSUFBSSxDQUFDO0FBQ3pCLENBQUM7QUFFZ0QsZ0VBQTBCIn0=