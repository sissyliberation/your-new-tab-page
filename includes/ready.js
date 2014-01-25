
$(document).ready(function(){
	

	// this is if you are using it for the first time
	if( localStorage.getItem("user_saved")!="true") {
		localStorage.setItem('user_saved','true');
		chrome.topSites.get(function(info) {
			var num = 8;
			if (info.length < 8) {
				num = info.length;
			}
			for(var i=0; i < num; ++i) {
				localStorage.setItem(info[i].title.toLowerCase(), info[i].url);
			}
		});
	}

	// initializing conditions here
	$('.options').hide();

	//display links here
	for (var i = 0; i < localStorage.length; ++i) {
		var tmp = localStorage.key(i);
		if(tmp!="user_saved") {
			$('.links').append("<li><a href='"+localStorage.getItem(tmp)+"'>"+tmp+"</a></li>");
		}
	}

	// date stuff
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

	// $('body').css('background-color','black');
	// $('h1,h2,h3,h4,h5,h6,p,a,input,span').css('color','white');

});