// const express = require("express");
// const app = express();
// const mysql = require("mysql2");
// var router = express.Router();

// //json格式化
// app.use(express.json())
// // 创建与数据库的连接
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: 'lc719089716147',
//     database: "booking"    //数据库名称
// }).promise()

// db.connect((err) => {
//     if (err) throw err;
//     console.log("连接成功");
// })

// //get接口
// app.get("/getBookMsg", (req, res) => {
//     let sql = "select * from booking_room";
//     const query=req.query;
//     db.query(sql).then(([rows,files])=>{
//        console.log(rows);
//        res.send({
//         code:'200',
//         message:'success',
//         data:query
//        })
//     }
//     )
// })

// //post接口
// app.post('/postBookMsg', (req, res) => {
//     let sql = 'insert into user(id,name) values(?,?)'
//     const body = req.body;
//     db.query(sql, [data.id, data.name]).then((result, err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send({
//                 code:'200',
//                 message:'success',
//                 data:body
//             })
//         }
//     })
// })

// app.listen(8080, () => {
//     console.log("服务器开启8080端口...")
// })
// module.exports = router;