var test = require('tape');
var phonecode = require('./index');

test('should return true types', function (t) {
    t.plan(2);
    t.equal(typeof phonecode.codeOf('Slovenia'), 'number');
    t.equal(typeof phonecode.isCodeOf(1), 'string');
});

test('should return true names', function (t) {

    t.plan(6);

    t.equal(phonecode.codeOf('Italy'), 39);
    t.equal(phonecode.codeOf('France'), 33);
    t.equal(phonecode.codeOf('pakistan'), 92);


    t.equal(phonecode.isCodeOf(92), 'Pakistan');
    t.equal(phonecode.isCodeOf(91), 'India');
    t.equal(phonecode.isCodeOf(993), 'Turkmenistan');    
});