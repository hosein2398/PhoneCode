# PhoneCode  [![Build Status](https://travis-ci.org/hosein2398/PhoneCode.svg?branch=master)](https://travis-ci.org/hosein2398/PhoneCode)
Get countries' phone code or do reverse.

## Installation
```
npm i --save phonecode
```

## Usage 
Get phone code of a country :
```JS
var phonecode = require('phonecode');

var one = phonecode.codeOf('Italy');
console.log(one); // 39
```

Recognize a number is which country's phone code:
```JS
var phonecode = require('phonecode');

var one = phonecode.isCodeOf(91);
console.log(one); // India
```

## Api

**codeOf** (parameter : `string`)  
Description : returns phone code of a country.  
Returns : `number`  

**isCodeOf** (parameter : `number`)  
Description : returns name of a country which has the phone code.  
Returns : `string`  
