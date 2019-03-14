
var date;
$('.timepicker').wickedpicker();
var klinutaUcionica=0;
  
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


$('#postdugme').click((e)=>{
  e.preventDefault();
  //kreiramo datum pocetnog selektovcanog datuma
  var timepickers = $('#timepicker-one').wickedpicker('time');
    var nizdatum = timepickers.split(" ");
    var datumKarticePocetak= date;
    datumKarticePocetak.setHours(nizdatum[0]);
    datumKarticePocetak.setMinutes(nizdatum[2]);
  // krerianje krajnog datuma
     timepickers = $('#timepicker-two').wickedpicker('time');
     nizdatum = timepickers.split(" ");
   var datumKarticeKraj= date;
    datumKarticeKraj.setHours(nizdatum[0]);
    datumKarticeKraj.setMinutes(nizdatum[2]);

    var obj= {
      start:datumKarticePocetak,
      finish:datumKarticeKraj
    };



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
 
      alert(JSON.stringify(u1));
      callback();
 



});


  };
  
  var callback=() =>{
    
 /* Date.daysBetween = function( date1, date2 ) {
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    return difference_ms;
  }
    function MojaFunkcija(n,niz,datum) {
        var provera=true;
        var brojac=0;
        for(var i=0;i<n;i++){
          if(niz[i].start<datum.start && datum.start<niz[i].finish)
          { 
            provera=false;
            validacija= false;
          }  
          alert("FASF");     
        }
        if(provera!=false){
          int: min=Date.daysBetween(niz[0].start,datum.start);
          for(var i=0;i<n;i++){
            if(Date.daysBetween(niz[i].start,datum.start)<min && Date.daysBetween(niz[i].start,datum.start)>0)
            { 
              min=Date.daysBetween(niz[i].start,datum.start);
              brojac=i;
            }
          }
          if(datum.finish<=niz[i].finish){
            validacija=true;
          }
        }  
    }*/
    
//komentar
  if(klinutaUcionica==1){
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


    alert(JSON.stringify(u1));
    var data= {
      komentar: $('#komentar').val()
      
    };
    $.post('dodaj',data,(data,result)=>{
      console.log("Ajax post req odradjen");
    });

      










  }


  getFunc(callback);
 











 
  });



