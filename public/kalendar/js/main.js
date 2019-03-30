

jQuery(document).ready(function($){
	var kliknutaUcionica=1;
var nizDatuma1=[];
var nizDatuma2=[];
var nizDatuma3=[];
var nizDatuma4=[];
	$('#right').attr('disabled',false);
		$('#left').attr('disabled',false);
		var granicaP=new Date();
		var granicaZ=new Date();
		
		 var dateString = window.location.href.split('/');
		 var date = new Date();
		 var n= date.getDay();
	
		
				 
	 if(n==1){
		 granicaP=date;
		 granicaZ.setDate(date.getDate()+4);
		 n= granicaZ.getDay();
	 
	 }
	 else if(n==5){
		 granicaZ=date;
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
		 granicaZ.setDate(granicaP.getDate()+5);
		
		 

	 }
	 granicaP.setHours(6);
	 granicaP.setMinutes(0);
	 granicaZ.setHours(23);
	 granicaZ.setMinutes(55);

	 
		 if(dateString[4]==""){
		
		 }
		 else{
			 granicaP=new Date(dateString[4].replace("%22","").replace("%22",""));
				granicaZ= new Date(dateString[4].replace("%22","").replace("%22",""));
				granicaZ.setDate(granicaZ.getDate()+7);
				kliknutaUcionica=dateString[dateString.length-1];
			 
		 }
		 
		 var trDate= new Date();
		 trDate.setDate(granicaP.getDate());
		 trDate.setMonth(granicaP.getMonth());
		 
		 $("#maliU").html("Trenutna ucionica je "+kliknutaUcionica);
		 
	
		 $('.top-info > span').each(function (br){
			
			
		//	trDate.setMonth(granicaP.getMonth());


		
			
			
			var dateStr=trDate.getDate()+"."+(trDate.getMonth()+1)+"."+trDate.getFullYear()+".";
			trDate.setDate(trDate.getDate()+1);
		
			
	
			$('#sel').append("<option data-datum=\""+JSON.stringify(trDate) +"\">"+dateStr+"</option>")
			$(this).append("<br>"+dateStr);

		});

	

		//$(".ponedeljak").append("<li class=\"single-event\" data-start=\"14:00\" data-end=\"15:15\"   data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">Yoga Level 1<\/em><\/a><\/li>");
		
		// kreiranje granicnih datuma
		
		//get req
	function Render(kliknutaUcionica, ){	
		$.get('/zak/data',(data,status)=>{
			ufil= [];
			
			
			
			
		
			
		
			
			
			//$(".ponedeljak").append("<li class=\"single-event\" data-start=\"14:00\" data-end=\"15:15\"   data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">Yoga LeveDSADl 1<\/em><\/a><\/li>");
			
			
			// 1. dinimacki popuni sve za danasnji datum +5 *dodati da reaguje na promenu ucionice


			
					

						// popunjavanje niza samo datumima koji su u okviru
						if(kliknutaUcionica==1){
							data.u1.forEach((element)=>{
              
            
								var dateUpo= new Date(element.start);
								if(dateUpo.getTime()>=granicaP.getTime()&& dateUpo.getTime()<=granicaZ.getTime()){
									ufil.push(element);
								}
								
							});
						  }
						  else if(kliknutaUcionica==2){
							data.u2.forEach((element)=>{
              
            
								var dateUpo= new Date(element.start);
								if(dateUpo.getTime()>=granicaP.getTime()&& dateUpo.getTime()<=granicaZ.getTime()){
									ufil.push(element);
								}
								
							});
						  }
						  else if(kliknutaUcionica==3){
							data.u3.forEach((element)=>{
              
            
								var dateUpo= new Date(element.start);
								if(dateUpo.getTime()>=granicaP.getTime()&& dateUpo.getTime()<=granicaZ.getTime()){
									ufil.push(element);
								}
								
							});
						 }
						 else if(kliknutaUcionica==4){
							data.u4.forEach((element)=>{
              
            
								var dateUpo= new Date(element.start);
								if(dateUpo.getTime()>=granicaP.getTime()&& dateUpo.getTime()<=granicaZ.getTime()){
									ufil.push(element);
								}
								
							});
						 }
						 
					
					//ufil.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);
					ufil.sort((a,b)=>{
						a= new Date(a.start);
						b=new Date(b.start);
						if(a.getTime()>b.getTime()){
							return 1;
						}
						else{
							return -1;
						}
					})
						
						// iscrtavanje stavki
						ufil.forEach((element)=>{
							var dateStart= new Date(element.start);
							var dateFinish= new Date(element.finish);

							var strStart=dateStart.getHours()+":"+dateStart.getMinutes();
							var strFinish=dateFinish.getHours()+":"+dateFinish.getMinutes();
								
							if(new Date(element.start).getDay()==1){

								$(".ponedeljak").append("<li class=\"single-event\" data-start=\""+strStart+"\"  data-end=\""+strFinish+"\" data-komentar=\""+element.komentar+"\"  data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">"+element.prof+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></i></span>"+"<\/em><\/a><\/li>");

							}
							else if(new Date(element.start).getDay()==2){
								$(".utorak").append("<li class=\"single-event\" data-start=\""+strStart+"\" data-end=\""+strFinish+"\"  data-komentar=\""+element.komentar+"\" data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">"+element.prof+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></i></span>"+"<\/em><\/a><\/li>");
							}
							else if(new Date(element.start).getDay()==3){
								$(".sreda").append("<li class=\"single-event\" data-start=\""+strStart+"\" data-end=\""+strFinish+"\" data-komentar=\""+element.komentar+"\"  data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">"+element.prof+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></i></span>"+"<\/em><\/a><\/li>");
							}
							else if(new Date(element.start).getDay()==4){
								$(".cetvrtak").append("<li class=\"single-event\" data-start=\""+strStart+"\" data-end=\""+strFinish+"\" data-komentar=\""+element.komentar+"\"  data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">"+element.prof+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></i></span>"+"<\/em><\/a><\/li>");
							}
							else if(new Date(element.start).getDay()==5){
								$(".petak").append("<li class=\"single-event\" data-start=\""+strStart+"\" data-end=\""+strFinish+"\" data-komentar=\""+element.komentar+"\"  data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">"+element.prof+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></i></span>"+"<\/em><\/a><\/li>");
							}
							else{
								$(".subota").append("<li class=\"single-event\" data-start=\""+strStart+"\" data-end=\""+strFinish+"\" data-komentar=\""+element.komentar+"\"  data-event=\"event-3\"><a href=\"#0\"><em class=\"event-name\">"+element.prof+"<span class=\"kanta\" data-id=\""+element._id + "\"> <i class=\"fas fa-trash-alt\"></i></span>"+"<\/em><\/a><\/li>");
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
						//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
								window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
						});


	

			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			Callback();
			
			
		

			
			
		});
	
	}
	
	
	
	
			// 2. ubacimo strlice,i kalendarce,da radi na po 7 dana
	$('#right').click((e)=>{
		
		granicaP.setDate(granicaP.getDate()+7);
		//granicaZ.setDate(granicaZ.getDate()+7);
<<<<<<< HEAD
	//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP));
		window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP));
=======
	//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
		window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
>>>>>>> 662237c602602e6dc94c40c650fb4dc23765041d
		
	

			});
$('#left').click((e)=>{
	
		granicaP.setDate(granicaP.getDate()-7);
<<<<<<< HEAD
	//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP));
		window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP));
=======
	//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
		window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
>>>>>>> 662237c602602e6dc94c40c650fb4dc23765041d

		
					});
/*	$("#lupa").click(()=>{
    
						var niz = $(".datepicker-here").val().split(".");
						if($(".datepicker-here").val()!= ""){
						 var newdate =new Date();
						 newdate.setDate(niz[0]);
						 newdate.setMonth(niz[1]-1);
						 newdate.setFullYear(niz[2]);
						 
					 
				
						$('#right').attr('disabled',true);
						$('#left').attr('disabled',true);
					
					
						 
				 
						 $( ".card-text" ).remove();
						 var n= newdate.getDay();
				 
						 if(n==1){
							 granicaP=newdate;
							 granicaZ.setDate(newdate.getDate()+4);
							 n= granicaZ.getDay();
						 
						 }
						 else if(n==5){
							 granicaZ=newdate;
							 granicaP.setDate(newdate.getDate()-4);
							 
						 }
						 else{
							 var br=0;
							 var i=n;
							 while(i>1){
								 i--;
								 br++;
							 }
							 granicaP.setDate(newdate.getDate()-br);
							 granicaZ.setDate(granicaP.getDate()+5);
							 granicaP.setMonth(niz[1]-1);
							
					
							 
					
						 }
						 granicaP.setHours(6);
						 granicaP.setMinutes(0);
						 granicaZ.setHours(23);
						 granicaZ.setMinutes(55);
						// 
							
							
							//	$(".datum").html("<h1>"+stringDatuma+"</h1>");
							
								
							window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP));
							//	window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP));
							
							
						
				
				
				
						}
						});

*/
			// 3. alg provera da se ubaci,i pop-up forma na mon/tu/wen za zakazivanje
			function Provera() {
				s1=$("#11").val();
				s2=$("#22").val();
		
			var nizDatuma=[];
		 
				var dateniz=$( "#sel option:selected" ).text().split('.');
				
				
		 
			var dateD= new Date(dateniz[2],dateniz[1]-1,dateniz[0]);
		
		 
			var n=s1.split(":");
			var dateUnetStart=  new Date(dateD.getFullYear(),dateD.getMonth(),dateD.getDate(),n[0],n[1]);
		
			n=s2.split(":");
		
			var dateUnetFinish= new Date(dateD.getFullYear(),dateD.getMonth(),dateD.getDate(),n[0],n[1]);
		
		
			 
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
				//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
						window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
				});
		}
		else{
			
				if(dateUnetStart.getTime()>=nizDatuma[nizDatuma.length-1].finish.getTime()  ){
						
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
						//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
								window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
						});
		
		
				}
				else{ 
						alert("Termin nije dostupan ZADNJI");
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
			// 4. brisanje
	
	
	
	
	
	
		
	
	
	$("#ucionice").change(function(){
		var s=$("#ucionice option:selected").val();
		
		kliknutaUcionica=s;
		//$("#maliU").html("Trenutna ucionica je "+kliknutaUcionica);
		//window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
	});
	$("#filtr").click(()=>{
		if($("#ucionice option:selected").text()=="Ucionica 1"){
		//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+"1");
		window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+"1");
		}
		else{
	//	window.location.replace("http://localhost:5000/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
		window.location.replace("https://ucionice.herokuapp.com/kalendar/"+JSON.stringify(granicaP)+"/"+kliknutaUcionica);
			}
	});
	
	
	
	
	
	
	Render(kliknutaUcionica);
	
	
	


	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	$('.contact').click(function() {
		$('#contactForm').fadeToggle();
	})
	$(document).mouseup(function (e) {
		var container = $("#contactForm");

		if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
				container.fadeOut();
		}
	});
	
	function Callback() {
		
		

		var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
	var transitionsSupported = ( $('.csstransitions').length > 0 );
	//if browser does not support transitions - use a different event to trigger them
	if( !transitionsSupported ) transitionEnd = 'noTransition';
	
	//should add a loding while the events are organized 

	function SchedulePlan( element ) {
		this.element = element;
		this.timeline = this.element.find('.timeline');
		this.timelineItems = this.timeline.find('li');
		this.timelineItemsNumber = this.timelineItems.length;
		this.timelineStart = getScheduleTimestamp(this.timelineItems.eq(0).text());
		//need to store delta (in our case half hour) timestamp
		this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems.eq(1).text()) - getScheduleTimestamp(this.timelineItems.eq(0).text());

		this.eventsWrapper = this.element.find('.events');
		this.eventsGroup = this.eventsWrapper.find('.events-group');
		this.singleEvents = this.eventsGroup.find('.single-event');
		this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();

		this.modal = this.element.find('.event-modal');
		this.modalHeader = this.modal.find('.header');
		this.modalHeaderBg = this.modal.find('.header-bg');
		this.modalBody = this.modal.find('.body'); 
		this.modalBodyBg = this.modal.find('.body-bg'); 
		this.modalMaxWidth = 800;
		this.modalMaxHeight = 480;

		this.animating = false;

	
		this.initSchedule();
		
		
	}

	SchedulePlan.prototype.initSchedule = function() {
		this.scheduleReset();
		this.initEvents();
	};

	SchedulePlan.prototype.scheduleReset = function() {
		var mq = this.mq();
		if( mq == 'desktop' && !this.element.hasClass('js-full') ) {
			//in this case you are on a desktop version (first load or resize from mobile)
			this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
			this.element.addClass('js-full');
			this.placeEvents();
			this.element.hasClass('modal-is-open') && this.checkEventModal();
		} else if(  mq == 'mobile' && this.element.hasClass('js-full') ) {
			//in this case you are on a mobile version (first load or resize from desktop)
			this.element.removeClass('js-full loading');
			this.eventsGroup.children('ul').add(this.singleEvents).removeAttr('style');
			this.eventsWrapper.children('.grid-line').remove();
			this.element.hasClass('modal-is-open') && this.checkEventModal();
		} else if( mq == 'desktop' && this.element.hasClass('modal-is-open')){
			//on a mobile version with modal open - need to resize/move modal window
			this.checkEventModal('desktop');
			this.element.removeClass('loading');
		} else {
			this.element.removeClass('loading');
		}
	};


	SchedulePlan.prototype.initEvents = function() {
		var self = this;

		this.singleEvents.each(function(){
			//create the .event-date element for each event
			var durationLabel = '<span class="event-date">'+$(this).data('start')+' - '+$(this).data('end')+'</span>';
			$(this).children('a').prepend($(durationLabel));

			//detect click on the event and open the modal
			$(this).on('click', 'a', function(event){
				// RADIMO NAS KLIK  
			var kom=	$(this).parent().data('komentar');
			$('#komentarTekst').html(kom);
			

				event.preventDefault();
				if( !self.animating ) self.openModal($(this));
			});
		});

		//close modal window
		this.modal.on('click', '.close', function(event){
			event.preventDefault();
			if( !self.animating ) self.closeModal(self.eventsGroup.find('.selected-event'));
		});
		this.element.on('click', '.cover-layer', function(event){
			if( !self.animating && self.element.hasClass('modal-is-open') ) self.closeModal(self.eventsGroup.find('.selected-event'));
		});
	};

	SchedulePlan.prototype.placeEvents = function() {
		var self = this;
		this.singleEvents.each(function(){
			//place each event in the grid -> need to set top position and height
			var start = getScheduleTimestamp($(this).attr('data-start')),
				duration = getScheduleTimestamp($(this).attr('data-end')) - start;

			var eventTop = self.eventSlotHeight*(start - self.timelineStart)/self.timelineUnitDuration,
				eventHeight = self.eventSlotHeight*duration/self.timelineUnitDuration;
			
			$(this).css({
				top: (eventTop -1) +'px',
				height: (eventHeight+1)+'px'
			});
		});

		this.element.removeClass('loading');
	};

	SchedulePlan.prototype.openModal = function(event) {
		var self = this;
		var mq = self.mq();
		this.animating = true;

		//update event name and time
		this.modalHeader.find('.event-name').text(event.find('.event-name').text());
		this.modalHeader.find('.event-date').text(event.find('.event-date').text());
		this.modal.attr('data-event', event.parent().attr('data-event'));

		//update event content
		this.modalBody.find('.event-info').load($('.event-info').html(), function(data){
			//once the event content has been loaded
			self.element.addClass('content-loaded');
		});

		this.element.addClass('modal-is-open');

		setTimeout(function(){
			//fixes a flash when an event is selected - desktop version only
			event.parent('li').addClass('selected-event');
		}, 10);

		if( mq == 'mobile' ) {
			self.modal.one(transitionEnd, function(){
				self.modal.off(transitionEnd);
				self.animating = false;
			});
		} else {
			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var windowWidth = $(window).width(),
				windowHeight = $(window).height();

			var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
				modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;

			var modalTranslateX = parseInt((windowWidth - modalWidth)/2 - eventLeft),
				modalTranslateY = parseInt((windowHeight - modalHeight)/2 - eventTop);
			
			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);

			//change modal height/width and translate it
			self.modal.css({
				top: eventTop+'px',
				left: eventLeft+'px',
				height: modalHeight+'px',
				width: modalWidth+'px',
			});
			transformElement(self.modal, 'translateY('+modalTranslateY+'px) translateX('+modalTranslateX+'px)');

			//set modalHeader width
			self.modalHeader.css({
				width: eventWidth+'px',
			});
			//set modalBody left margin
			self.modalBody.css({
				marginLeft: eventWidth+'px',
			});

			//change modalBodyBg height/width ans scale it
			self.modalBodyBg.css({
				height: eventHeight+'px',
				width: '1px',
			});
			transformElement(self.modalBodyBg, 'scaleY('+HeaderBgScaleY+') scaleX('+BodyBgScaleX+')');

			//change modal modalHeaderBg height/width and scale it
			self.modalHeaderBg.css({
				height: eventHeight+'px',
				width: eventWidth+'px',
			});
			transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
			
			self.modalHeaderBg.one(transitionEnd, function(){
				//wait for the  end of the modalHeaderBg transformation and show the modal content
				self.modalHeaderBg.off(transitionEnd);
				self.animating = false;
				self.element.addClass('animation-completed');
			});
		}

		//if browser do not support transitions -> no need to wait for the end of it
		if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
	};

	SchedulePlan.prototype.closeModal = function(event) {
		var self = this;
		var mq = self.mq();

		this.animating = true;

		if( mq == 'mobile' ) {
			this.element.removeClass('modal-is-open');
			this.modal.one(transitionEnd, function(){
				self.modal.off(transitionEnd);
				self.animating = false;
				self.element.removeClass('content-loaded');
				event.removeClass('selected-event');
			});
		} else {
			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var modalTop = Number(self.modal.css('top').replace('px', '')),
				modalLeft = Number(self.modal.css('left').replace('px', ''));

			var modalTranslateX = eventLeft - modalLeft,
				modalTranslateY = eventTop - modalTop;

			self.element.removeClass('animation-completed modal-is-open');

			//change modal width/height and translate it
			this.modal.css({
				width: eventWidth+'px',
				height: eventHeight+'px'
			});
			transformElement(self.modal, 'translateX('+modalTranslateX+'px) translateY('+modalTranslateY+'px)');
			
			//scale down modalBodyBg element
			transformElement(self.modalBodyBg, 'scaleX(0) scaleY(1)');
			//scale down modalHeaderBg element
			transformElement(self.modalHeaderBg, 'scaleY(1)');

			this.modalHeaderBg.one(transitionEnd, function(){
				//wait for the  end of the modalHeaderBg transformation and reset modal style
				self.modalHeaderBg.off(transitionEnd);
				self.modal.addClass('no-transition');
				setTimeout(function(){
					self.modal.add(self.modalHeader).add(self.modalBody).add(self.modalHeaderBg).add(self.modalBodyBg).attr('style', '');
				}, 10);
				setTimeout(function(){
					self.modal.removeClass('no-transition');
				}, 20);

				self.animating = false;
				self.element.removeClass('content-loaded');
				event.removeClass('selected-event');
			});
		}

		//browser do not support transitions -> no need to wait for the end of it
		if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
	}

	SchedulePlan.prototype.mq = function(){
		//get MQ value ('desktop' or 'mobile') 
		var self = this;
		return window.getComputedStyle(this.element.get(0), '::before').getPropertyValue('content').replace(/["']/g, '');
	};

	SchedulePlan.prototype.checkEventModal = function(device) {
		this.animating = true;
		var self = this;
		var mq = this.mq();

		if( mq == 'mobile' ) {
			//reset modal style on mobile
			self.modal.add(self.modalHeader).add(self.modalHeaderBg).add(self.modalBody).add(self.modalBodyBg).attr('style', '');
			self.modal.removeClass('no-transition');	
			self.animating = false;	
		} else if( mq == 'desktop' && self.element.hasClass('modal-is-open') ) {
			self.modal.addClass('no-transition');
			self.element.addClass('animation-completed');
			var event = self.eventsGroup.find('.selected-event');

			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var windowWidth = $(window).width(),
				windowHeight = $(window).height();

			var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
				modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;

			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);

			setTimeout(function(){
				self.modal.css({
					width: modalWidth+'px',
					height: modalHeight+'px',
					top: (windowHeight/2 - modalHeight/2)+'px',
					left: (windowWidth/2 - modalWidth/2)+'px',
				});
				transformElement(self.modal, 'translateY(0) translateX(0)');
				//change modal modalBodyBg height/width
				self.modalBodyBg.css({
					height: modalHeight+'px',
					width: '1px',
				});
				transformElement(self.modalBodyBg, 'scaleX('+BodyBgScaleX+')');
				//set modalHeader width
				self.modalHeader.css({
					width: eventWidth+'px',
				});
				//set modalBody left margin
				self.modalBody.css({
					marginLeft: eventWidth+'px',
				});
				//change modal modalHeaderBg height/width and scale it
				self.modalHeaderBg.css({
					height: eventHeight+'px',
					width: eventWidth+'px',
				});
				transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
			}, 10);

			setTimeout(function(){
				self.modal.removeClass('no-transition');
				self.animating = false;	
			}, 20);
		}
	};

	var schedules = $('.cd-schedule');
	var objSchedulesPlan = [],
		windowResize = false;
	
	if( schedules.length > 0 ) {
		schedules.each(function(){
			//create SchedulePlan objects
			objSchedulesPlan.push(new SchedulePlan($(this)));

		});

	}

	$(window).on('resize', function(){
		if( !windowResize ) {
			windowResize = true;
			(!window.requestAnimationFrame) ? setTimeout(checkResize) : window.requestAnimationFrame(checkResize);
		}
	});

	$(window).keyup(function(event) {
		if (event.keyCode == 27) {
			objSchedulesPlan.forEach(function(element){
				element.closeModal(element.eventsGroup.find('.selected-event'));
			});
		}
	});

	function checkResize(){
		objSchedulesPlan.forEach(function(element){
			element.scheduleReset();
		});
		windowResize = false;
	}

	function getScheduleTimestamp(time) {
		//accepts hh:mm format - convert hh:mm to timestamp
		time = time.replace(/ /g,'');
		var timeArray = time.split(':');
		var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
		return timeStamp;
	}

	function transformElement(element, value) {
		element.css({
		    '-moz-transform': value,
		    '-webkit-transform': value,
			'-ms-transform': value,
			'-o-transform': value,
			'transform': value
		});
	}
	

	}

});
	
	