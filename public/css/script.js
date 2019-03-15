
var date;
$('.timepicker').wickedpicker();
var kliknutaUcionica=0;
  
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

Date.daysBetween = function( date1, date2 ) {
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = date2_ms - date1_ms;
  return difference_ms;
}
  function MojaFunkcija(n,niz,datum1) {
      var provera=true;
      var brojac=0;
      for(var i=0;i<n;i++)
      { 
        alert(new Date(niz[i].start));
        alert(new Date(niz[i].finish));
        
        if((new Date(niz[i].start)).getTime()<(new Date(datum1.start)).getTime() && (new Date(datum1.start)).getTime()<(new Date(niz[i].finish)).getTime())
        
        { 
          //alert(new Date(niz[i].start));
          //alert(new Date(datum1.start)+2);
          provera=false;
          validacija= false;
          alert(new Date(niz[i].start));
          alert(new Date(datum.start));
          break;
        }              
        //alert(new Date(datum1.start));
      }
      if(provera!=false)
      {
        alert("FASF");   
        for(var i=0;i<n;i++)
        {
          if(Date.daysBetween(new Date(niz[i].start),new Date(datum1.start))>0)
          { 
            brojac=i;
            break;
          }
        }
      } 
      if((new Date(datum1.finish)).getTime()<=(new Date(niz[brojac].finish)).getTime()){
        validacija=true;
      }
      else{
        validacija=false;
      } 
  }

$('#postdugme').click((e)=>{
  e.preventDefault();




  //kreiramo datum pocetnog selektovcanog datuma
  
    var nizdatum = $('#vreme1').val().split(":");
  




   // var datumKarticePocetak= new Date(date.getYear(),date.getDate(),date.getMonth(),nizdatum[0],nizdatum[1]);
   var datumKarticePocetak= date;
    
    datumKarticePocetak.setHours(nizdatum[0]);
    datumKarticePocetak.setMinutes(nizdatum[1]);
   // alert(datumKarticePocetak);
  // krerianje krajnog datuma
     
     nizdatum = $('#vreme2').val().split(":");
     
  // var datumKarticeKraj= new Date(date.getYear(),date.getMonth(),date.getDate(),nizdatum[0],nizdatum[1]);
   var datumKarticeKraj= date;
    datumKarticeKraj.setHours(nizdatum[0]);
   datumKarticeKraj.setMinutes(nizdatum[1]);
   //alert(datumKarticeKraj);

    var obj= {
      start:datumKarticePocetak,
      finish:datumKarticeKraj
    };
  
   // alert(new Date(obj.start));
    //alert(new Date(obj.finish));
    alert(JSON.stringify(obj));


  var u1fil=[];
  var u2fil=[];
  var u3fil=[];
  var u4fil=[];
  var u1=[];
  var u2=[];
  var u3=[];
  var u4=[];
  var klinutaUcionica=1;

  var validacija;
  var getFunc= (callback)=>{
    $.get('/zak/data',(data,status)=>{
      u1=data.u1;
      u2=data.u2;
      u3=data.u3;
      u4=data.u4;
 
      
      callback();
 



});


  };
  
  var callback=() =>{
    
  //kraj funkcije
    
//komentar
  if(kliknutaUcionica==1){
      MojaFunkcija(u1.length,u1,obj);
      if(validacija==true){
        //izvrsava kod za unos u mongoDB
        alert("BARTKUSONI");
        validacija=false;
      }
      else{
        //javlja gresku pri unosu
        alert("nope");
      }
  }


    //alert(JSON.stringify(u1));
   /* var data= {
      komentar: $('#komentar').val()
      
    };
    $.post('dodaj',data,(data,result)=>{
      console.log("Ajax post req odradjen");
    });*/

      










  }


  getFunc(callback);
 











 
  });

  $('#btn1').click(()=>{
    kliknutaUcionica=1;
  });


