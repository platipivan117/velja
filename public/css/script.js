var s1;
var s2;
var date;
var kliknutaUcionica=0;
var nizDatuma1=[];
var nizDatuma2=[];
var nizDatuma3=[];
var nizDatuma4=[];
  
  // POPUNJAVA ZA DANASNJI TJ TRENUTNI DATUM ONLOAD
$( document ).ready((e)=>{
   // e.preventDefault();
        date= new Date();
        //date.setDate(today.getDate());
        
       
        var dan= date.getDate();
        var mesec=date.getMonth()+1;
        
        var date1= new Date();
        

        

        var requString= '/zak/'+dan+'-'+mesec;
        //get req da uzmemo potrebde podatke za datume
        $.get('/zak/data',(data,status)=>{
         
          var u1fil=[];
          var u2fil=[];
          var u3fil=[];
          var u4fil=[];
          // pravimo niz objekata date
          data.u1.forEach((element)=>{
              
            
              u1fil.push(new Date(element.start));
              
          });
          data.u2.forEach((element)=>{
              
              u2fil.push(new Date(element.start));
          });
          data.u3.forEach((element)=>{
              
              u3fil.push(new Date(element.start));
          });
          data.u4.forEach((element)=>{
              
              u4fil.push(new Date(element.start));
          });
                    

          
          data.u1.forEach(element => {
              let d= new Date(element.start);

              if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#1').append(string);
          }
                 
          });

          
          data.u2.forEach(element => {
            
            let d= new Date(element.start);
            if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#2').append(string);
          }
        });
        data.u3.forEach(element => {
          
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#3').append(string);
          }
        });

        data.u4.forEach(element => {
          
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#4').append(string);
          }
        });


        $('#right').attr('disabled',false);

          

        //alert(JSON.stringify(data));
        
        });   
$('#right').click((e)=>{
    $('#right').attr('disabled',true);
    $('#left').attr('disabled',true);
    $('#left').css('display','inline-block');
     e.preventDefault();
 
     $( ".card-text" ).remove();
        var newdate= new Date();
        
        newdate.setDate(date.getDate()+1);
        date=newdate;

      
        
        var dan= newdate.getDate();
        var mesec=newdate.getMonth()+1;
        var requString= '/zak/'+dan+'-'+mesec;
      
      $.get('/zak/data',(data,status)=>{
       
        
        var u1fil=[];
          var u2fil=[];
          var u3fil=[];
          var u4fil=[];
          // pravimo niz objekata date
          data.u1.forEach((element)=>{
              
            
              u1fil.push(new Date(element.start));
              
          });
          data.u2.forEach((element)=>{
              
              u2fil.push(new Date(element.start));
          });
          data.u3.forEach((element)=>{
              
              u3fil.push(new Date(element.start));
          });
          data.u4.forEach((element)=>{
              
              u4fil.push(new Date(element.start));
          });
                    

          
          data.u1.forEach(element => {
              let d= new Date(element.start);
              
              if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#1').append(string);
          }
                 
          });

          
          data.u2.forEach(element => {
            
            let d= new Date(element.start);
            if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#2').append(string);
          }
        });
        data.u3.forEach(element => {
        
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#3').append(string);
          }
        });

        data.u4.forEach(element => {
         
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#4').append(string);
          }
        });


        $('#right').attr('disabled',false);
        $('#left').attr('disabled',false);
          



      });






    });

$('#left').click((e)=>{
    e.preventDefault();
    $('#left').attr('disabled',true);
    $('#right').attr('disabled',true);
    var today= new Date();
    today.setDate(today.getDate()+1);
    
    if(today.getDate()==date.getDate()&&today.getMonth()==date.getMonth() ){
        $('#left').css('display','none');
    }
 
    $( ".card-text" ).remove();
       var newdate= new Date();
       
       newdate.setDate(date.getDate()-1);
       date=newdate;

     
       
       var dan= newdate.getDate();
       var mesec=newdate.getMonth()+1;
       var requString= '/zak/'+dan+'-'+mesec;
     
     $.get('/zak/data',(data,status)=>{
      
       
       var u1fil=[];
         var u2fil=[];
         var u3fil=[];
         var u4fil=[];
         // pravimo niz objekata date
         data.u1.forEach((element)=>{
             
           
             u1fil.push(new Date(element.start));
             
         });
         data.u2.forEach((element)=>{
             
             u2fil.push(new Date(element.start));
         });
         data.u3.forEach((element)=>{
             
             u3fil.push(new Date(element.start));
         });
         data.u4.forEach((element)=>{
             
             u4fil.push(new Date(element.start));
         });
                   

         
         data.u1.forEach(element => {
             let d= new Date(element.start);
             
             if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#1').append(string);
         }
                
         });

         
         data.u2.forEach(element => {
           
           let d= new Date(element.start);
           if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#2').append(string);
         }
       });
       data.u3.forEach(element => {
       
         let d= new Date(element.start);
         if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#3').append(string);
         }
       });

       data.u4.forEach(element => {
        
         let d= new Date(element.start);
         if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#4').append(string);
         }
       });


       $('#right').attr('disabled',false);
       $('#left').attr('disabled',false);

         



     });



  
});
function Provera() {
    s1=$("#11").val();
    s2=$("#22").val();
alert(date);
  var nizDatuma=[];
 
  alert(s1);

  
 
  var n=s1.split(":");

  alert(n);
  
  var dateUnetStart=  new Date(date.getFullYear(),date.getMonth(),date.getDate(),n[0],n[1]);

  n=s2.split(":");

  var dateUnetFinish= new Date(date.getFullYear(),date.getMonth(),date.getDate(),n[0],n[1]);
 
   
 if(kliknutaUcionica==1){
   nizDatuma=nizDatuma1;
 }
 else if(kliknutaUcionica==2){
   nizDatuma=nizDatuma2;
 }
 else if(kliknutaUcionica==3){
  nizDatuma=nizDatuma3;
}
else if(kliknutaUcionica==4){
  nizDatuma=nizDatuma4;
}

 

alert(dateUnetStart);
alert(dateUnetFinish);
 


validacija=false;
       
for(var i=1;i<nizDatuma.length;i++){
  /*alert(JSON.stringify(nizDatuma[i-1]));
  alert("1");
  alert(dateUnetStart+" >"+nizDatuma[i-1].start);
    alert(dateUnetStart+" <"+nizDatuma[i-1].finish);
    alert("2");
    alert(dateUnetFinish+" >"+nizDatuma[i-1].start);
    alert(dateUnetFinish+" <"+nizDatuma[i-1].finish);
    alert("3");
    alert(dateUnetStart+" <"+nizDatuma[i-1].start);
    alert(dateUnetStart+" >"+nizDatuma[i-1].finish);*/

  if((nizDatuma[i-1].start.getTime()<dateUnetStart.getTime() && nizDatuma[i-1].finish.getTime()>dateUnetStart.getTime()))  {

   /* alert("nalazi se unutar");
    alert(dateUnetStart+" >"+nizDatuma[i-1].start);
    alert(dateUnetStart+" <"+nizDatuma[i-1].finish);*/
    validacija=false;
    provera=false;
    break;
}
else if(nizDatuma[i-1].start.getTime()<dateUnetFinish.getTime() && nizDatuma[i-1].finish.getTime()>dateUnetFinish.getTime()){
    /*alert("nalazi se unutar prvi elseif");
    alert(dateUnetFinish+" >"+nizDatuma[i-1].start);
    alert(dateUnetFinish+" <"+nizDatuma[i-1].finish);*/
    validacija=false;
    provera=false;
    break;
}
else if(nizDatuma[i-1].start.getTime()>dateUnetStart.getTime() && nizDatuma[i-1].finish.getTime()<dateUnetFinish.getTime()){
   /* alert("nalazi se unutar drugi elseif");
    alert(dateUnetStart+" <"+nizDatuma[i-1].start);
    alert(dateUnetStart+" >"+nizDatuma[i-1].finish);*/
    validacija=false;
    provera=false;
    break;
}
else if(dateUnetStart.getTime()< nizDatuma[i].start.getTime() && dateUnetFinish.getTime()<nizDatuma[i].start.getTime()){
 /* alert(dateUnetStart+" <"+nizDatuma[i].start);
  alert(dateUnetFinish+" <"+nizDatuma[i].start);
    alert("ne nalazi se unutra treci elseif");*/
     validacija=true;
     break;
 }
     
}

if(validacija==true){
  alert("prva vaalicaija true");
    alert("moze");
}
else{

    if(dateUnetStart.getTime()>nizDatuma[nizDatuma.length-1].finish.getTime()  ){
        alert("moze,duzina");
        alert(JSON.stringify(nizDatuma[nizDatuma.length-1]));

    }
    else{
        alert("jok");
    }
}
}


$('#postdugme').click((e)=>{
 


  var u1fil=[];
  var u2fil=[];
  var u3fil=[];
  var u4fil=[];
  var u1=[];
  var u2=[];
  var u3=[];
  var u4=[];
  var klinutaUcionica=1;


  var getFunc= (callback)=>{
    $.get('/zak/data',(data,status)=>{
      u1=data.u1;
      u2=data.u2;
      u3=data.u3;
      u4=data.u4;
 
      
      callback();
      

});


  };
  
  function callback (){
    
    
    
    u1.forEach((element)=>{
      var obj={
        start: new Date(element.start),
        finish: new Date(element.finish)
      }
      obj.start.setHours(obj.start.getHours()-1);
      obj.finish.setHours(obj.finish.getHours()-1);
     

      nizDatuma1.push(obj);
    });

   nizDatuma1.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);
   
 





   
   
   u2.forEach((element)=>{
     var obj={
       start: new Date(element.start),
       finish: new Date(element.finish)
     }
     nizDatuma2.push(obj);
   });

  nizDatuma2.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);





  
  u3.forEach((element)=>{
    var obj={
      start: new Date(element.start),
      finish: new Date(element.finish)
    }
    nizDatuma3.push(obj);
  });

 nizDatuma3.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);






 
 
 u4.forEach((element)=>{
   var obj={
     start: new Date(element.start),
     finish: new Date(element.finish)
   }
   nizDatuma4.push(obj);
 });

nizDatuma4.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);




if(kliknutaUcionica==1){
  Provera(nizDatuma1);


}




  }
 

  getFunc(callback);
 











 
  });

  $('#btn1').click(()=>{
    kliknutaUcionica=1;
  });



});

