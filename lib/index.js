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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
        if (city.includes(",")) {
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
        // eg. East Thane West
        // In this case we search by excluding first word in each itereation and result with highest accuracy is taken
        // We also search by splitting them and result with more accuracy is taken
        else if (city.includes(" ")) {
            let score = 1;
            const cities = city.split(" ");
            for (let index = 1; index < cities.length; index++) {
                city = cities.slice(index, city.length).join(" ");
                city = city.trim();
                const res = fuse.search(city);
                if (typeof ((_e = res === null || res === void 0 ? void 0 : res[0]) === null || _e === void 0 ? void 0 : _e.score) !== "undefined" && ((_f = res === null || res === void 0 ? void 0 : res[0]) === null || _f === void 0 ? void 0 : _f.score) < score) {
                    score = res[0].score;
                    result = res;
                }
            }
            for (let city of cities) {
                city = city.trim();
                const res = fuse.search(city);
                if (typeof ((_g = res === null || res === void 0 ? void 0 : res[0]) === null || _g === void 0 ? void 0 : _g.score) !== "undefined" && ((_h = res === null || res === void 0 ? void 0 : res[0]) === null || _h === void 0 ? void 0 : _h.score) < score) {
                    score = res[0].score;
                    result = res;
                }
            }
        }
    }
    if (typeof ((_j = result[0]) === null || _j === void 0 ? void 0 : _j.score) !== "undefined") {
        console.log(`Found the city with ${(1 - result[0].score) * 100}% accuracy`);
    }
    // Results with less than 60% accuracy need not to be considered
    if (typeof ((_k = result === null || result === void 0 ? void 0 : result[0]) === null || _k === void 0 ? void 0 : _k.score) !== "undefined" && ((_l = result === null || result === void 0 ? void 0 : result[0]) === null || _l === void 0 ? void 0 : _l.score) > 0.4) {
        return undefined;
    }
    return (_m = result[0]) === null || _m === void 0 ? void 0 : _m.item;
}
exports.generateCityNameToCalcZone = generateCityNameToCalcZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEVBQTZDO0FBQzdDLG9FQUE0QztBQTZFVix3QkE3RTNCLHVCQUFhLENBNkUyQjtBQTVFL0Msc0RBQTJCO0FBQzNCLHVEQUEyQztBQUUzQyxTQUFTLHVCQUF1QixDQUM5QixPQUF3QjtJQUV4QixPQUFPLDBCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQXFFUSwwREFBdUI7QUFuRWhDLFNBQVMsMEJBQTBCLENBQUMsSUFBWTs7SUFDOUMsTUFBTSxPQUFPLEdBQUc7UUFDZCxZQUFZLEVBQUUsSUFBSTtLQUNuQixDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLHdCQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLGdFQUFnRTtJQUNoRSxJQUFJLE9BQU8sQ0FBQSxNQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRyxDQUFDLENBQUMsMENBQUUsS0FBSyxDQUFBLEtBQUssV0FBVyxJQUFJLENBQUEsTUFBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUcsQ0FBQyxDQUFDLDBDQUFFLEtBQUssSUFBRyxHQUFHLEVBQUU7UUFDekUsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNiO0lBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QiwrRUFBK0U7UUFDL0Usc0NBQXNDO1FBQ3RDLHFGQUFxRjtRQUNyRixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FB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