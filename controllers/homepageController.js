var http = require('http');
let getHomepage = (req, res) => {
    //return res.render("index", {output: "3"});
    return res.render("homepage.ejs");
    //res.send('respond with a resource');
    // const data = JSON.stringify({
    //     Code: "",
    //     Area: 1,
    //     IsLock: ""
    // });
    
    // const options = {
    //     hostname: 'localhost',
    //     port: 50721,
    //     path: '/api/WareHouse/SearchAllWarehouse',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Content-Length': data.length,
    //         'APIKey': 'b928f10f7cba5c8664f66cc7271c7116'
    //     }
    // };
    // var req = http.request(options, (res) => {
    //     let data = '';
    //     console.log('Status Code:', res.statusCode);
    
    //     res.on('data', (chunk) => {
    //         data += chunk;
    //     });
    
    //     res.on('end', () => {
    //         console.log('Body: ', JSON.parse(data));
    //     });
    // }).on("error", (err) => {
    //     console.log("Error: ", err.message);
    // });
    // return res.render("test", {output: req.write(data)})

};
module.exports = {
    getHomepage: getHomepage
};
