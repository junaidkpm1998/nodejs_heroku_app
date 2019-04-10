const express = require('express');//loading express
const exphbs = require('express-handlebars');//loading express handler

var app = express();

//function aakki  variable kk vechu

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));//tmplate engin set cheyyan,main page
app.set('view engine', 'handlebars');//ithum
app.use(express.static('views/static'))
app.use(express.urlencoded());
app.post('/getdata', (req, res) => {
    var name = req.body.getname;
    var address = req.body.address;
    var place = req.body.place;
    var email = req.body.email;
    res.send(name+ " "+address+" " +place+" " +email);
    var address = req.body.address;
    //console.log(address)
    //res.send(address);
    var place = req.body.place;
   // console.log(place)
   // res.send(place);
    var email = req.body.email;
   // res.send(email);
  // console.log(email)
    //res.send(req.body)
});
app.post('/login',(req,res)=>{
    var user=req.body.username;
    var pass=req.body.password;
    if(user==admin && pass==1234)
    {
        res.send("successes")
    }
    else{
        res.send("failed")
    }

})

app.get('/', (req, res) => {
    res.render('index',{name:'JUNAID KPM'});
    //app.get('/',(req,res)=>{
    // res.send('[{"name":"junaid","age":21},{"name":"arjun","age":24}]')
    // res.send("<marquee><b>u r welcome</b></marquee>")

});
app.get('/home', (req, res) => {
    res.render('home');
});
//app.get('/home',(req,res)=>{
//  res.send("<h1 style=color:green><marquee><b>  u r welcome to home</b></marquee></h1>")
//});
app.get('/contact', (req, res) => {
    res.render('contact');

});
app.get('/gallery', (req, res) => {
    res.render('gallery');

});

app.listen(process.env.PORT || 3002,()=>{
    console.log("web application is running successfully")
})//local host:(/)3000 chromeil adikkuka