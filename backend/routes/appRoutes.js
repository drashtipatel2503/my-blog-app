var express=require('express');
var router =express.Router();

var Blog = require('../models/dataSchema')

router.get('/',(req,res)=>{
    res.send("all routes")
})

router.post('/create', (req,res,next)=>{
    console.log("data");
   /* if(!req.body){
        return res.status(400).json({"status":"no ",
        err: 'no body',
        a:"h",
        body: req.body});
    }
    */
    return res.status(200).json({/*"status":"success",*/
    data:req.body.name,
});
    console.log("added");
 /*   var newBlog=new Blog({
        username:req.body.username,
        name:req.body.name
    })
    newBlog.save((err, blog)=>{
        if(err)
            res.status(500).json({errmsg: err})
        res.status(200).json({msg: blog})
    });*/
});
/*
router.get('/read', (req,res,next)=>{
    Blog.find({}, (err, blogs)=>{
        if(err)
            res.status(500).json({errmsg: err})
        res.status(200).json({msg: blogs })
    });
});
router.put('/update', (req,res,next)=>{
    Blog.findById(req.body._id, (err, blog)=>{
        if(err)
            res.status(500).json({errmsg: err})
        blog.name=req.body.name,
        blog.username=req.body.username;
        blog.save((err, blog)=>{
             if(err)
                res.status(500).json({errmsg:err})
            res.status(200).json({msg:blog})
        });
    });
});
router.delete('/delete/:id', (req,res,next)=>{
    Blog.findOneAndRemove({_id:req.params.id},(err,blog)=>{
        if(err)
           res.status(500).json({errmsg:err})
       res.status(200).json({msg:blog})
        
    })
    res.status(200).json({msg: "delete"})
});
*/
module.exports = router;