var ee = 'webkitAnimationEnd mozAnimationEnd animationend',
	ua = navigator.userAgent.toLowerCase(),
	iphone = ua.indexOf('iphone') != -1,
	android = ua.indexOf('android') != -1,
	ipad = ua.indexOf('ipad') != -1,
	pc = (!iphone && !android && !ipad);

function addAnimate(ele){
	ele.find('[data-animate]').each(function(index, el) {
		var _this = $(this), cls = _this.attr('data-animate'), delay = _this.attr('data-delay') || 0;
		setTimeout(function(){
			_this.addClass(cls + ' animated');
		}, delay);
	});
}

function audioAutoPlay(id){
	var audio = document.getElementById(id),
		play = function(){
			audio.play();
			document.removeEventListener("touchstart",play, false);
		};
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function () {
		play();
	}, false);
	document.addEventListener('YixinJSBridgeReady', function() {
		play();
	}, false);
	document.addEventListener("touchstart",play, false);
}
function writeCookie(name,value,expires,path,domain){
	var str=name+"="+escape(value);
	if(expires!=""){
		var date=new Date();
		date.setTime(date.getTime()+expires*24*3600*1000);
		str+=";expires="+date.toGMTString();
	}
	if(path!=""){
		str+=";path="+path;
	}
	if(domain!=""){
		str+=";domain="+domain;
	}
	document.cookie=str;
}
function getCookie(name){
	var strcookie = document.cookie;
	var arrcookie = strcookie.split("; ");
	for ( var i = 0; i < arrcookie.length; i++) {
		var arr = arrcookie[i].split("=");
		if (arr[0] == name){
			return arr[1];
		}
	}
	return "";
}
function getByteLen(val) {
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		var a = val.charAt(i);
		if (a.match(/[^\x00-\xff]/ig) != null) {
			len += 2;
		}else{
			len += 1;
		}
	}
	return len;
}
function randomSort(a, b) {
	return Math.random()>.5 ? -1 : 1;
}
