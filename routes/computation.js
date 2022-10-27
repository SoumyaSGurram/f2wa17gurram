var express = require('express');
var router = express.Router();
x = Math.random()*100;
/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined)
    {
        x=req.query.x;
    }
a = Math.acosh(x);
b= Math.log1p(x);
c=Math.tan(x);
d=Math.sqrt(x);
res.send(` acosh() applied to ${x} is ${a} <br> log1p() applied to ${x} is ${b} <br> tan() applied to ${x} is ${c} <br> sqrt() applied to ${x} is ${d}`);
});

module.exports = router;
