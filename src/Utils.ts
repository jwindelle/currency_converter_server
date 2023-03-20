import { currencies } from "exchange-rates-api";

export class Utils
{
    /**
     * Rearranges the currencies list by putting the priority currencies in the beginning of the currencies
     * @param currencies the array of all the currencies
     * @param priorities the array of currencies to move to the beginning of the array of the currencies
     */
    static arrangeCurrenciesByPriority(currencies:string[], priorities:string[])
    {
        priorities.forEach((item, index)=>{
            var index = currencies.indexOf(item);
            if (index !== -1) {
                currencies.splice(index, 1);
            }
            currencies.unshift(item);
        })


        return currencies;
    }
}