# pincode-geocoord
Provides lat, long corresponding to Indian Pin codes.

installation as submodule:
```
npm i git+https://github.com/jeevan-jp/pincode-geocoord.md
```

Usage example:
```js
const getGeoCoordsFromPincode = require('pincode-geocoord');
console.log(getGeoCoordsFromPincode(110001));

/**
  {
    "lat": 26.384367,
    "lng": 88.187668
  }
*/
```
