import axios from 'axios';
import { Constants } from './Constants';


export class API
{
    /**
     * Returns a list of latest available currencies
     */
    static async currencies():Promise<any>
    {
        let result = await axios.get( Constants.API_URL_BASE + Constants.API_ENDPOINT_URL_LATEST + Constants.API_PARAMETER_CALLBACK)
        .then((data)=>{
            if(data.data.error)
            {
                return data.data.error;
            }
            else
            {
                return data.data;
            }
        })


        return Object.keys(result.rates);
    }

    /**
     * Get the latest foreign exchange reference rates. 
     * Latest endpoint will return exchange rate data updated on daily basis.
     */
    static async latest():Promise<any>
    {
        let result = await axios.get( Constants.API_URL_BASE + Constants.API_ENDPOINT_URL_LATEST + Constants.API_PARAMETER_CALLBACK)
            .then((data)=>{
                if(data.data.error)
                {
                    return data.data.error;
                }
                else
                {
                    return data.data;
                }
            })


        return result.rates;
    }

    /**
     * Historical rates are available for most currencies all the way back to the year of 1999. 
     * You can query the API for historical rates by appending a date (format YYYY-MM-DD) to the base URL.
     * 
     * @param p_date format YYYY-MM-DD
     */
    static historical(p_date:Date)
    {
        axios.get( Constants.API_URL_BASE + Constants.API_ENDPOINT_URL_HISTORICAL + p_date + Constants.API_PARAMETER_CALLBACK)
            .then((data)=>{
                if(data.data.error)
                {
                    console.error(data.data.error);
                }
                else
                {
                    console.log(data.data);
                }
            })
    }

    /**
     * Currency conversion endpoint, can be used to convert any amount from one currency to another. 
     * In order to convert currencies, please use the API's convert endpoint, append the from and to parameters and set them to your preferred base and target currency codes.
     * 
     * @param p_get_params format is in url parameter query string e.g.: ?id=1&name=john
     */
    static simpleConvert(p_get_params:string)
    {
        axios.get( Constants.API_URL_BASE + Constants.API_ENDPOINT_URL_CONVERT + p_get_params + Constants.API_PARAMETER_CALLBACK)
            .then((data)=>{
                if(data.data.error)
                {
                    console.error(data.data.error);
                }
                else
                {
                    console.log(data.data);
                }
            })
    }

    /**
     * Currency conversion endpoint, can be used to convert any amount from one currency to another. 
     * In order to convert currencies, please use the API's convert endpoint, append the from and to parameters and set them to your preferred base and target currency codes.
     * 
     * @param p_from the base currency
     * @param p_to the target currency to be converted to
     * @param p_amt the amount to be converted
     * @param p_date the historical date to be used for currency convertion
     */
    static async historicalConvert(p_from:string, p_to:string, p_amt:number, p_date:Date)
    {
        let url= Constants.API_URL_BASE + Constants.API_ENDPOINT_URL_CONVERT + 
            '?from='+p_from
            +'&to='+p_to
            +'&amount='+p_amt
            +'&date='+p_date
            +'&callback=callback';

        let result = await axios.get(url)
            .then((data)=>{
                if(data.data.error)
                {
                    return data.data.error;
                }
                else
                {
                    return data.data;
                }
            })


        return result;
    }
}