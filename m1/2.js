function get_iframe(ifr_id, width, height)
{
    var iframe='';
    iframe+='<iframe id="'+ifr_id+'" ';
    iframe+='name="'+ifr_id+'" ';
    iframe+='src="about:blank" ';
    iframe+='frameborder="0" ';
	iframe+='marginwidth="0" ';
	iframe+='marginheight="0" ';
	iframe+='vspace="0" ';
	iframe+='allowtransparency="true" ';
	iframe+='scrolling="no" ';
	iframe+='width="'+width+'" ';
	iframe+='height="'+height+'">';
	iframe+='</iframe>';
	return iframe;
}
function ad1(id, url, pic1, url2, pic2, width, height) {
	var html    = '';
	var doc     = '';
	var get_id  = '_ifr_'+id+'_ad';
	var iframe  = get_iframe(get_id,width,height);
	html+='<!DOCTYPE html><html>';
	html+='<head>';
	html+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
    html+='<style type="text/css">*{margin: 0px;padding: 0px;border: 0px;}</style>';
	html+='</head>';
	html+='<body style="padding:0px;margin:0px;border:0px;">';
    if(url2!='' && pic2!='')
    {
        width = width/2;
	    html+='<a href="'+url+'" target="_blank">';
	    html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	    html+='</a>';
	    html+='<a href="'+url2+'" target="_blank">';
	    html+='<img src="'+pic2+'" width="'+width+'" height="'+height+'" />';
	    html+='</a>';
    } else {
	    html+='<a href="'+url+'" target="_blank">';
	    html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	    html+='</a>';
    }
	html+='</body></html>';
	document.write(iframe);
	doc = document.getElementById(get_id);
	if( doc.document ) {
		doc.contentWindow.document.open();
		doc.contentWindow.document.write(html);
		doc.contentWindow.document.close();
	} else {
		doc.contentDocument.open();
		doc.contentDocument.write(html);
		doc.contentDocument.close();
	}
}
function ad4(id,url,pic1,width,height) {
	var html    = '';
	var doc     = '';
	var get_id  = '_ifr_'+id+'_ad';
	var iframe  = '';
	var xheight = parseInt(height) + 0;
	var xwidth  = parseInt(width) - 10;
	iframe+= '<div id="clyqml" style="width:'+width+'px; height:'+xheight;
	iframe+= 'px; position:fixed;left:0px;top:0px;z-index:9002;overflow:hidden;border: 1px solid #290052;';
	iframe+= '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-'+xheight+'));_bottom:0">';
	iframe+= get_iframe(get_id,width,height);
	iframe+= '<a style="line-height: 0px;background-color:#290052;text-align:center;';
	iframe+= 'width: '+width+'px;height: 0px;display:block;color:#888;font-size:13px;';
	iframe+= 'text-decoration:none;" href="javascript:void(0);"';
	iframe+= 'onclick="document.getElementById(\'clyqml\').style.display=\'none\'"></a>';
	iframe+= '</div>';

	html+='<!DOCTYPE html><html>';
	html+='<head>';
	html+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
	html+='</head>';
	html+='<body style="padding:0px;margin:0px;border:0px;">';
	html+='<a href="'+url+'" target="_blank">';
	html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	html+='</a>';
	html+='</body></html>';
	document.write(iframe);
	doc = document.getElementById(get_id);
	if( doc.document ) {
		doc.contentWindow.document.open();
		doc.contentWindow.document.write(html);
		doc.contentWindow.document.close();
	} else {
		doc.contentDocument.open();
		doc.contentDocument.write(html);
		doc.contentDocument.close();
	}
}
function ad5(id,url,pic1,width,height) {
	var html    = '';
	var doc     = '';
	var get_id  = '_ifr_'+id+'_ad';
	var iframe  = '';
	var xheight = parseInt(height) + 0;
	var xwidth  = parseInt(width) - 10;
	iframe+= '<div id="clyqmr" style="width:'+width+'px; height:'+xheight;
	iframe+= 'px; position:fixed;right:0px;top:0px;z-index:9002;overflow:hidden;border: 1px solid #290052;';
	iframe+= '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-'+xheight+'));_bottom:0">';
	iframe+= get_iframe(get_id,width,height);
	iframe+= '<a style="line-height: 0px;background-color:#290052;text-align:center;';
	iframe+= 'width: '+width+'px;height: 0px;display:block;color:#888;font-size:13px;';
	iframe+= 'text-decoration:none;" href="javascript:void(0);"';
	iframe+= 'onclick="document.getElementById(\'clyqmr\').style.display=\'none\'"></a>';
	iframe+= '</div>';

	html+='<!DOCTYPE html><html>';
	html+='<head>';
	html+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
	html+='</head>';
	html+='<body style="padding:0px;margin:0px;border:0px;">';
	html+='<a href="'+url+'" target="_blank">';
	html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	html+='</a>';
	html+='</body></html>';
	document.write(iframe);
	doc = document.getElementById(get_id);
	if( doc.document ) {
		doc.contentWindow.document.open();
		doc.contentWindow.document.write(html);
		doc.contentWindow.document.close();
	} else {
		doc.contentDocument.open();
		doc.contentDocument.write(html);
		doc.contentDocument.close();
	}
}
function ad6(id,url,pic1,width,height) {
	var html    = '';
	var doc     = '';
	var get_id  = '_ifr_'+id+'_ad';
	var iframe  = '';
	var xheight = parseInt(height) + 19;
	var xwidth  = parseInt(width) - 10;
	iframe+= '<div id="in-the-left" style="width:'+width+'px; height:'+xheight;
	iframe+= 'px; position:fixed;left:0px;top:178px;z-index:9002;overflow:hidden;border: 1px solid #290052;';
	iframe+= '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-'+xheight+'));_bottom:0">';
	iframe+= get_iframe(get_id,width,height);
	iframe+= '<a style="line-height: 19px;background-color:#290052;text-align:center;';
	iframe+= 'width: '+width+'px;height: 19px;display:block;color:#888;font-size:13px;';
	iframe+= 'text-decoration:none;" href="javascript:void(0);"';
	iframe+= 'onclick="document.getElementById(\'in-the-left\').style.display=\'none\'">关闭</a>';
	iframe+= '</div>';

	html+='<!DOCTYPE html><html>';
	html+='<head>';
	html+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
	html+='</head>';
	html+='<body style="padding:0px;margin:0px;border:0px;">';
	html+='<a href="'+url+'" target="_blank">';
	html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	html+='</a>';
	html+='</body></html>';
	document.write(iframe);
	doc = document.getElementById(get_id);
	if( doc.document ) {
		doc.contentWindow.document.open();
		doc.contentWindow.document.write(html);
		doc.contentWindow.document.close();
	} else {
		doc.contentDocument.open();
		doc.contentDocument.write(html);
		doc.contentDocument.close();
	}
}
function ad7(id,url,pic1,width,height) {
	var html    = '';
	var doc     = '';
	var get_id  = '_ifr_'+id+'_ad';
	var iframe  = '';
	var xheight = parseInt(height) + 19;
	var xwidth  = parseInt(width) - 10;
	iframe+= '<div id="in-the-right" style="width:'+width+'px; height:'+xheight;
	iframe+= 'px; position:fixed;right:0px;top:178px;z-index:9002;overflow:hidden;border: 1px solid #290052;';
	iframe+= '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-'+xheight+'));_bottom:0">';
	iframe+= get_iframe(get_id,width,height);
	iframe+= '<a style="line-height: 19px;background-color:#290052;text-align:center;';
	iframe+= 'width: '+width+'px;height: 19px;display:block;color:#888;font-size:13px;';
	iframe+= 'text-decoration:none;" href="javascript:void(0);"';
	iframe+= 'onclick="document.getElementById(\'in-the-right\').style.display=\'none\'">关闭</a>';
	iframe+= '</div>';

	html+='<!DOCTYPE html><html>';
	html+='<head>';
	html+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
	html+='</head>';
	html+='<body style="padding:0px;margin:0px;border:0px;">';
	html+='<a href="'+url+'" target="_blank">';
	html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	html+='</a>';
	html+='</body></html>';
	document.write(iframe);
	doc = document.getElementById(get_id);
	if( doc.document ) {
		doc.contentWindow.document.open();
		doc.contentWindow.document.write(html);
		doc.contentWindow.document.close();
	} else {
		doc.contentDocument.open();
		doc.contentDocument.write(html);
		doc.contentDocument.close();
	}
}
function ad8(id,url,pic1,width,height) {
	var html    = '';
	var doc     = '';
	var get_id  = '_ifr_'+id+'_ad';
	var iframe  = '';
	var xheight = parseInt(height) + 19;
	var xwidth  = parseInt(width) - 10;
	iframe+= '<div id="lower-left" style="width:'+width+'px; height:'+xheight;
	iframe+= 'px; position:fixed;left:0px;bottom:0px;z-index:9002;overflow:hidden;border: 1px solid #290052;';
	iframe+= '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-'+xheight+'));_bottom:0">';
	iframe+= get_iframe(get_id,width,height);
	iframe+= '<a style="line-height: 19px;background-color:#290052;text-align:center;';
	iframe+= 'width: '+width+'px;height: 19px;display:block;color:#888;font-size:13px;';
	iframe+= 'text-decoration:none;" href="javascript:void(0);"';
	iframe+= 'onclick="document.getElementById(\'lower-left\').style.display=\'none\'">关闭</a>';
	iframe+= '</div>';

	html+='<!DOCTYPE html><html>';
	html+='<head>';
	html+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
	html+='</head>';
	html+='<body style="padding:0px;margin:0px;border:0px;">';
	html+='<a href="'+url+'" target="_blank">';
	html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	html+='</a>';
	html+='</body></html>';
	document.write(iframe);
	doc = document.getElementById(get_id);
	if( doc.document ) {
		doc.contentWindow.document.open();
		doc.contentWindow.document.write(html);
		doc.contentWindow.document.close();
	} else {
		doc.contentDocument.open();
		doc.contentDocument.write(html);
		doc.contentDocument.close();
	}
}
function ad9(id,url,pic1,width,height) {
	var html    = '';
	var doc     = '';
	var get_id  = '_ifr_'+id+'_ad';
	var iframe  = '';
	var xheight = parseInt(height) + 19;
	var xwidth  = parseInt(width) - 10;
	iframe+= '<div id="lower-right" style="width:'+width+'px; height:'+xheight;
	iframe+= 'px; position:fixed;right:0px;bottom:0px;z-index:9002;overflow:hidden;border: 1px solid #290052;';
	iframe+= '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-'+xheight+'));_bottom:0">';
	iframe+= get_iframe(get_id,width,height);
	iframe+= '<a style="line-height: 19px;background-color:#290052;text-align:center;';
	iframe+= 'width: '+width+'px;height: 19px;display:block;color:#888;font-size:13px;';
	iframe+= 'text-decoration:none;" href="javascript:void(0);"';
	iframe+= 'onclick="document.getElementById(\'lower-right\').style.display=\'none\'">关闭</a>';
	iframe+= '</div>';

	html+='<!DOCTYPE html><html>';
	html+='<head>';
	html+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
	html+='</head>';
	html+='<body style="padding:0px;margin:0px;border:0px;">';
	html+='<a href="'+url+'" target="_blank">';
	html+='<img src="'+pic1+'" width="'+width+'" height="'+height+'" />';
	html+='</a>';
	html+='</body></html>';
	document.write(iframe);
	doc = document.getElementById(get_id);
	if( doc.document ) {
		doc.contentWindow.document.open();
		doc.contentWindow.document.write(html);
		doc.contentWindow.document.close();
	} else {
		doc.contentDocument.open();
		doc.contentDocument.write(html);
		doc.contentDocument.close();
	}
}
function show(id) {
	try {
		var pop = eval('_ifr_'+id+'_pop');
	} catch (e){
		var pop = {"id":false};
	}
	if(pop.id != false){
		if(pop.fid == '1') {
			ad1(pop.id,pop.url,pop.pic1,pop.url2,pop.pic2,pop.width,pop.height);
		} else if(pop.fid == '4') {
			ad4(pop.id,pop.url,pop.pic1,pop.width,pop.height);
		} else if(pop.fid == '5') {
			ad5(pop.id,pop.url,pop.pic1,pop.width,pop.height);
		} else if(pop.fid == '6') {
			ad6(pop.id,pop.url,pop.pic1,pop.width,pop.height);
		} else if(pop.fid == '7') {
			ad7(pop.id,pop.url,pop.pic1,pop.width,pop.height);
		} else if(pop.fid == '8') {
			ad8(pop.id,pop.url,pop.pic1,pop.width,pop.height);
		} else if(pop.fid == '9') {
			ad9(pop.id,pop.url,pop.pic1,pop.width,pop.height);
		} else if(pop.fid == '10') {
			document.write('<script src="https://365yun.cdntxt2.com/v1/'+id+'.js?t=1"></script>');
		}
	}
}
