'use strict';

function Calc () {

}

Calc.prototype.add = function(a,b) {
    return a+b
}

Calc.prototype.subtract = function(a,b) {
    return a-b
}

module.exports =  Calc