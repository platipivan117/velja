var express=require('express');
var mongodb=require('mongodb');
var bodyparser= require('body-parser');
var assert= require('assert');
var ObjectID= mongodb.ObjectID;

var url="mongodb+srv://Ivan:japibog123@veljabaza-w0aug.gcp.mongodb.net/test?retryWrites=true";
var dbname='VeljaBaza';

exports.home= (req,res)=>{
    res.render('home');
};


exports.login= (req,res)=>{
    res.render('login');
};

exports.zak = (req,res)=>{
    /* var nizPodataka=[];
    mongodb.connect(url,(err,client)=>{
        assert.equal(null,err);
        const db= client.db(dbname);
        
        var cursor=db.collection('Date').find();
        cursor.forEach((doc,err)=>{
            assert.equal(null,err);
            nizPodataka.push(doc);
        },()=>{
            cursor.close();
            //client.close();
            
           
        });

});*/
res.render('zak');
};


exports.date= (req,res)=>{
    var date= new Date();
    //var stri = req.params.date;
    /*var obj= [
        {name:stri, lastname:"Sto"},
        {name:"pivanaaa",lastname:"pivanvicaaaa"},
        

    ];*/
    var nizPodataka=[];
    var u1=[];
    var u2=[];
    var u3=[];
    var u4=[];
    
    mongodb.connect(url,(err,client)=>{
        assert.equal(null,err);
        const db= client.db(dbname);
        
        var cursor=db.collection('baza').find();
        cursor.forEach((doc,err)=>{
            assert.equal(null,err);
            nizPodataka.push(doc);
        },()=>{
            cursor.close();
            //client.close();

            nizPodataka.forEach((item)=>{

                if(item.ucionica==1){
                    u1.push(item);
                }
                else if(item.ucionica==2){
                    u2.push(item);
                }
                else if(item.ucionica==3){
                    u3.push(item);
                }
                else{
                    u4.push(item);
                }
            });

            res.send({u1:u1,u2:u2,u3:u3,u4:u4});
           
            //res.render('zak',{items:nizPodataka,ime: "pivca",ucionica1: u1,ucionica2:u2,ucionica3:u3,ucionica4:u4});
        });

});




    
};


exports.dodaj = (req,res)=>{
    
    var obj={
        start: req.body.start,
        finish:req.body.finish,
        prof:req.body.prof,
        komentar:req.body.komentar,
        ucionica:req.body.ucionica
    };
    console.log(JSON.stringify(obj));
    mongodb.connect(url,(err,client)=>{
        assert.equal(null,err);
        const db= client.db(dbname);
        
        var cursor=db.collection('baza').insertOne(obj,(err,res)=>{
            assert.equal(null,err);
            console.log(JSON.stringify(obj)+" UBACEN");
            client.close();
            

        });
        res.redirect('/zak');
     

});
    



    

    

};
exports.err=(req,res)=>{
    res.redirect('/zak');
};
exports.del=(req,res)=>{
console.log(req.params.id);
var obj ={
    _id: ObjectID(req.params.id)
}
mongodb.connect(url,(err,client)=>{
    assert.equal(null,err);
    const db= client.db(dbname);
    
    db.collection('baza').deleteOne(obj,(err,res)=>{
        assert.equal(null,err);
        console.log(JSON.stringify(obj)+"izbacen");
        client.close();
        
        
    });
   
    res.redirect('/');

});

};
