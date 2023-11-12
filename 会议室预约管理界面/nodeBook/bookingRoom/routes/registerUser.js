const { pool, router } = require("../connect");

router.post("/userRegister", (req, res) => {
    const userName = req.body.userName
    const account = req.body.account
    const password = req.body.password
    if (!userName || !password) {
		res.status(400).send({
			message: "用户名与密码为必传参数...",
		})
		return
	}
    pool.getConnection((err, conn) => {
        if (err) console.log(err);
        if (userName && password) {
            const result = `SELECT * FROM user WHERE userName = '${userName}'`
            conn.query(result, [userName], (err, result) => {
                if (err) throw err;
                if (result.length >= 1) {
                    res.status(400).send({ message: '该用户已存在' })
                } else {
                    conn.query("insert into user(userName,account,password) values(?,?,?)",
                        [userName, account, password],)
                    res.send({ message: "注册成功" })
                }
            }
            )
        }
        pool.releaseConnection(conn); // 释放连接池，等待别的连接使用
    })
})

module.exports = router;