const express      = require('express');
const bodyParser   = require('body-parser') ;
const cors         = require('cors');
const override     = require('method-override');
const morgan       = require('morgan');
const port         = process.env.PORT || 4000;
const app          = express();
const http         = require('http').createServer(app);
const {validate,del} = require('./controller.js');


const router       = express.Router();

//------------------VALIDATION--------------------------------//
router.post('/validation',(req,res)=>{
    let rules = ['firstName','lastName','country','email','Age'];
    console.log(req.body);

    let api_resp = validate(req.body,rules); //Call the validate function on request body

    if (api_resp.length == 0 ) {
        return res.status(200).send({
            success: true,
            message: "Valid"
        });
    }

    else {
         return  res.status(200).send({
            success: false,
            message: 'invalid',
            missing: api_resp
        });
    }
});

//-----------------------------DELETE-------------------------------//
router.post('/delete',(req,res)=>{
    let toDelete = "email"; //item to delete from object

    let api_resp = del(req.body,toDelete);  //Call to the delete function

    if (api_resp.length == 0 ) {
        return res.status(200).send({
            success: false,
            message: 'Attribute not found'
        });
    }

    else {
        return res.status(200).send({
            success: true,
            message: `Successfully removed ${toDelete}`,
            data: api_resp
        });
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/',router);



http.listen(port,(err)=>{
    if(err) {
        return err
    } 
    else {
        console.log(`app is listening on port ${port}`)
    }
}
)

module.exports = app;
