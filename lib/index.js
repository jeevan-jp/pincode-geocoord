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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const options = {
        includeScore: true,
    };
    const fuse = new fuse_js_1.default(DelhiveryCities_1.cities, options);
    city = city.trim();
    let result = fuse.search(city);
    // Results with less than 60% accuracy need not to be considered
    if (typeof ((_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a.score) !== "undefined" && ((_b = result === null || result === void 0 ? void 0 : result[0]) === null || _b === void 0 ? void 0 : _b.score) > 0.4) {
        result = [];
    }
    if (result.length === 0) {
        // When city name entered by user contains multiple comma sepereated place name
        // eg. Kanjiramattom, Ernakulam, Kochi
        // In this case we search by splitting them and result with highest accuracy is taken
        if (city.indexOf(",") >= 0) {
            const cities = city.split(",");
            let score = 1;
            for (let city of cities) {
                city = city.trim();
                const res = fuse.search(city);
                if (typeof ((_c = res === null || res === void 0 ? void 0 : res[0]) === null || _c === void 0 ? void 0 : _c.score) !== "undefined" && ((_d = res === null || res === void 0 ? void 0 : res[0]) === null || _d === void 0 ? void 0 : _d.score) < score) {
                    score = res[0].score;
                    result = res;
                }
            }
        }
        // When city name entered by user contains multiple space sepereated place name
        // eg. Kanjiramattom, Ernakulam, Kochi
        // In this case we search by excluding first word in each itereation and result with highest accuracy is taken
        else if (city.indexOf(' ') >= 0) {
            let score = 1;
            while (city.indexOf(' ') >= 0) {
                const ind = city.indexOf(' ');
                city = city.slice(ind, city.length);
                city = city.trim();
                const res = fuse.search(city);
                if (typeof ((_e = res === null || res === void 0 ? void 0 : res[0]) === null || _e === void 0 ? void 0 : _e.score) !== "undefined" && ((_f = res === null || res === void 0 ? void 0 : res[0]) === null || _f === void 0 ? void 0 : _f.score) < score) {
                    score = res[0].score;
                    result = res;
                }
            }
        }
    }
    if (typeof ((_g = result[0]) === null || _g === void 0 ? void 0 : _g.score) !== "undefined") {
        console.log(`Found the city with ${(1 - result[0].score) * 100}% accuracy`);
    }
    // Results with less than 60% accuracy need not to be considered
    if (typeof ((_h = result === null || result === void 0 ? void 0 : result[0]) === null || _h === void 0 ? void 0 : _h.score) !== "undefined" && ((_j = result === null || result === void 0 ? void 0 : result[0]) === null || _j === void 0 ? void 0 : _j.score) > 0.4) {
        return undefined;
    }
    return (_k = result[0]) === null || _k === void 0 ? void 0 : _k.item;
}
exports.generateCityNameToCalcZone = generateCityNameToCalcZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEVBQTZDO0FBQzdDLG9FQUE0QztBQXFFVix3QkFyRTNCLHVCQUFhLENBcUUyQjtBQXBFL0Msc0RBQTJCO0FBQzNCLHVEQUEyQztBQUUzQyxTQUFTLHVCQUF1QixDQUM5QixPQUF3QjtJQUV4QixPQUFPLDBCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQTZEUSwwREFBdUI7QUEzRGhDLFNBQVMsMEJBQTBCLENBQUMsSUFBWTs7SUFDOUMsTUFBTSxPQUFPLEdBQUc7UUFDZCxZQUFZLEVBQUUsSUFBSTtLQUNuQixDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLHdCQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLGdFQUFnRTtJQUNoRSxJQUFJLE9BQU8sQ0FBQSxNQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRyxDQUFDLENBQUMsMENBQUUsS0FBSyxDQUFBLEtBQUssV0FBVyxJQUFJLENBQUEsTUFBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUcsQ0FBQyxDQUFDLDBDQUFFLEtBQUssSUFBRyxHQUFHLEVBQUU7UUFDekUsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNiO0lBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QiwrRUFBK0U7UUFDL0Usc0NBQXNDO1FBQ3RDLHFGQUFxRjtRQUNyRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUUsQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FB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