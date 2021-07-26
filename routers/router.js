const express=require('express')
const sb=require('../sb-pool')
const body=require('body-parser')
const query=require('querystring')
const { json } = require('express')
var router=express.Router()



//使用------------------------------------------------
router.get('/csb',(req,res)=>{
    let sname=req.query.sname;
    let sql=`select * from sb where sid='${sname}'`;
    sb.query(sql,(err,rs)=>{
        let str=JSON.stringify(rs)
        res.send(str)
    })
})

//登录------------------------------------
router.post('/login',(req,res)=>{
    let obj=req.body;
    let sql=`select * from userjob where uname='${obj.uname}' and pwd='${obj.pwd}'`;
    sb.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==1){
            res.send(JSON.stringify(result))
        }else{
            res.send('0')
        }
    })
})

//注册-------------------------------------
router.post('/zhuce',(req,res)=>{
    let obj=req.body;
    let sql=`select * from userjob where uname='${obj.uname}'`;
    sb.query(sql,(err,rs)=>{
        if(rs.length==0){
            let sql1=`insert into userjob(uname,money,pwd) values('${obj.uname}',0,'${obj.pwd}')`;
            sb.query(sql1,(err,result)=>{
                if(err) throw err;
                res.send('0')
            })
        }else{
            res.send('1')
        }
    })
    
})


//查设备--------------------------------------------------
router.get('/sou',(req,res)=>{
    let sid=req.query.sid;
    let sql=`select * from sb where sid=${sid}`;
    sb.query(sql,(err,rs)=>{
        if(err) throw err;
        console.log(rs);
        if(rs.length==0){
            res.send('0')
        }else{
            res.send(rs[0].id)
        }
    })
})




//个人信息页面展示-----------------------------------------------
router.get('/gern',(req,res)=>{
    let sql=`select * from userjob where id='${req.query.uid}'`;
    sb.query(sql,(err,rs)=>{
        if(err) throw err;
        res.send(JSON.stringify(rs[0]))
    })

})




//钱包------------------------------------------------------
router.get('/qb',(req,res)=>{
    let sql=`select * from userjob where id='${req.query.uid}'`;
    sb.query(sql,(er,rs)=>{
        if(er) throw er;
        res.send(JSON.stringify(rs[0]))
    })
})





//充值----------------------------------------------------------->
router.get('/chong',(req,res)=>{
    let sql=`select * from userjob where id=${req.query.uid}`
    sb.query(sql,(err,rs)=>{
        let n=Number(req.query.jin)+Number(rs[0].money)
        let sql1=`update userjob set money='${n}' where id=${req.query.uid}`
        sb.query(sql1,(er,r)=>{
            sb.query(sql,(e,ru)=>{
                res.send(JSON.stringify(ru[0]))
            })
        })
    })
})



//消费------------------------------------------------------
router.get('/chong', (req, res) => {
    let sql = `select * from userjob where id=${req.query.uid}`
    sb.query(sql, (err, rs) => {
        let n = Number(req.query.jin) - 50
        let sql1 = `update userjob set money='${n}' where id=${req.query.uid}`
        sb.query(sql1, (er, r) => {
            sb.query(sql, (e, ru) => {
                res.send(JSON.stringify(ru[0]))
            })
        })
    })
})



module.exports=router;