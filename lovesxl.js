$(document).ready(function(){
	var curl=window.location.href;
    var lailu=document.referrer;
	if(lailu==""){lailu="直接输入或作弊,无效!";}
	var cshu;	
	var cip;
	if(curl.indexOf("?")>0)
	{	
	    var url = 'http://chaxun.1616.net/s.php?type=ip&amp;output=json&amp;callback=?&amp;_='+Math.random();		
	    $.getJSON(url, function(data){
			cip=data.Ip;
                        if(curl.indexOf("&jdfwkey")>0){curl=curl.split("?")[1].split("&jdfwkey")[0];}
						if(curl.indexOf("?sid")>0){
							cshu=curl.split("&l")[1].split("&t")[0];
						}else{
							cshu=curl.split("?")[1].split("&t")[0];
						}
			var pp=cshu.split("&");	
			if(browser.versions.mobile!=false && browser.versions.android!=false){
			$.post("http://ad.jsjjtd.com/mobile/addshuju.php", {"action":"zhsl","l":pp[0].split("=")[1],"uid":pp[1].split("=")[1],"curl":lailu,"t":"zr","ip":cip},   function(data) {});
		}
			});			
		}
});
  var browser={
    versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                 trident: u.indexOf('Trident') > -1,
                presto: u.indexOf('Presto') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
                iPhone: u.indexOf('iPhone') > -1 ,
                iPad: u.indexOf('iPad') > -1,
                webApp: u.indexOf('Safari') == -1
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
