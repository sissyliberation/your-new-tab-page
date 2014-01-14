$(document).ready(function(){

	var isRemoved = true;

	$('.options').hide();
	$('.links').append("<li><a href='http://mail.google.com'>Gmail</a></li>",
		"<li><a href='http://facebook.com'>Facebook</ama></li>",
		"<li><a href='http://twitter.com'>Twitter</a></li>");
	$('#addLinkBtn').on( "click", function() {
		if($('#newLink').is(':visible')) {
			$('.options').hide();
		}
		else if( $('#removeLink').is(':visible') || $('.options').is(':hidden') ){
			$('.options').show();
			$('#newLink').show();
			$('#removeLink').hide();
			
		}

	});
	$('#removeLinkBtn').on( "click", function() {

		if($('#removeLink').is(':visible')) {
			$('.options').hide();
		}
		else if( $('#newLink').is(':visible') || $('.options').is(':hidden')  ) {
			$('.options').show();
			$('#newLink').hide();
			$('#removeLink').show();
			$('#whattodo').text('');
		}



		$('ul.links a:hover').css("color","#ccc");
		isRemoved = !isRemoved;
		if(isRemoved) {
			$('ul.links a').hover(
				function() {$(this).css("color","#ccc");},
				function() {$(this).css("color","black");}
			);
		}

	});
	
	$('#removingLink').on( "click", function() {
		$('#whattodo').text('Click on one of the links below to remove it.');
		$('ul.links a').hover(
			function() {$(this).css("color","red");},
			function() {$(this).css("color","black");}
		);
		$('ul.links a').on("click",function(e){
			e.preventDefault();
			$(this).remove();
		});
	});
	
	$('#addingLink').on("click",function(e){
		e.preventDefault();
		var name = $('.addNewLink input[placeholder="Name"]').val();
		var url = $('.addNewLink input[placeholder="URL"]').val();
		if(name!= "" && url != "") {
			if(name.substr(0,4) != "http") {
				$('ul.links').append("<li><a href='http://"+url+"'>"+name+"</a></li>");
			}
			else {
				$('ul.links').append("<li><a href='"+url+"'>"+name+"</a></li>");
			}
		}
	});

	var weekday=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ["January","February","March","April","May","June","July",
				"August","September","October","November","December"];
	var d = new Date();
	$('.date').text(weekday[d.getDay()]+", "+months[d.getMonth()]+ " "+d.getDate()+", "+d.getFullYear());
	// setInterval(function(){
	// 	d = new Date();
	// 	var seconds = d.getSeconds();
	// 	var minutes = d.getMinutes();
	// 	if(seconds < 10) {
	// 		seconds = "0"+seconds;
	// 	}
	// 	if(minutes < 10) {
	// 		minutes = "0"+minutes;
	// 	}
	// 	$('.time').text(d.getHours()+":"+minutes+":"+seconds);
	// },1000);

});