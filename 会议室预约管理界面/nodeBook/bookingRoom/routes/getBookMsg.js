const { pool, router} = require("../connect");

router.get("/getBookMsg", (req, res) => {
  pool.getConnection((err, conn) => {
    conn.query(
      "select * from booking_room",
      (e, results) => {
        if (e) throw err;
        res.json({
          code:200,
          message:'success',
          data:results
        });
      }
    );
    pool.releaseConnection(conn); // 释放连接池，等待别的连接使用
  });
});

module.exports = router;

