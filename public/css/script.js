var s1;
var s2;
var date;
var kliknutaUcionica=0;
var nizDatuma1=[];
var nizDatuma2=[];
var nizDatuma3=[];
var nizDatuma4=[];
var stringDatuma="";

  
  // POPUNJAVA ZA DANASNJI TJ TRENUTNI DATUM ONLO
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
$( document ).ready((e)=>{
  
  $('#postdugme').attr('disabled',false);
   // e.preventDefault();
        date= new Date();
        //date.setDate(today.getDate());
        stringDatuma= date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+".";
  $(".datum").html("<h1>"+stringDatuma+"</h1>");
       
        var dan= date.getDate();
        var mesec=date.getMonth()+1;
        
         function Render() {
           var granicaP=new Date();
          var n= date.getDay();
	
		
				 
          if(n==1){
            granicaP=date;
            
           
          
          }
          else if (n==0){
            granicaP.setDate(date.getDate()-6);
          }
          else if(n==5){
           
            granicaP.setDate(date.getDate()-4);
            
          }
          else{
            var br=0;
            var i=n;
            while(i>1){
              i--;
              br++;
            }
            granicaP.setDate(date.getDate()-br);
         
           
            
       
          }
          granicaP.setHours(6);
          granicaP.setMinutes(0);
         

          var stringPromene="https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+"1";
          $("#linkic").attr('href',stringPromene);
          $( ".card-text" ).remove();
        
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
          var strDan;
          if(date.getDay()==0){
            strDan="Nedelja";
          }
          else if (date.getDay()==1){
            strDan="Ponedeljak";
          }
          else if (date.getDay()==2){
            strDan="Utorak";
          }
          else if (date.getDay()==3){
            strDan="Sreda";
          }
          else if (date.getDay()==4){
            strDan="Cetvrtak";
          }
          else if (date.getDay()==5){
            strDan="Petak";
          }
          else if (date.getDay()==6){
            strDan="Subota";
          }
          stringDatuma= date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+"."+"<br>"+strDan;
          $(".datum").html("<h1>"+stringDatuma+"</h1>");

          
          data.u1.forEach(element => {
              let d= new Date(element.start);
              let e = new Date(element.finish);

              if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
                var string="<div class=\"card-text u1\" >" +element.prof +"  "+d.getHours()+":"+d.getMinutes()+"-"+e.getHours()+":"+e.getMinutes()+"<br>"+element.komentar+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></span></i>"+"</div>"
                
                $('#1').append(string);
             
          }
                 
          });
         
          
          data.u2.forEach(element => {
            
            let d= new Date(element.start);
            let e = new Date(element.finish);

            if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
              var string="<div class=\"card-text u2\" >" +element.prof +"  "+d.getHours()+":"+d.getMinutes()+"-"+e.getHours()+":"+e.getMinutes()+"<br>"+element.komentar+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></span></i>"+"</div>"
            $('#2').append(string);
          }
        });
        data.u3.forEach(element => {
          
          let d= new Date(element.start);
          let e = new Date(element.finish);

          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<div class=\"card-text u3\" >" +element.prof +"  "+d.getHours()+":"+d.getMinutes()+"-"+e.getHours()+":"+e.getMinutes()+"<br>"+element.komentar+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></span></i>"+"</div>"
            $('#3').append(string);
          }
        });

        data.u4.forEach(element => {
          
          let d= new Date(element.start);
              let e = new Date(element.finish);

              if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
                var string="<div class=\"card-text u4\" >" +element.prof +"  "+d.getHours()+":"+d.getMinutes()+"-"+e.getHours()+":"+e.getMinutes()+"<br>"+element.komentar+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></i></span>"+"</div>"
            $('#4').append(string);
          }
        });
        $(".kanta").click(function(){
          
          var confirmation=confirm("are you sure?");
          if(confirmation){
            $.ajax({
              type: 'DELETE',
              url: '/izbrisi/'+$(this).data('id')
            }).done((response)=>{
                alert("Da");
            });
            
          }
          else {
            return 1;
          }
          Render();
        });



        $('#right').attr('disabled',false);
        $('#left').attr('disabled',false);

          

     
        
        });   
      }
      Render();
$('#right').click((e)=>{
    $('#right').attr('disabled',true);
    $('#left').attr('disabled',true);
    $('#left').css('display','inline-block');
     e.preventDefault();
     
 
     $( ".card-text" ).remove();
        var newdate= date;
        
        newdate.setDate(date.getDate()+1);
        newdate.setMonth(date.getMonth());
        
        date=newdate;
        
        stringDatuma= date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+".";
        $(".datum").html("<h1>"+stringDatuma+"</h1>");
      
        
        var dan= newdate.getDate();
        var mesec=newdate.getMonth()+1;
        var requString= '/zak/'+dan+'-'+mesec;
      
     

      Render();



    });

$('#left').click((e)=>{
    e.preventDefault();
    $('#left').attr('disabled',true);
    $('#right').attr('disabled',true);
 
    
    
    
 
    $( ".card-text" ).remove();
       var newdate= date;
       
       newdate.setDate(date.getDate()-1);
       newdate.setMonth(date.getMonth());
       date=newdate;
       stringDatuma= date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+".";
       $(".datum").html("<h1>"+stringDatuma+"</h1>");
     
       
       var dan= newdate.getDate();
       var mesec=newdate.getMonth()+1;
       var requString= '/zak/'+dan+'-'+mesec;
     
     Render();



  
});
function Provera() {
    s1=$("#11").val();
    s2=$("#22").val();

  var nizDatuma=[];
 

  
 
  var n=s1.split(":");

 
  
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


 


validacija=false;
       if(nizDatuma.length==0){
         validacija= true
       }
       else{
for(var i=1;i<nizDatuma.length;i++){
  

  if((nizDatuma[i-1].start.getTime()<dateUnetStart.getTime() && nizDatuma[i-1].finish.getTime()>dateUnetStart.getTime()))  {
		
		
    validacija=false;
    provera=false;
    break;
}
else if(nizDatuma[i-1].start.getTime()<dateUnetFinish.getTime() && nizDatuma[i-1].finish.getTime()>dateUnetFinish.getTime()){
   
    validacija=false;
    provera=false;
    break;
}
else if(nizDatuma[i-1].start.getTime()>dateUnetStart.getTime() && nizDatuma[i-1].finish.getTime()<dateUnetFinish.getTime()){
  
    validacija=false;
    provera=false;
    break;
}
else if(dateUnetStart.getTime()==nizDatuma[i-1].start.getTime()&&dateUnetFinish.getTime()==nizDatuma[i-1].finish.getTime() ){
  validacija=false;
    provera=false;
    break;
}
else if(dateUnetStart.getTime()<=nizDatuma[i].start.getTime() && dateUnetFinish.getTime()<=nizDatuma[i].start.getTime()){
 
     validacija=true;
     break;
 }
     
}
       }

if(validacija==true){
  
    var data ={
      start: dateUnetStart,
      finish:dateUnetFinish,
      ucionica: kliknutaUcionica,
      prof:$("#profesor").val(),
      komentar: $("#komentar").val()
    };
    console.log(JSON.stringify(data));
    $.post( "/dodaj",data, function( data ) {
      alert("Zakazan cas");
      console.log("post izvrsen");
        Render();
    });
}
else{

    if(dateUnetStart.getTime()>nizDatuma[nizDatuma.length-1].finish.getTime()  ){
        
        var data ={
          start: dateUnetStart,
          finish:dateUnetFinish,
          ucionica: kliknutaUcionica,
          prof:$("#profesor").val(),
          komentar: $("#komentar").val()
        };
        console.log(JSON.stringify(data));
        $.post( "/dodaj",data ,function( data) {
          
          console.log("post izvrsen");
          alert("Zakazan cas");
          Render();
        });


    }
    else{ 
        alert("Termin nije dostupan");
    }
}
}


$('#postdugme').click((e)=>{
  $("#postdugme").attr('disabled',true);
 


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

      obj.start.setHours(obj.start.getHours());
      obj.finish.setHours(obj.finish.getHours());

     

      nizDatuma1.push(obj);
    });

   nizDatuma1.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);
   
 





   
   
   u2.forEach((element)=>{
     var obj={
       start: new Date(element.start),
       finish: new Date(element.finish)
     }
     obj.start.setHours(obj.start.getHours());
      obj.finish.setHours(obj.finish.getHours());
     nizDatuma2.push(obj);
   });

  nizDatuma2.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);





  
  u3.forEach((element)=>{
    var obj={
      start: new Date(element.start),
      finish: new Date(element.finish)
    }
    obj.start.setHours(obj.start.getHours());
      obj.finish.setHours(obj.finish.getHours());
    nizDatuma3.push(obj);
  });

 nizDatuma3.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);






 
 
 u4.forEach((element)=>{
   var obj={
     start: new Date(element.start),
     finish: new Date(element.finish)
   }
   obj.start.setHours(obj.start.getHours());
      obj.finish.setHours(obj.finish.getHours());
   nizDatuma4.push(obj);
 });

nizDatuma4.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);





  Provera();
  $('#postdugme').attr('disabled',false);




  }
 

  getFunc(callback);
 











 
  });

  $('#btn1').click(()=>{
    kliknutaUcionica=1;
  });
  $('#btn2').click(()=>{
    kliknutaUcionica=2;
  });
  $('#btn3').click(()=>{
    kliknutaUcionica=3;
  });
  $('#btn4').click(()=>{
    kliknutaUcionica=4;
  });
  $("#lupa").click(()=>{
    
    var niz = $(".datepicker-here").val().split(".");
    if($(".datepicker-here").val()!= ""){
     var newdate = date;
     newdate.setDate(niz[0]);
     newdate.setMonth(niz[1]-1);
     newdate.setFullYear(niz[2]);
     
   

    $('#right').attr('disabled',true);
    $('#left').attr('disabled',true);
  
  
     
 
     $( ".card-text" ).remove();
       
        date=newdate;
        
        stringDatuma= date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+".";
        $(".datum").html("<h1>"+stringDatuma+"</h1>");
      
        
        var dan= newdate.getDate();
        var mesec=newdate.getMonth()+1;
        var requString= '/zak/'+dan+'-'+mesec;
      
      
        Render();



    }
    });


    

});
    }
    else{
      
      window.location.replace("https://ucionice.herokuapp.com/");
     // window.location.replace("http://localhost5000:/");
    }
    
  });
