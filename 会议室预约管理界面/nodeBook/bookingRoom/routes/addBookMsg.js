const { pool, router} = require("../connect");

router.post("/addBookMsg",(req,res)=>{
    const data=req.body;
    pool.getConnection((err, conn) => {
        conn.query(
            "insert into booking_room(title,start,end,color) values(?,?,?,?)",
            [data.title,data.start,data.end,data.color],
        )
        res.json({
            code:200,
            message:'success',
            data:req.body
        })
    pool.releaseConnection(conn); // 释放连接池，等待别的连接使用
    })
})

module.exports = router;
