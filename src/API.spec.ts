import { API } from './API';
import { expect } from 'chai';
import 'mocha'

describe('Historical Convert function', ()=>
{
    let expectedResult = 'callback({"motd":{"msg":"If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.","url":"https://exchangerate.host/#/donate"},"success":true,"query":{"from":"USD","to":"EUR","amount":1},"info":{"rate":0.843042},"historical":true,"date":"2021-06-21","result":0.843042})';
    it('should return ' + expectedResult, async ()=>{
        const result = await API.historicalConvert('USD','EUR',1,new Date('2020-04-04'));
        expect(result).to.equal(expectedResult);
    })

})