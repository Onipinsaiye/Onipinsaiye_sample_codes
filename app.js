const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

const app = express();

// const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({extended: false}))

app.use(express.static("public"));

app.set("view engine", "ejs");

const Foregistration = require("./foregistrationDB");

const Opregistration = require("./opregistrationDB");

const Companytransporter = require("./companytransporterDB");

const Entrepreneur = require("./entrepreneurDB")

const Thirdtransporter = require("./thirdtransporterDB");

const Trustgroup = require("./trustgroupDB")

const Memberpage = require("./memberpageDB");

const Bookthreshing = require("./bookthreshingDB");

const Confirmthreshing = require("./confirmthreshingDB")

const today = new Date();

const currentYear = today.getFullYear();




// this is the landing page of the web app
app.get("/", function(req,res){
    res.render("index", {year: currentYear})
})

app.post("/", function(req,res){
    var hausa = req.body.btn1;

    var english = req.body.btn2;

    if(hausa === ""){
        return res.redirect("loginpage");
    } else if(english === ""){
        return res.redirect("loginpage");
    }else{
        console.log("Error 404!");
    }
})

//this is the language selection page of the web app
app.get("/loginpage", function(req,res){
    res.render("loginpage", {year: currentYear})
})

app.post("/loginpage", function(req,res){

    var register = req.body.btn1;

    var login = req.body.btn2;

    var backButton = req.body.btn3

    if(login === ""){
        return res.redirect("login");
    }else if(register === ""){
        return res.redirect("register");
    }else if(backButton === ""){
        return res.redirect("/");
    }
    else{
        console.log("Error 404!");
    }
})

// this is the page where the use enters the phone number and password to access the app fully

var clients = [
    {
        phoneNumber: 2348100134348,
        password: 8604,
        clientName: ""
    }

]

app.get("/login", function(req,res){
    res.render("login", {year: currentYear})

})


app.post("/login", function(req,res){

    var username = Number(req.body.phonenumber);

    var password = Number(req.body.password);

    var login = req.body.btn1

    var backButton = req.body.btn2;

    let isAuthenticated = false;

    if(backButton === ""){
        return res.redirect("loginpage");
    } else if(login === ""){
        for(let i = 0; i<clients.length; i++){
            if(clients[i].phoneNumber === username && clients[i].password === password){
                console.log(clients[i].phoneNumber, clients[i].password)
                isAuthenticated = true;
                break;
            }
        }
    }

    if(isAuthenticated){
        return res.redirect("homepage")
    }else{
        return res.redirect("login")
    }


})

//this line of code will handle the get and post request for the registeration page for  a field officer or an operator

app.get("/register", function(req,res){
    res.render("register", {year: currentYear})
})

app.post("/register", function(req,res){
    var buttonOne = req.body.btn1;

    var buttonTwo = req.body.btn2;

    var buttonThree = req.body.btn3;

    if(buttonThree === ""){
        return res.redirect("loginpage");
    }else if(buttonOne === ""){
        return res.redirect("foregistration");
    } else if(buttonTwo === ""){
        return res.redirect("opregistration");
    }
})

//this line of code will render the form for the field officer to register 

app.get("/foregistration", function(req,res){
    res.render("foregistration", {year: currentYear})
})

app.post("/foregistration", async(req,res)=>{

    var back = req.body.backbtn;

    var submit = req.body.submitbtn;

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        address: req.body.address,
        ward: req.body.ward,
        lga: req.body.lga,
        state: req.body.state,
        phoneNumber1: req.body.phoneNumber1,
        guarantor: req.body.guarantor
    }

    if(back === ""){
        return res.redirect("register");
    } else if(submit === "" && data.firstName !== "" && data.lastName !== "" && data.birthDate !== "" && data.address !== "" && data.phoneNumber1 !== "" && data.ward !== "" && data.lga !== "" && data.tate !== "" && data.guarantor !== ""){
        await Foregistration.insertMany([data])
        return res.redirect("register")
    }else{
        console.log("Error 404!");
        return res.redirect("foregistration")
    }
})

// this line of code will handle the get and post request for the operator registration

app.get("/opregistration", function(req,res){
    res.render("opregistration", {year: currentYear})
})

app.post("/opregistration", async(req,res)=>{
    var back = req.body.backbtn;

    var submit = req.body.submitbtn;

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        address: req.body.birthDate,
        phoneNumber1: req.body.phoneNumber1,
        ward: req.body.ward,
        lga: req.body.lga,
        state: req.body.state,
        guarantor: req.body.guarantor,
    }

    

    if(back === ""){
        return res.redirect("register");
    } else if(submit === "" && data.firstName !== "" && data.lastName !== "" && data.birthDate !== "" && data.address !== "" && data.phoneNumber1 !== "" && data.ward !== "" && data.lga !== "" && data.state !== "" && data.guarantor !== ""){
        await Opregistration.insertMany([data])
        return res.redirect("register")
    }else{
        console.log("Error 404!");
        return res.redirect("opregistration")
    }
})
//This line of code will render the select homepage when the homepage route is accessed
app.get("/homepage", function(req,res){
    res.render("homepage", {year: currentYear});
})

app.post("/homepage", function(req,res){

    var learn = req.body.btn1;

    var homepage = req.body.btn2;

    var entrepreneurs = req.body.btn3;

    var trustGroups = req.body.btn4;

    var members = req.body.btn5;

    var thresher = req.body.btn6;

    var transporter = req.body.btn7;

    var viewActivity = req.body.btn8;

    var sync = req.body.btn9;

    var logout = req.body.btn10;

    if(logout === ""){
        return res.redirect("loginpage");
    } else if(transporter === ""){
        return res.redirect("transporter");
    }else if(thresher === ""){
        return res.redirect("activities");
    }else if(members === ""){
        return res.redirect("memberpage");
    }else if(trustGroups === ""){
        return res.redirect("trustgroup");
    }else if(entrepreneurs === ""){
        return res.redirect("entrepreneur")
    }
})

// this line of code handles the get and post request of the entrepreneur route

app.get("/entrepreneur", function(req,res){
    res.render("entrepreneur", {year: currentYear} )
})

app.post("/entrepreneur", async(req,res)=>{

    var back = req.body.backbtn;

    var submit = req.body.submitbtn;

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        address: req.body.address,
        phoneNumber1: req.body.phoneNumber1,
        phoneNumber2: req.body.phoneNumber2,
        program: req.body.program,
        ward: req.body.ward,
        lga: req.body.lga,
        state: req.body.state,
        guarantor: req.body.guarantor,
        passport: req.body.passport,
        id: req.body.id
    }

    
    if(back === ""){
        return res.redirect("homepage");
    } else if(submit === "" && data.firstName !== "" && data.lastName !== "" && data.birthDate !== "" && data.address !== "" && data.phoneNumber1 !== "" && data.ward !== "" && data.lga !== "" && data.state !== "" && data.guarantor !== "" && data.passport !== "" && data.id !== ""){
        await Entrepreneur.insertMany([data])
        return res.redirect("success")
    }else{
        console.log("Error 404!");
        return res.redirect("entrepreneur")
    }
})

// this line of code handles the get and post request of the trust group route

app.get("/trustgroup", function(req,res){
    res.render("trustgroup", {year: currentYear} )
})


app.post("/trustgroup", async(req,res)=>{

    var back = req.body.backbtn;

    var submit = req.body.submitbtn;

    const data = {
        leaderName: req.body.leaderName,
        secretaryName: req.body.secretaryName,
        memberName: req.body.memberName,
        birthDate: req.body.birthDate,
        address: req.body.address,
        leaderPhone: req.body.leaderPhone,
        secretaryPhone: req.body.secretaryPhone,
        memberPhone: req.body.memberPhone,
        program: req.body.program,
        ward: req.body.ward,
        lga: req.body.lga,
        state: req.body.state,
        guarantor: req.body.guarantor,
        leaderpassport: req.body.leaderpassport,
        secretaryPassport: req.body.secretaryPassport,
        memberPassport: req.body.memberPassport,
        leaderId: req.body.leaderId,
        secretaryId: req.body.secretaryId,
        memberId: req.body.leaderId
    }
  
    

    if(back === ""){
        return res.redirect("homepage");
    } else if(submit === "" && data.leaderName !== "" && data.secretaryName !== "" && data.memberName !== "" && data.birthDate !== "" && data.address !== "" && data.phoneNumber1 !== "" && data.ward !== "" && data.lga !== "" && data.state !== "" && data.guarantor !== "" && data.passport !== "" && data.id !== ""){
        await Trustgroup.insertMany([data]);
        return res.redirect("success")
    }else{
        console.log("Error 404!");
        return res.redirect("trustgroup")
    }
})
// this line of code handles the get and post request of the member route

app.get("/memberpage", function(req,res){
    res.render("memberpage",  {year: currentYear} )
})

app.post("/memberpage", async(req,res)=>{

    var back = req.body.backbtn;

    var submit = req.body.submitbtn;

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        address: req.body.address,
        phoneNumber1: req.body.phoneNumber,
        phoneNumber2: req.body.phoneNumber2,
        program: req.body.program,
        ward: req.body.ward,
        lga: req.body.lga,
        state: req.body.state,
        guarantor: req.body.guarantor,
        passport: req.body.passport,
        id: req.body.id
    }
    
    if(back === ""){
        return res.redirect("homepage");
    } else if(submit === "" && data.firstName !== "" && data.lastName !== "" && data.birthDate !== "" && data.address !== "" && data.phoneNumber1 !== "" && data.ward !== "" && data.lga !== "" && data.state !== "" && data.guarantor !== "" && data.passport !== "" && data.id !== ""){
        await Memberpage.insertMany([data]);
        return res.redirect("success")
    }else{
        console.log("Error 404!");
        return res.redirect("memberpage")
    }
})

//this line of code is responsible for the get and post request of the transporter app

app.get("/transporter", function(req,res){
    res.render("transporter", {year: currentYear});
})

app.post("/transporter", function(req,res){

    var back = req.body.btn1;

    var add = req.body.btn2;

    if(back === ""){
        return res.redirect("homepage");
    }else if(add === ""){
        return res.redirect("transportercategory")
    }
})

app.get("/transportercategory", function(req,res){
    res.render("transportercategory", {year: currentYear})
})

app.post("/transportercategory", function(req,res){

    var thirdParty = req.body.btn1;

    var companyTransporter = req.body.btn2;

    var back = req.body.btn3;

    if(back === ""){
        return res.redirect("transporter")
    }else if(companyTransporter === ""){
        return res.redirect("companytransporter")
    } else if(thirdParty === ""){
        return res.redirect("thirdtransporter")
    }else{
        console.log("Error 404!");
        return res.redirect("transportercategory")
    }
})

app.get("/thirdtransporter", function(req,res){
    res.render("thirdtransporter",{year: currentYear} )
})

app.post("/thirdtransporter", async(req,res)=>{

    var back = req.body.backbtn;

    var submit = req.body.submitbtn;

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phoneNumber1: req.body.phoneNumber,
        ward: req.body.ward,
        lga: req.body.lga,
        state: req.body.state,
        agreement: req.body.agreement,
        driverLicense: req.body.driverLicense,
    }

    

    if(back === ""){
        return res.redirect("transportercategory");
    } else if(submit === "" && data.firstName !== "" && data.lastName !== ""  &&  data.address !== "" && data.phoneNumber1 !== "" && data.ward !== "" && data.lga !== "" && data.state !== "" && data.driverLicense !== "" && data.agreement !== ""){
        await Thirdtransporter.insertMany([data])
        return res.redirect("success");
    }else{
        console.log("Error 404!");
        return res.redirect("thirdtransporter");
    }

})

app.get("/companytransporter", function(req,res){
    res.render("companytransporter", {year: currentYear})
})

app.post("/companytransporter", async(req,res)=>{

    var submit = req.body.submitbtn;

    var back = req.body.backbtn;

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        staffId: req.body.id,
        role: req.body.role,
        hub: req.body.hub,
        state: req.body.state,
        phoneNumber1: req.body.phoneNumber1,
        phoneNumber2: req.body.phoneNumber2
    }

    if(back === ""){
        return res.redirect("transportercategory")
    } else if(submit === "" && data.firstName !== "" && data.lastName !== "" && data.staffId !== "" && data.staffRole !== "" && data.hub !== "" && data.state !=="" && data.phoneNumber1 !== ""){
        await Companytransporter.insertMany([data])
        return res.redirect("success");
    }else{
        console.log("Error 404!");
        return res.redirect("companytransporter");
    }
})

app.get("/termtransporter", function(req,res){
    res.render("termtransporter", {year: currentYear} )
})

app.post("/termtransporter", function(req,res){

    var button = req.body.submitbtn;

    if(button === ""){
        return res.redirect("thirdtransporter")
    }else{
        console.log("Error in processing request!")
        return res.redirect("termtransporter")
    }
})

//this line of code is responsible for the get and post request for the threshing app
app.get("/activities", function(req,res){
    res.render("activities", {year: currentYear});
})

app.post("/activities", function(req,res){
    var buttoneOne = req.body.btn1;

    var buttoneTwo = req.body.btn2;

    var buttonThree = req.body.btn3;

    var backButton = req.body.backBtn;

    if(buttoneOne === ""){
        return res.redirect("activities")
    } else if(buttoneTwo === ""){
        return res.redirect("bookThreshing");
    } else if(buttonThree === ""){
        return res.redirect("confirmThreshing")
    }else if(backButton === ""){
        return res.redirect("homepage")
    }
})

app.get("/bookThreshing", function(req,res){
    res.render("bookThreshing", {year: currentYear});
})

app.post("/bookThreshing", async(req,res)=>{

    var backButton = req.body.backbtn;

    var nextButton = req.body.nextbtn;

    const data = {
        thresher: req.body.thresher,
        personel:req.body.thresherName,
        id: req.body.id,
        date: req.body.date,
        dateConfirm: req.body.dateConfirm,
        startTime:  req.body.time,
        endTime:  req.body.endTime
    }

    if(backButton === ""){
        return res.redirect("activities");
    } else if(nextButton === "" && data.thresher !== "" && data.id !== "" && data.date !== "" && data.dateConfirm !== "" && data.startTime !== "" && data.endTime !== ""){
        await Bookthreshing.insertMany([data])
        return res.redirect("success")
    }else{
        console.log("There is an error in your operation");
        return res.redirect("bookThreshing")
    }
})

app.get("/confirmThreshing", function(req,res){
    res.render("confirmThreshing", {year: currentYear});
})

app.post("/confirmThreshing", async(req,res)=>{

    var backButton = req.body.backbtn;

    var nextButton = req.body.nextbtn;

    const data = {
        thresherName: req.body.thresherName,
        thresherConfirm: req.body.thresherConfirm,
        date:  req.body.date,
        fieldOfficer: req.body.personnel,
        id: req.body.id
    }

    if(backButton === ""){
        return res.redirect("activities");
    } else if(nextButton === "" && data.thresherName === "member" && data.thresherConfirm === "member" && data.date !== ""){
        return res.redirect("success")
    }else if(nextButton === "" && data.thresherName === "company"  && data.thresherConfirm === "company" && data.fieldOfficer !== "" && data.id !== "" && data.date !== ""){
        await Confirmthreshing.insertMany([data])
        return res.redirect("success")
    }
     else{
        console.log("Error 404!");
        return res.redirect("confirmThreshing");
    }
})

// this line of code is responsible for the get and post request of the success app
app.get("/success", function(req,res){
    res.render("success")
})

app.post("/success", function(req,res){
    var nextButton = req.body.nextbtn;

    if(nextButton === ""){
        return res.redirect("homepage");
    }else{
        console.log("Error 404!");
    }
})

app.get("/backend", function(req,res){
    res.render("backend", {year: currentYear})
})

app.post("/backend",function(req,res){
    
})
/**
    this line of code enables the server to listen/get request from the user, 
    respond to the request here in the server and sends back to the user via port 3000
*/ 

let port = process.env.PORT || 3000;
if(port === null || port === ""){
    port = 3000;
}

app.listen(port, function(){
    console.log("Server has started succesfully!")
})
