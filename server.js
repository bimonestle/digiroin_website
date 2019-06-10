const express = require('express')
const cors = require('cors')
const app = express();
const path = require('path');
const axios = require('axios');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const redis = require("redis");
// const client = redis.createClient('6378', '54.179.161.208');
const baseURL = "https://wallet.digiro.in/"
const key = "Basic NjI4MTIzMjI5MTAxMTp0b2tlbl9iaW1waThxZnUyZ2NpNnJrOTN1Zw=="

let client = redis.createClient({
    host: '54.179.161.208',
    port: '6378',
    retry_strategy: function (options) {
        if (options.error && options.error.code === 'ECONNREFUSED') {
            // End reconnecting on a specific error and flush all commands with
            // a individual error
            return new Error('The server refused the connection');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            // End reconnecting after a specific timeout and flush all commands
            // with a individual error
            return new Error('Retry time exhausted');
        }
        if (options.attempt > 10) {
            // End reconnecting with built in error
            return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
    }
});

let headers = {
    'Authorization': key,
    'Content-Type': 'application/json'
}

app.disable('x-powered-by')
app.use(helmet())
app.use(helmet.noCache())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/')); 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/new-account', function (req, response) {
    let phone = req.body.phone;
    let instance = axios.create({
        baseURL: baseURL,
        headers: headers
    });
    let data = {
        "phone": phone
    }
    
    if (!phone) {
        return response.status(400).json({
            code: 400,
            message: 'Phone is required'
        })
    } else {
        instance.post('api/giro', data).then((res) => {
            return response.status(res.status).json({
                code: res.status,
                message: res.data
            })
        })
        .catch((err) => {
            return response.status(500).json({
                code: 500,
                message: "unknown error."
            })
        })
    }    
})

app.get('/api/balance/:giro', function (req, response) {
    let giro = req.params.giro;
    let instance = axios.create({
        baseURL: baseURL,
        headers: headers
    });
    
    if (!giro) {
        return response.status(400).json({
            code: 400,
            message: 'Phone is required'
        })
    } else {
        instance.get('api/balance/'+giro).then((res) => {
            return response.status(200).json({
                code: 200,
                message: res.response
            })
        })
        .catch((err) => {
            // console.log(err)
            return response.status(500).json({
                code: 500,
                message: err.response.data
            })
        })
    }    
})

app.get('/api/check-giro/:giro', function (req, response) {
    let giro = req.params.giro;
    client.keys('key.wallet.acount.*.*'+giro, function (err, keys) {
        if (err) {
            return response.status(500).json({
                code: 500,
                message: 'Unknown error.'
            })
        } else {
            var splitString = keys[0].split(".");
            var phone = splitString[4];
            var giro_account = splitString[5];
            if (keys.length > 0) {
                return response.status(200).json({
                    code: 200,
                    phone: phone,
                    giro: giro_account
                })
            } else {
                return response.status(400).json({
                    code: 400,
                    message: 'Giro not found.'
                })
            }
        }
    });
})

app.get('/api/check-phone/:giro', function (req, response) {
    let giro = req.params.giro;
    client.keys('key.wallet.acount.*.'+giro+'.*', function (err, keys) {
        var splitString = keys[0].split(".");
        var phone = splitString[4];
        var giro_account = splitString[5];
        if (keys.length > 0) {
            axios.post('http://18.136.26.4:3000/sms', {phone: phone, msg: 'Akun giro anda adalah '+giro_account})
            .then(function (res) {
                return response.status(201).json({
                    code: 201,
                    message: 'Success.'
                })
            })
            .catch(function (error) {
                return response.status(500).json({
                    code: 500,
                    message: 'Unknown error.'
                })
            });
            // return response.status(200).json({
            //     code: 200,
            //     phone: phone,
            //     giro: giro_account
            // })
        } else {
            return response.status(400).json({
                code: 400,
                message: 'Phone number is not registered.'
            })
        }
    });
})

app.listen(80);
console.log('Running on port 80....')