export class Constants
{
    public static priorityCurrencies:string[] = ['USD', 'EUR'];

    public static API_URL_BASE:string = "https://api.exchangerate.host";
    public static API_ENDPOINT_URL_LATEST:string = "/latest";
    public static API_ENDPOINT_URL_HISTORICAL:string = "/"; // append date in YYYY-MM-DD format
    public static API_ENDPOINT_URL_CONVERT:string = "/convert";

    public static API_PARAMETER_CALLBACK:string = "&callback=callback";
}