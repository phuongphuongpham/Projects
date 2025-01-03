function search(){	
	let day = $("#day").val();
	let month = $("#month").val();
	let zodiac = '';
	let img = '';
	let img2 = '';
	let date_range = '';
	
	if (month == 1){
        if (day <= 19){
			zodiac += 'Capricorn';
			date_range += '(December 21 - January 19)';
			img += "https://www.maxpixel.net/static/photo/1x/Horoscope-Zodiac-Capricorn-Zodiac-Sign-3915967.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Astrology-Horoscope-Illustration-Sign-Zodiac-3820092.jpg";}
        else{ 
			zodiac += 'Aquarius';
			date_range += '(January 20 - February 17)';
			img += "https://www.maxpixel.net/static/photo/1x/Astrology-Aquarius-Zodiac-Horoscope-Symbol-3915988.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Zodiac-Astrology-Horoscope-Illustration-Sign-3820091.jpg";}
	}
    else if (month == 2){
		if (day <= 18){
			zodiac += 'Aquarius';
			date_range += '(January 20 - February 17)';
			img += "https://www.maxpixel.net/static/photo/1x/Astrology-Aquarius-Zodiac-Horoscope-Symbol-3915988.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Zodiac-Astrology-Horoscope-Illustration-Sign-3820091.jpg";}
        else{
			zodiac += 'Pisces';
			date_range += '(February 18 - March 19)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Symbol-Fish-Horoscope-Astrology-Zodiac-Sign-3916043.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Zodiac-Sign-Astrology-Illustration-Horoscope-3820090.jpg";}
	}
    else if (month == 3){
        if (day <= 20){
			zodiac += 'Pisces';
			date_range += '(February 18 - March 19)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Symbol-Fish-Horoscope-Astrology-Zodiac-Sign-3916043.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Zodiac-Sign-Astrology-Illustration-Horoscope-3820090.jpg";}
        else{
			zodiac += 'Aries';
			date_range += '(March 20 - April 19)';
			img += "https://www.maxpixel.net/static/photo/1x/Astrology-Horoscope-Aries-Symbol-Zodiac-3916056.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Horoscope-Illustration-Zodiac-Astrology-3820056.jpg";}
	}
    else if (month == 4){
        if (day <= 19){
			zodiac += 'Aries';
			date_range += '(March 20 - April 19)';
			img += "https://www.maxpixel.net/static/photo/1x/Astrology-Horoscope-Aries-Symbol-Zodiac-3916056.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Horoscope-Illustration-Zodiac-Astrology-3820056.jpg";}
        else{
			zodiac += 'Taurus';
			date_range += '(April 20 - May 20)';
			img += "https://www.maxpixel.net/static/photo/1x/Symbol-Taurus-Astrology-Horoscope-Zodiac-3916052.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Astrology-Illustration-Horoscope-Zodiac-3820100.jpg";}
	}
    else if (month == 5){
        if (day <= 20){
			zodiac += 'Taurus';
			date_range += '(April 20 - May 20)';
			img += "https://www.maxpixel.net/static/photo/1x/Symbol-Taurus-Astrology-Horoscope-Zodiac-3916052.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Astrology-Illustration-Horoscope-Zodiac-3820100.jpg";}
        else{
			zodiac += 'Gemini';
			date_range += '(May 21 - June 20)';
			img += "https://pngimg.com/uploads/gemini/gemini_PNG48.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Astrology-Zodiac-Illustration-Horoscope-Sign-3820099.jpg";}
	}
    else if (month == 6){
        if (day <= 20){
			zodiac += 'Gemini';
			date_range += '(May 21 - June 20)';
			img += "https://pngimg.com/uploads/gemini/gemini_PNG48.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Astrology-Zodiac-Illustration-Horoscope-Sign-3820099.jpg";}
        else{
			zodiac += 'Cancer';
			date_range += '(June 21 - July 21)';
			img += "https://www.maxpixel.net/static/photo/1x/Horoscope-Zodiac-Symbol-Libra-Astrology-3915978.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Zodiac-Illustration-Astrology-Horoscope-3820098.jpg";}
	}
	else if (month == 7){
        if (day <= 22){
			zodiac += 'Cancer';
			date_range += '(June 21 - July 21)';
			img += "https://www.maxpixel.net/static/photo/1x/Horoscope-Zodiac-Symbol-Libra-Astrology-3915978.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Zodiac-Illustration-Astrology-Horoscope-3820098.jpg";}
        else{
			zodiac += 'Leo';
			date_range += '(July 22 - August 22)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Sign-Horoscope-Astrology-Leo-Zodiac-Symbol-3915974.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Astrology-Zodiac-Horoscope-Illustration-Sign-3820097.jpg";}
	}
    else if (month == 8){
        if (day <= 22){
			zodiac += 'Leo';
			date_range += '(July 22 - August 22)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Sign-Horoscope-Astrology-Leo-Zodiac-Symbol-3915974.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Astrology-Zodiac-Horoscope-Illustration-Sign-3820097.jpg";}
        else{
			zodiac += 'Virgo';
			date_range += '(August 23 - September 22)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Zodiac-Sign-Horoscope-Astrology-Sign-Virgin-3915965.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Astrology-Illustration-Horoscope-Zodiac-3820100.jpg";}
	}
    else if (month == 9){
        if (day <= 22){
			zodiac += 'Virgo';
			date_range += '(August 23 - September 22)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Zodiac-Sign-Horoscope-Astrology-Sign-Virgin-3915965.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Astrology-Illustration-Horoscope-Zodiac-3820100.jpg";}
        else{
			zodiac += 'Libra';
			date_range += '(September 23 - October 22)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Astrology-Symbol-Horoscope-Libra-3915986.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Horoscope-Zodiac-Illustration-Sign-Astrology-3820095.jpg";}
	}
    else if (month == 10){
        if (day <= 22){
			zodiac += 'Libra';
			date_range += '(September 23 - October 22)';
			img += "https://www.maxpixel.net/static/photo/1x/Zodiac-Astrology-Symbol-Horoscope-Libra-3915986.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Horoscope-Zodiac-Illustration-Sign-Astrology-3820095.jpg";}
        else{
			zodiac += 'Scorpio';
			date_range += '(October 23 - November 21)';
			img += "https://www.maxpixel.net/static/photo/1x/Scorpion-Symbol-Astrology-Horoscope-Zodiac-3916071.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Zodiac-Illustration-Horoscope-Astrology-3820094.jpg";}
	}
    else if (month == 11){
        if (day <= 21){
			zodiac += 'Scorpio';
			date_range += '(October 23 - November 21)';
			img += "https://www.maxpixel.net/static/photo/1x/Scorpion-Symbol-Astrology-Horoscope-Zodiac-3916071.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Sign-Zodiac-Illustration-Horoscope-Astrology-3820094.jpg";}
        else{
			zodiac += 'Sagittarius';
			date_range += '(November 22 - December 20)';
			img += "https://www.maxpixel.net/static/photo/1x/Astrology-Zodiac-Horoscope-Sagittarius-Symbol-3915985.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Horoscope-Illustration-Astrology-Zodiac-Sign-3820093.jpg";}
	}
    else if (month == 12){
        if (day <= 21){
			zodiac += 'Sagittarius';
			date_range += '(November 22 - December 20)';
			img += "https://www.maxpixel.net/static/photo/1x/Astrology-Zodiac-Horoscope-Sagittarius-Symbol-3915985.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Horoscope-Illustration-Astrology-Zodiac-Sign-3820093.jpg";}
        else{
			zodiac += 'Capricorn';
			date_range += '(December 21 - January 19)';
			img += "https://www.maxpixel.net/static/photo/1x/Horoscope-Zodiac-Capricorn-Zodiac-Sign-3915967.png";
			img2 += "https://www.maxpixel.net/static/photo/1x/Astrology-Horoscope-Illustration-Sign-Zodiac-3820092.jpg";}
	}
	
	
	$("#img_zodiac").attr("src", img);
	$("#my_zodiac").html(zodiac.toUpperCase());
	$("#date_range").html(date_range);
	$("#today1").html("Current Date:");
	$("#daily1").html("Daily:");
	$("#career1").html("Career:");
	$("#health1").html("Health:");
	$("#love1").html("Love:");
	$(".info").css("display", "block");
	$("#img2").attr("src", img2);
	
	
	
	let baseURL = "https://devbrewer-horoscope.p.rapidapi.com/today/long/";
	let fullURL = baseURL + zodiac;
	
	const settings = {
	"async": true,
	"crossDomain": true,
	"url": fullURL,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "devbrewer-horoscope.p.rapidapi.com",
		"x-rapidapi-key": "334293c2bfmsh3fd7ac4d792001bp1e4157jsn3da1ac605f1b"
	}
};

$.ajax(settings).done(function (data) {
	let info = JSON.parse(data);
	console.log(info);
 	analyze(info);
});
	
}

function analyze(info){
	let zodiac = $("#my_zodiac").html();
	if (zodiac == "ARIES"){
		let obj = info.Aries;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	else if(zodiac == "TAURUS"){
		let obj = info.Taurus;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);	
	}
	else if(zodiac == "GEMINI"){
		let obj = info.Gemini;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	else if(zodiac == "CANCER"){
		let obj = info.Cancer;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	else if(zodiac == "LEO"){
		let obj = info.Leo;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	else if(zodiac == "VIRGO"){
		let obj = info.Virgo;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	else if(zodiac == "LIBRA"){
		let obj = info.Libra;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);	
	}
	else if(zodiac == "SCORPIO"){
		let obj = info.Scorpio;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	else if(zodiac == "SAGITTARIUS"){
		let obj = info.Sagittarius;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);	
	}
	else if(zodiac == "CAPRICORN"){
		let obj = info.Capricorn;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	else if(zodiac == "AQUARIUS"){
		let obj = info.Aquarius;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);	
	}
	else if(zodiac == "PISCES"){
		let obj = info.Pisces;
    
		$("#daily2").html(obj.Daily);
		$("#career2").html(obj.Career);
		$("#health2").html(obj.Health);
		$("#love2").html(obj.Love);
	}
	
	let current_date = info.Date;
	console.log(current_date);
  
	$("#today2").html(current_date);
	
}
