'use strict';

var chai = require('chai');
var expect = chai.expect;
var Calc = require('./Calc')

describe('Test Calc class',function(){
    it('Tests add method',function(){
        let calc = new Calc()
        let result = calc.add(5,7)
        expect(result).to.equal(12)
    })
    it('Tests subtract method',function(){
        let calc = new Calc()
        let result = calc.subtract(16,7)
        expect(result).to.equal(9)
    })
})
