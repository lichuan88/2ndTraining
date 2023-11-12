const { pool, router, Result } = require("../connect");
const getbookmsg=require("./getBookMsg")
const addbookmsg=require("./addBookMsg")
const registeruser=require("./registerUser")
const loginuser=require("./loginUser")

router.get("/",(req,res)=>{
    res.send("/")
})

router.get("/getBookMsg",(req,res)=>{
    res.send(getbookmsg)
})

router.get("/addBookMsg",(req,res)=>{
    res.send(addbookmsg)
})

router.get("/registerUser",(req,res)=>{
    res.send(registeruser)
})

router.get("/loginUser",(req,res)=>{
    res.send(loginuser)
})

module.exports=router;