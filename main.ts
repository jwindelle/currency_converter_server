import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
    var whitelist = ['http://localhost:5000']; //white list consumers
    var corsOptions = {
    origin: function (origin:any, callback:any) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
    };
    cors(corsOptions);
import axios from 'axios';
import jsonp from 'jsonp';
import * as dotenv from 'dotenv';
    dotenv.config();
import { API } from './src/API'
import { Constants } from './src/Constants';
import { Utils } from './src/Utils';

const PORT = process.env.PORT;
var router = express.Router();
    router.use(cors(corsOptions));
var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/', router );
    // app.use(cors(corsOptions));
    // app.use(express.json());
    app.listen(PORT, ()=>{
        console.log(`server running at ${PORT}`);
    });

//====================================================================================
//  ROUTERS
//====================================================================================
router.get('/', (_req, _res)=>{
    _res.sendFile(__dirname+'/views/index.htm');
});

router.get('/currencies', async (_req, _res)=>{
    let result;

    try{
        result = await API.currencies();
        result = Utils.arrangeCurrenciesByPriority(result, Constants.priorityCurrencies);
    }catch(err){
        result = err;
    }

    _res.send(result);
});

router.post('/historicalConvert', async (_req, _res)=>
{
    let result;

    try
    {
        var data:any = {};
        if( Object.keys(_req.body).length>0 ){
            Object.keys(_req.body).forEach(paramName => {
                data[paramName] = _req.body[paramName];
            });
        }

        result = await API.historicalConvert(data.currency_from,data.currency_to,data.amount,new Date(data.historical_date));

        let js = JSON.parse( result.replace(/^callback\(|\)$/g, '') );

        if(js.success)
        {
            result = JSON.stringify(js.result);
        }
        else
        {
            result = undefined;
        }
    }
    catch(err)
    {
        result =  undefined;
    }

    _res.send(result);
});

router.get('/latest', async (_req, _res)=>{
    let result = await API.latest();
    _res.send( result );
});