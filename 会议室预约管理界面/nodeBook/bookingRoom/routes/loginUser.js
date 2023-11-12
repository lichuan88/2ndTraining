const { pool, router } = require("../connect");
const jwt = require('jsonwebtoken')

router.post("/userLogin", (req, res) => {
    const account = req.body.account
    const password = req.body.password
    if (!account || !password) {
        res.send({
            code: 400,
            message: "账号与密码为必传参数...",
        })
        return
    }
    pool.getConnection((err, conn) => {
        if (err) console.log(err);
        if (account && password) {
            const result = `SELECT * FROM user WHERE account = '${account}'`
            conn.query(result, [account], (err, result) => {
                if (err) throw err;
                const [name] = result
                if (result.length>0) {
                    const n = name.userName;
                    const p = name.password;
                    var token = jwt.sign(
                        {
                            password: p,
                            userName: n,
                        },
                        "secret",
                        { expiresIn: "1h" },
                    )
                    res.send({
                        message: '登录成功',
                        data: {
                            userName: n,
                            token: token
                        }
                    })
                } else {
                    // 判断token
                    if (req.headers.Authorization == undefined || req.headers.Authorization == null) {
                        if (req.headers.authorization) {
                            var token = req.headers.authorization.split(" ")[1] // 获取token
                        }
                        jwt.verify(token, "secret", (err, decode) => {
                            if (err) {
                                res.status(400).send({ message: "账号或密码错误" })
                            }
                        })
                    }
                    // res.send({ message: "该用户不存在" })
                }
            })
        }
        pool.releaseConnection(conn); // 释放连接池，等待别的连接使用
    })
})
