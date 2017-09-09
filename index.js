var fs = require("fs");
var country_contents = fs.readFileSync("names.json");
var country_jsonContent = JSON.parse(country_contents);

var phone_contents = fs.readFileSync("phone.json");
var phone_jsonContent = JSON.parse(phone_contents);

function codeOf(countryName) {
    var country_code;
    // first we have to get country code
    for (key in country_jsonContent) {
        if (countryName.toLowerCase() === country_jsonContent[key].toLowerCase()) {
            country_code = key;
        }
    }
    for (key in phone_jsonContent) {
        if (country_code.toLowerCase() === key.toLowerCase()) {
            return Number(phone_jsonContent[key]);
        }
    }
}


function isCodeOf(number) {
    var country_code;
    for (key in phone_jsonContent) {
        if (number == phone_jsonContent[key]) {
            country_code = key;
        }
    }
    for (key in country_jsonContent) {
        if (country_code == key) {
            return country_jsonContent[key];
        }
    }
}


module.exports = {
    codeOf: codeOf,
    isCodeOf: isCodeOf
}