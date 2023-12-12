
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var compiler = require("compilex");
const cors = require('cors');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", 'Content-Type');
    next();
});

var option = { stats: true };
compiler.init(option);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});
/*
app.post("/compilecode", function (req, res) {
    var code = req.body.code;
    var input = req.body.input;
    var inputRadio = req.body.inputRadio;
    var lang = req.body.lang;
    

    if (lang === "C" || lang === "C++") {
        if (inputRadio === "true") {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 20000 } };
            compiler.compileCPPWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
        } else {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
            compiler.compileCPP(envData, code, function (data) {
                res.send(data);
                //data.error = error message
                //data.output = output value
            }); 
        }
    }

    if (lang === "Python") {
        if (inputRadio === "true") {
            var envData = { OS: "windows" };
            compiler.compilePythonWithInput(envData, code, input, function (data) {
                
                res.send(data.output);
            });
        } else {
            var envData = { OS: "windows" };
            compiler.compilePython(envData, code, function (data) {
                res.send(data);
            });
        }
    }
});*/
app.post("/compilecode", function (req, res) {
    var code = req.body.code;
    var input = req.body.input;
    var inputRadio = req.body.inputRadio;
    var lang = req.body.lang;
    

    if (lang === "C" || lang === "C++") {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 20000 } };
            compiler.compileCPPWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
    }

    if (lang === "Python") {
            var envData = { OS: "windows" };
            compiler.compilePythonWithInput(envData, code, input, function (data) {
                res.send(data.output);
            });
    }
});





app.listen(8080, function () {
    console.log("Server is running on port 8080");
});

compiler.flush(function () {
    console.log("All temporary files flushed !");
});
