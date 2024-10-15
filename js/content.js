var domainurlstatic ="https://giaodich.hangquangchau24h.vn/static/images/";
var domainurl="https://giaodich.hangquangchau24h.vn/extension/";
var domain_addcart = "https://orderchina24h.vn/api/cart/add-cart";
var urlrate = "https://orderchina24h.vn/api/information/config/TY_GIA";
var beforeHtml = '';

var urlParams = ({
    getUrlVars: function (url) {
        var vars = [], hash;
        if(url == null) {
            url = window.location.href;
        }
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name,url) {
        return this.getUrlVars(url)[name];
    }
});
    
function renderbox(price_result)
{
    //html vung hien thi gia
	var price_text='<div style="font-weight: bold;color: blue;line-height: 40px;font-size: 22px;font-family: Roboto,Arial;margin-bottom: 0px;" id="tinphat-price">>Giá tạm tính : '+(price_result)+' VNĐ</div> ';
	//html vung mota
	var com_text='<textarea  rows="2" placeholder="Ghi chú sản phẩm" id="txtBz" style="width: 95%;font-size: 13px;font-family: Arial;padding: 5px;outline: none;border-width: 1px;border-style: solid;border-color: rgb(204, 204, 204);;border-image: initial;" name="txtBz"></textarea>';
	//html vung luu lai
	var home_link='<a href="//orderchina24h.vn" title="Order china 24h" target="_blank" style="float:right; font-size:13px; font-weight:600; text-decoration:none; padding:5px 3px 0 0; color:#FFFFFF !important;">orderchina24h.vn</a>';
	var save_text='<div style="float:right;margin-right:5px">'+home_link+'</div>';
	var ads='';
			
	//html toan bo addon
	var s = '<div>'+
		'<dl class="clearfix" id="gia-tinphat" style="font-size: 16px;margin: 10px;max-width: 500px;border-width: 3px;border-style: solid;border-color: #ff7300;border-image: initial;overflow: hidden;background: rgba(199, 146, 46, 0.208);">'+
		'<h5 class="tool_title" style="text-align: center;color: rgb(255, 255, 255);text-transform: uppercase;font-family: Arial;font-size: 20px;font-weight: 400;background: #ff7300;padding: 4px 0px 7px;margin: 0px 0px 7px;">Order China 24h Order Tool</h5>'+
		'<div class="taobaovn-info-inner" style="padding: 0px 10px 10px;overflow: hidden;"><img src="https://orderchina24h.vn/logo.png" alt="Order China 24h" style="width: 160px;float: left;margin: 8px 15px 0px 0px;"><ul style="float: left;padding: 0px;"><li style="font-size: 14px;font-family: Arial;color: rgb(0, 0, 0);margin-left: 0px !important;list-style: none !important;">Giá bán: <b class="taobaovn-rate taobaovn-color-price" style="color: rgb(211, 26, 26);font-weight: bold;font-size: 18px;">'+(price_result)+'</b> VNĐ '+
		'<span class="taobaovn-cny" style="font-weight: bold;color: #357ae8;font-size: 16px;"></span></li><li style="font-size: 14px;font-family: Arial;color: rgb(0, 0, 0);margin-left: 0px !important;list-style: none !important;">Tỷ giá: <span class="taobaovn-color-price" style="color: rgb(211, 26, 26);font-weight: bold;">'+rateMoney().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'</span> VNĐ/tệ</li>'+
		'<li style="font-size: 14px;font-family: Arial;color: rgb(0, 0, 0);margin-left: 0px !important;list-style: none !important;"></li></ul><div class="taobaovn-info-warning" style="float: left;font-size: 13px;color: rgb(0, 0, 0);text-align: left;width: 100%;font-family: Arial;margin: 10px 0px 0px;padding: 5px 0px;">(!!) Vui lòng chọn đầy đủ thông tin sản phẩm ở bên dưới để xem giá chuẩn.</div></div>' +
		'<div class="taobaovn_note" style="float: left;width: 100%;text-align: center;display: table-cell;border-top: 3px solid #ff7300;padding: 10px 0px;outline: none;">'+com_text+'<p class="google_translate" style="text-align: center;font-size: 15px !important;color: rgb(0, 0, 0) !important;margin: 10px 0px 0px !important;padding: 0px 0px 0px 20px !important;">Lưu ý : <strong style="color: rgb(218, 37, 28) !important;"> không dùng Google Translate</strong> khi thêm sản phẩm!</p></div>'+
		'<div class="xbTipBlock tahoma"><div style="width:100%;float:right;margin-bottom: 5px;margin-top: 2px;">' +
		'<div style="float:left;" id="block_button"></div></div></div></dl>'+
	 '';
	
    return s;
}
function render2()
{
	var s ='<div class="addon-wrapper _addon-wrapper">'+
		'<a href="javascript:void(0)" id="hideAddon" class=""hideAddon style="float: right">&nbsp;&nbsp;&nbsp;</a>'+
		'<div class="addon-alert _alert-shop-credible "><span> </span><span class="close-warning-ao _close-warning-ao"></span></p></div>'+ 
		'<div class="addon-content" id="vna-ddon-content" style="display:inline-block">'+
        '<div class="addon-block">'+
            '<ul class="addon-list-inline">'+
                '<li class="cf pdtop-0" style="border-right: 0px;">'+
                    '<!-- <a id="_add-to-favorite" href="javascript:void(0)" class="save-product-ao"> Lưu sản phẩm </a>-->'+
                    '<select id="soflow-color" class="soflow-color mrtop-15">'+
                        '<option value="vi">Tiếng Việt</option>'+
                        '<option value="en">Tiếng Anh</option>'+
                    '</select>'+
                    '<input class="mrtop-15" type="text" value="" id="vndich" name="vndich" placeholder="Tìm Kiếm"/>'+
                    '<button class="mrtop-15" type="button" id="vnshoptimkiem">Tìm Kiếm</button>'+
                '</li>'+
                '<li class="cf pdtop-0" style="padding-left: 0px">'+
                    '<label style="display: none">'+
                        '<input type="checkbox" name="is_translate" class="_is_translate" checked="checked"> <span></span>'+
                        'Dịch tự động'+
                    '</label>'+
                    '<select id="orderby" class="soflow-color mrtop-15" style="margin-right: 5px;display:none">'+
                        '<option value="1">Bán chạy</option>'+
                        '<option value="0">Mặc Định</option>'+
                    '</select>'+
                    '<select id="diadiem-taobao" class="soflow-color mrtop-15" style="width: 120px;display: none">'+
                        '<option value="0">Chọn địa điểm</option>'+
                        '<option value="广州">Quảng Châu</option>'+
                        '<option value="广东">Quảng Đông</option>'+
						'<option value="湖南">Hồ Nam</option>'+
						'<option value="贵州">Quý Châu</option>'+
						'<option value="广西">Quảng Tây</option>'+
						'<option value="江浙沪">Giang Tô , Chiết Giang</option>'+
                        '<option value="北京">Bắc Kinh</option>'+
                        '<option value="上海">Thượng Hải</option>'+
                        '<option value="天津">Thiên Tân</option>'+
                        '<option value="重庆">Trùng Khánh</option>'+
                        '<option value="浙江">Chiết Giang</option>'+
                        '<option value="江苏">tỉnh Giang Tô</option>'+
                        '<option value="山东">Sơn Đông</option>'+
                        '<option value="河北">Hà Bắc</option>'+
                        '<option value="河南">Hà Nam</option>'+
                        '<option value="福建">tỉnh Phúc Kiến</option>'+
                        '<option value="辽宁">tỉnh Liêu Ninh</option>'+
                        '<option value="安徽">An Huy</option>'+
                        '<option value="山西">Sơn Tây</option>'+
                        '<option value="海南">Hải Nam</option>'+
                        '<option value="内蒙古">nội Mông</option>'+
                        '<option value="吉林">Cát Lâm</option>'+
                        '<option value="黑龙江">Hắc Long Giang</option>'+
                        '<option value="湖北">Hồ Bắc</option>'+
                        '<option value="江西">tỉnh Giang Tây</option>'+
                        '<option value="宁夏">Ninh Hạ</option>'+
                        '<option value="新疆">Tân Cương</option>'+
                        '<option value="青海">Thanh Hải</option>'+
                        '<option value="陕西">tỉnh Sơn Tây</option>'+
                        '<option value="甘肃">tỉnh Cam Túc</option>'+
                        '<option value="四川">tỉnh Tứ Xuyên</option>'+
                        '<option value="云南">Vân Nam</option>'+
                        '<option value="西藏">Tây Tạng</option>'+
                        '<option value="香港">Hồng Kông</option>'+
                        '<option value="澳门">Macao</option>'+
                        '<option value="台湾">Đài Loan</option>'+
                    '</select>'+
                    '<select id="diadiem-1688" class="soflow-color mrtop-15" style="width: 120px;display: none">'+
                        '<option value="0">Chọn địa điểm</option>'+
                        '<option value="广东">Quảng Đông</option>'+
						'<option value="湖南">Hồ Nam</option>'+
						'<option value="贵州">Quý Châu</option>'+
						'<option value="广西">Quảng Tây</option>'+
						'<option value="江浙沪">Giang Tô , Chiết Giang</option>'+
                        '<option value="北京">Bắc Kinh</option>'+
                        '<option value="上海">Thượng Hải</option>'+
                        '<option value="天津">Thiên Tân</option>'+
                        '<option value="重庆">Trùng Khánh</option>'+
                        '<option value="浙江">Chiết Giang</option>'+
                        '<option value="江苏">tỉnh Giang Tô</option>'+
                        '<option value="山东">Sơn Đông</option>'+
                        '<option value="河北">Hà Bắc</option>'+
                        '<option value="河南">Hà Nam</option>'+
                        '<option value="福建">tỉnh Phúc Kiến</option>'+
                        '<option value="辽宁">tỉnh Liêu Ninh</option>'+
                        '<option value="安徽">An Huy</option>'+
                        '<option value="山西">Sơn Tây</option>'+
                        '<option value="海南">Hải Nam</option>'+
                        '<option value="内蒙古">nội Mông</option>'+
                        '<option value="吉林">Cát Lâm</option>'+
                        '<option value="黑龙江">Hắc Long Giang</option>'+
                        '<option value="湖北">Hồ Bắc</option>'+
                        '<option value="江西">tỉnh Giang Tây</option>'+
                        '<option value="宁夏">Ninh Hạ</option>'+
                        '<option value="新疆">Tân Cương</option>'+
                        '<option value="青海">Thanh Hải</option>'+
                        '<option value="陕西">tỉnh Sơn Tây</option>'+
                        '<option value="甘肃">tỉnh Cam Túc</option>'+
                        '<option value="四川">tỉnh Tứ Xuyên</option>'+
                        '<option value="云南">Vân Nam</option>'+
                        '<option value="西藏">Tây Tạng</option>'+
                        '<option value="香港">Hồng Kông</option>'+
                        '<option value="澳门">Macao</option>'+
                        '<option value="台湾">Đài Loan</option>'+
                    '</select>'+
					'<select id="xuong-taobao" class="soflow-color mrtop-15" style="width: 125px;display: none">'+
                        '<option value="0">Tìm Sản Phẩm</option>'+
                        '<option value="1">Tìm Xưởng</option>'+
                    '</select>'+
                    '<select id="xuong-1688" class="soflow-color mrtop-15" style="width: 125px;display: none">'+
                        '<option value="0">Tìm Sản Phẩm </option>'+
                        '<option value="1">Tìm Xưởng</option>'+
                    '</select>'+
                '</li>'+
                '<li>'+
                    '<ul>'+
                        '<li class="pos-relative" style="padding: 15px 20px 0;border-left:1px solid #000000;border-right:1px solid #000000">'+
                            '<a style="color: #ffffff"  href="https://orderchina24h.vn/manage/order/lists" target="_blank" class="save-product-ao">Quản lý đơn hàng </a><br />	'+
							 '<a style="color: #ffffff"  href="https://orderchina24h.vn/login" target="_blank" class="save-product-ao">Đăng nhập </a>'+
                        '</li>'+
                    '</ul>'+
                '</li>'+
                '<li>'+
                    '<a href="javascript:void(0)" id="id_nhaphang_add_cart" class="btn btn-danger _addToCart btn-seudo">'+
                        '<i class="pull-left icon-ht"></i> ĐẶT VÀO GIỎ HÀNG'+
                    '</a>'+
                    '<a href="https://orderchina24h.vn/manage/cart" target="_blank" id="btnvnshop" class="addon-link _gioHang">'+
                        '<i class="addon-icon-shopping-cart"></i>'+
                        'Vào giỏ hàng'+
                    '</a>'+
                    '</a>'+
                '</li>'+
            '</ul>'+
        '</div>'+
    '</div>'+
'</div>';
	s +='<style>.addon-wrapper{font: 12px/1.5 tahoma,arial,"Hiragino Sans GB","\5b8b\4f53",sans-serif;display: inline-block;text-align:center;width: 100%;float: left;font-family: Helvetica, Arial, sans-serif;position: fixed;bottom: 0;left: 0;z-index: 99999999999999999999999999999999999999;background: #242935;color: #fff;opacity: 0.9;}'+
		'.addon-wrapper .addon-content .addon-block {display: inline-block;width: 100%;float: left;background: transparent url(https://hangquangchau24h.vn/images/add_on/bg-addon.png) repeat top left;min-height: 67px;text-align: center;}'+
		'.addon-wrapper .addon-content .addon-block > ul {display: inline-block;margin: 0;padding: 0;list-style: none;}'+
		'.addon-wrapper .addon-content .addon-block > ul > li {display: inline-block;float: left;height: 62px;}'+
		'.addon-wrapper .addon-alert {width: 100%;background-color: #f6f2dd;opacity: 0.95;color: #a94442;padding: 15px;text-align: center;font-size: 13px;float: left;display: none;box-shadow: none;}'+
		'.cf:before, .cf:after {content: "";display: table;}'+
		'select.soflow-color {-webkit-border-radius: 2px;-webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);-webkit-padding-start: 2px;-webkit-user-select: none;-webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);border:none;background-position: 97% center;background-repeat: no-repeat;border-right: 1px solid #AAA;color: #555;font-size: inherit;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 95px;float: left;height: 39px;line-height: 27px;float: left;padding-left: 5px;line-height: 38px;}'+
		'.mrtop-15 {margin-top: 15px;}'+
		'.addon-wrapper ul.addon-list-inline > li a.btn {font-family: Arial, Helvetica, sans-serif !important;margin-top: 13px; font-weight: bold;line-height: 40px;border-radius: 3px;-webkit-box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);-moz-box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);}'+
		'.addon-wrapper .addon-content {display: inline-block; width: 100%;color: #fff;font-size: 13px;float: left;}'+
		'.cf input {width: 150px;height: 19px;padding: 10px 5px;float: left;font: bold 15px "lucida sans", "trebuchet MS", "Tahoma";border: 0;background: #eee;}'+
		'.cf button {overflow: visible;position: relative;float: right;border: 0;padding: 0;cursor: pointer;height: 39px;width: 110px;font: bold 15px/40px "lucida sans", "trebuchet MS", "Tahoma";color: #fff;text-transform: uppercase;background: #ff7300;border-radius: 0 3px 3px 0;text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);}'+
		'.cf button:before {content: "";position: absolute;border-width: 8px 8px 8px 0;border-style: solid solid solid none;border-color: transparent #ff7300 transparent;top: 12px;left: -6px;}'+
		'.addon-wrapper ul.addon-list-inline > li:nth-of-type(2) {padding-left: 20px;padding-right: 20px;text-align: center;}'+
		'.addon-wrapper ul.addon-list-inline > li:nth-of-type(4) {padding-left: 20px;padding-right: 20px;}'+
		'.addon-wrapper ul.addon-list-inline > li:nth-of-type(5) {border-right: 0;padding-left: 20px;}'+
		'.addon-wrapper ul.addon-list-inline > li a.btn:hover {text-decoration: none;color:#fff}'+
		'.addon-wrapper ul.addon-list-inline > li:nth-of-type(4) > ul {display: inline-block;width: 100%;height: 67px;}'+
		'.addon-wrapper ul.addon-list-inline > li a.btn-seudo {max-width: 200px;margin-right: 0;color:#fff!important}'+
		'.addon-wrapper ul.addon-list-inline > li a.btn {font-family: Arial, Helvetica, sans-serif !important;margin-top: 13px;font-weight: bold;line-height: 40px;border-radius: 3px;-webkit-box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);-moz-box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);}'+
		'.addon-wrapper .btn-danger, .addon-wrapper .btn-primary {height: 40px;padding: 0 15px;font-size: 14px;color: #fff;background-color: #ff7300;float: left;cursor: pointer;border: 1px solid #df4146;-webkit-box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);-moz-box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);box-shadow: 3px 4px 5px -1px rgba(0, 0, 0, 0.75);}'+
		'.addon-wrapper .addon-content .addon-link {color: #fff!important;float: left;line-height: 67px;padding-left: 25px;}'+
		'.addon-wrapper .addon-icon-shopping-cart {width: 15px;height: 14px;display: inline-block;background: transparent url(https://hangquangchau24h.vn/images/add_on/addon-icon-shopping-cart.png) no-repeat top left;position: relative;top: 3px;}'+
		'a:hover {text-decoration: underline;}'+
		'#hideAddon {position: absolute;right: 0px;width: 32px;height: 32px;background: url(https://orderchina24h.vn/hide.png) no-repeat center right;	z-index: 999999999999;bottom: 0;}'+
		'.cf {padding-right: 15px;} .cf {zoom: 1;}</style>';
	return s;
}

function checkUrl() {
    var url = window.location.href;
    if (url.match('taobao.com')) {
        $("#diadiem-taobao").show();
        $("#xuong-taobao").show();
    }
    if (url.match(/tmall.com|tmall.hk|yao.95095.com/)) {


    }
    if (url.match(/1688.com|alibaba/)) {
        // return "1688"
        $("#diadiem-1688").show();
        $("#xuong-1688").show();
    }
}
function getDataSearch(){
    try{

        var url = window.location.href;
        if (url.match('taobao.com')){
            LocalStorageSearch.get(function(result){
               // console.log(result);
                if(result!=null){
                    $("#soflow-color").val(result.lang);
                    $("#vndich").val(result.keyWorkXanh);
                    $("#orderby").val(result.orderBy);
                    $("#diadiem-taobao").val(result.diaDiem);
                    $("#xuong-taobao").val(result.LinkXuong);
                }
            });

        }
        else if(url.match(/1688.com|alibaba/)){
            LocalStorageSearch.get(function(result){
                if(result!=null){
                    $("#soflow-color").val(result.lang);
                    $("#vndich").val(result.keyWorkXanh);
                    $("#orderby").val(result.orderBy);
                    $("#diadiem-1688").val(result.diaDiem);
                    $("#xuong-1688").val(result.LinkXuong);
                }

            });
        }
    }
    catch(err){

    }
}
function load_template() {
    var con = document.querySelectorAll("._addon-template")[0];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            con.innerHTML = xhr.responseText;

            checkUrl();
            getDataSearch();
            document.querySelectorAll("._is_translate")[0].disabled = false;
            setTimeout(function() {
                document.querySelectorAll("._is_translate")[0].checked = translate_value_bg == 1;
                document.querySelectorAll("._is_translate")[0].disabled = false
            }, 2000)
        }
    };
    xhr.open("GET", chrome.extension.getURL("index.html"), true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
}
function getObjectByClass(classname, elems) {
    var i;
    elems = elems != null ? elems : document.getElementsByTagName('*');
    for (i in elems)
    {
        if((" "+elems[i].className+" ").indexOf(" " + classname + " ") > -1)
        {
            return elems[i];
        }
    }
    return false;
}

//create function, it expects 2 values.
function insertAfter(newElement,targetElement) {
    //target is what you want it to go after. Look for this elements parent.
    var parent = targetElement.parentNode;
            
    //if the parents lastchild is the targetElement...
    if(parent.lastchild == targetElement) {
        //add the newElement after the target element.
        parent.appendChild(newElement);
    } else {
        // else the target has siblings, insert the new element between the target and it's next sibling.
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function rateMoney()
{
	var ratemn = httpGet(urlrate);
    return ratemn;
}        
function getHostname() {
    var url = window.location.href;  
	//console.log(url);
	if(url.indexOf('https') !=-1)
	{
		url = url.replace("https://", "");   
	}else{
		url = url.replace("http://", "");   
    }
    var urlExplode = url.split("/");  
    var serverName = urlExplode[0];
        
    return serverName;
}
function isTransaled() {
     var html;
     html = document.getElementsByTagName('html')[0];
     
     if (!html) {
        return;
     }
     var textClass = html.className;
     
     if(textClass.indexOf('translated-ltr')!=-1)
     {
        return true; 
     }
     return false;
}

function addVersion(url) {
    return url+'&version=05102018'; // nam-thang-ngay
}
//ham lam chon so den2 tp
function roundNumber(num, dec) {
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
}
function is_valid_url(url)
{
    return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}
//ham xu lý gia trong truong hop nguoi dung su dung chuc nang tu dong dich cua Chrome
function processPrice(price) {
    if(price==null || price==0) return 0;
    if(price.indexOf(',')>0)
    {
        var p=String(price).replace('.','');
        p=p.replace(',','.');
        return parseFloat(p);
    }
    else
        return parseFloat(price);
}
$(document).on('click', '#hideAddon', function () {
	//console.log("---");
	showHideAddon();
});
function showHideAddon() {
    var el = document.getElementById("vna-ddon-content");
    //el.style.visibility = (el.style.display == "inline-block"||el.style.display == "inline-block") ? "none" : "none";//han hien thang dialoge
    //document.body.style.overflow=(document.body.style.overflow=="")?"hidden":"";//khoa scroll window
    if(el.style.display===""||el.style.display==="inline-block"){
        localStorage.setItem("hideAddon", "1");
        el.style.display="none";
    }else{
        el.style.display="inline-block";
        localStorage.setItem("hideAddon", "0");
    }
}
function showBeginAddon(){
    try{
        var showAddon=localStorage.getItem("hideAddon");
        console.log(showAddon);
        if(showAddon===1||showAddon==="1"){
            var el = document.getElementById("vna-ddon-content");
            document.getElementById("vna-ddon-content").style.display="none";
            console.log('ggg');
        }
    }
    catch(ex){console.log(ex);}
}

// START TAOBAO -------------------------------------------------------------------
function taobao(cart_url,url_save) {
    
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
       
       if(document.getElementsByClassName('tb-shop-name').length>0){ 
            var hd=document.getElementsByClassName('tb-shop-name')[0];
            
            hd.className+=' notranslate';
       }
       
       if(document.getElementsByClassName('base-info').length>0){ 
            var hd=document.getElementsByClassName('base-info')[0];
            
            hd.className+=' notranslate';
       }
       if(document.getElementsByClassName('slogo').length>0){ 
            var hd=document.getElementsByClassName('slogo')[0];
            
            hd.className+=' notranslate';
            
            if(document.getElementsByClassName('slogo-shopname').length>0){ 
                var hd=document.getElementsByClassName('slogo-shopname')[0];
                
                hd.className+=' notranslate';
           }
       } 
              
       if(document.getElementById('J_StrPrice')!=null)    
       {
          var hd=document.getElementById('J_StrPrice');
            
          hd.className+=' notranslate'; 
       }
    }
    // Cross-browser implementation of element.addEventListener
    function addListener(element, type, expression, bubbling) {
        bubbling = bubbling || false;
        if(window.addEventListener) { // Standard
            element.addEventListener(type, expression, bubbling);
            return true;
        } else if(window.attachEvent) { // IE
            element.attachEvent('on' + type, expression);
            return true;
        } else return false;
    }
    
    function additionPrice()
    {
        return 0;
    }
     
    addGlobalStyle('.tahoma { font-family: tahoma,arial,verdana ! important; }');
 
    function getPriceTaobao1()
    {
        var tm_p_e=document.getElementsByClassName('tm-price');
        var tb_p_e=document.getElementsByClassName('tb-detail-price');
        if(tm_p_e.length> 0 || tb_p_e.length> 0)
        {
            if(tm_p_e.length>0)
                var p_e=tm_p_e[0];
            else
                var p_e=tb_p_e[0];
                
            //kiểm tra nếu có giảm giá thì lấy giảm giá
            if( p_e.className.indexOf('tb-unvalid')!=-1)
            {
                p_e = document.getElementsByClassName('tb-rmb-num')[0];
            }
            if(document.getElementById('J_SpanLimitProm')!=null && document.getElementById('J_SpanLimitProm')!='undefined')
            {
                p_e=document.getElementById('J_SpanLimitProm');
            }
            if(document.getElementById('J_PromoPrice')!=null && document.getElementById('J_PromoPrice')!='undefined')
            {
                try {
                    var p_p=document.getElementById('J_PromoPrice');
                    var tb=document.getElementsByClassName("tb-promo-price-type")[0].textContent;
                    if(p_p.getElementsByTagName("strong").length>0 && p_p.getElementsByTagName("strong")[0].textContent!='' && tb.indexOf('VIP')==-1)
                        p_e=p_p.getElementsByTagName("strong")[0];
                } catch(e) { }
            }
            var webprice_text = p_e.textContent.match(/[0-9]*[\.,]?[0-9]+/g);
            var price_taobao=processPrice(webprice_text);
            return price_taobao;
        } else {
			var tm_p_e=document.getElementsByClassName('tm-price');
			if(tm_p_e !=null)
				return document.getElementsByClassName("tm-price")[0].textContent;
			else
			   return 0;
        }
    }

    function encodeStrToNumber(str) {
        return str.replace(/./g, function(c) {
            return ('00' + c.charCodeAt(0)).slice(-3);
        });
    }
    
    function getPriceTaobao() {
		var tm_p_e=document.getElementsByClassName('tm-price');
        var tb_p_e=document.getElementsByClassName('tb-detail-price');

        if(tm_p_e.length> 0 || tb_p_e.length> 0)
        {
			var normal_price = document.getElementById('J_StrPrice');
			if(normal_price == null) {
				normal_price = document.getElementById('J_StrPriceModBox');
				if(normal_price == null) {
					normal_price = document.getElementById('J_StrPriceModBox');
				}
			}
			if(normal_price == null) {
				normal_price = document.getElementById('J_priceStd');
			}
			
			var promotion_price = document.getElementById('J_PromoPrice');
			if(promotion_price == null) {
				promotion_price = document.getElementById('J_SPrice');
			}

			var prite_type = document.getElementsByClassName('price-type');  
			//if(window.location.href.indexOf('world.') > -1)
				//console.log(prite_type);
			if(prite_type.length > 0){
				if(prite_type[0].textContent.indexOf('VIP') > -1){
						promotion_price=null;
				}
			}
			

			var price = 0;
			if(promotion_price != null) { // khuyen mai
				if(window.location.href.indexOf('tmall') > -1) {
					if(promotion_price.getElementsByClassName('tm-price').length > 0) {
						price = promotion_price.getElementsByClassName('tm-price')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);
					}
					if(document.getElementById('J_PromoBox') !=null && document.getElementById('J_PromoBox').textContent !=''){
                        price=document.getElementById('J_PromoBox').textContent.match(/[0-9]*[\.,]?[0-9]+/g);
                    }
				} else {
					if(promotion_price.getElementsByClassName('tb-rmb-num').length > 0) {
						try{
							price = promotion_price.getElementsByClassName('tb-rmb-num')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);
						}catch(e){
							price = promotion_price.getElementsByClassName('tm-price')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);
						}
					} else {


						// gia vip
						/*if(promotion_price.getElementsByClassName('tb-vip-notice').length > 0) {
							price = promotion_price.getElementsByClassName('tb-vip-notice')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);
						}*/
						// 12/12/2013
						if(promotion_price.className = 'tb-rmb-num') {
							if(promotion_price.getElementsByClassName('tb-promo-price-type').length > 0) {
								if((price == 0 || price == null) & document.getElementsByClassName('tb-rmb-num').length > 0) {
									price = document.getElementsByClassName('tb-rmb-num')[0].innerHTML.match(/[0-9]*[\.,]?[0-9]+/g);
								}
							} else {
								price = promotion_price.innerHTML.match(/[0-9]*[\.,]?[0-9]+/g);    
							}
						}
						
						
					}
				}
				price = processPrice(price);

				if(price == 0) { // Try if price not found
					price = normal_price.getElementsByClassName('tm-price');
					if(price.length > 0) { 
						price = price[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);
					} else {
						price = document.getElementById('J_StrPriceModBox');
						if(price == null)
						{
							price = document.getElementById('J_priceStd');    
						}
						if(price != 0) {
							price = price.getElementsByClassName('tb-rmb-num');
							if(price.length > 0) {
								price = price[0].innerHTML.match(/[0-9]*[\.,]?[0-9]+/g);
							}
						}
					}
					
					price = processPrice(price);
				}
			} else {
				if(window.location.href.indexOf('tmall') > -1) {
					
					if(normal_price == null) {
						normal_price = document.getElementById('J_StrPrice');
					}
					if(normal_price == null) {
						normal_price = document.getElementById('J_StrPriceModBox');
					}
					if(normal_price == null) {
						normal_price = document.getElementById('J_priceStd');
					
					}
					try{
						price = normal_price.getElementsByClassName('tm-price')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);

					}catch(e){
						if(normal_price !=null){
							price = normal_price.getElementsByClassName('tb-rmb-num')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);
						}

					}
				} else { // taobao
					try{
						price = normal_price.getElementsByClassName('tb-rmb-num')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);

					}catch(e){
						price = normal_price.getElementsByClassName('tm-price')[0].textContent.match(/[0-9]*[\.,]?[0-9]+/g);

					}
				}
				price = processPrice(price);
			}
		}  else if (document.querySelectorAll("div[class^='Price--originPrice'], div[class*='Price--originPrice']").length > 0) {
            price = document.querySelectorAll("div[class^='Price--originPrice'], div[class*='Price--originPrice']")[0].innerText.match(/[0-9]*[\.,]?[0-9]+/g);
            price = processPrice(price);
        } else {
            price = 0;
            //New UI 2023
            var allSpan = document.querySelectorAll('span');
            if (allSpan.length > 0) {
                for (var i = 0; i < allSpan.length; i++) {
                    if (allSpan[i].getAttribute('class') != null && allSpan[i].getAttribute('class') != '' && allSpan[i].getAttribute('class') != undefined) {
                        if (allSpan[i].getAttribute('class')
                            .includes('Price--priceText')) {
                            if (allSpan[i].parentNode.getAttribute('class').includes('Price--originPrice')) {
                                price = allSpan[i].textContent;
                                price = processPrice(price);
                            }
                        }
                    }
                }
            }
        }
        if (price === 0) {
            try {
                price = document.querySelectorAll('[class*="priceText-"]')[0].innerText;
                price = processPrice(price);
            } catch (e) {}
        }
        return price;
    }

    function getOuterId(data_value)
    {
      var outer_id=null;

      var scripts = document.getElementsByTagName('script');
      if(scripts.length > 0) {

        for(var script = 0; script < scripts.length; script++) {

          if(scripts[script].innerHTML.match(/Hub\.config\.set/) || scripts[script].innerHTML.match(/TShop\.Setup/)) {
            var skuMap = scripts[script].innerHTML.replace(/\s/g, '').substr(scripts[script].innerHTML.replace(/\s/g, '').indexOf(data_value));

            if(skuMap.indexOf('skuId') > -1) {
              if(window.location.href.indexOf('taobao.com')>-1)
                outer_id= skuMap.substr(skuMap.indexOf('skuId') + 8, 15).match(/[0-9]+/);
              else
                outer_id= skuMap.substr(skuMap.indexOf('skuId') + 7, 15).match(/[0-9]+/);
            }
          }
        }
      }
      if(outer_id==null)
      {
        outer_id=data_value.replace(/\:/g, '').replace(/\;/g, '').replace(/\ /g, '');
      }

      return outer_id;
    }
    function getTitle()
    {
      var tb='';
      if(document.getElementsByClassName("tb-detail-hd").length>0)
      {
        var h=document.getElementsByClassName("tb-detail-hd")[0];
        if(h.getElementsByTagName('h3').length>0)
          tb=h.getElementsByTagName('h3')[0].textContent;
      }

      if(document.getElementsByClassName("tb-detail-hd").length>0)
      {
        var h=document.getElementsByClassName("tb-detail-hd")[0];
        if(h.getElementsByTagName('h1').length>0)
          tb=h.getElementsByTagName('h1')[0].textContent;
      }

      if(document.getElementsByClassName("tb-item-info").length>0)
      {
        var h=document.getElementsByClassName("tb-item-info")[0];
        if(h.getElementsByTagName('h3').length>0)
          tb=h.getElementsByTagName('h3')[0].textContent;
      }

      if(document.getElementsByClassName("item-title").length>0)
      {
        var h=document.getElementsByClassName("item-title")[0];
        if(h.getElementsByTagName('h3').length>0)
          tb=h.getElementsByTagName('h3')[0].textContent;
      }


      if(document.getElementsByClassName("tb-item-title").length>0)
      {
        var h=document.getElementsByClassName("tb-item-title")[0];
        if(h.getElementsByTagName('h3').length>0)
          tb=h.getElementsByTagName('h3')[0].textContent;
      }
      if(document.getElementsByClassName("tb-tit").length>0)
        tb=document.getElementsByClassName("tb-tit")[0].textContent;

      if (tb === '' && document.querySelectorAll('[class*="ItemTitle-"]')[1] != null) {
          tb = document.querySelectorAll('[class*="ItemTitle-"]')[1].getElementsByTagName('h1')[0].innerText;
      }

      //new tmall ui 2022
      if(tb == ""){
        var h1Element = document.querySelectorAll('h1');
        if(h1Element.length > 0){
          for(i = 0; i < h1Element.length; i++){
            if(h1Element[i].getAttribute('class') != null && h1Element[i].getAttribute('class') != ''
                && h1Element[i].getAttribute('class').includes('ItemHeader--mainTitle')){
              tb = h1Element[i].textContent;
            }
          }
        }
      }
      return encodeURIComponent(tb);
    }
    function getImgLink()
    {
      try {
        var img_src=document.getElementById('J_ImgBooth').getAttribute("src");
      }catch (e) {
        var img_src=null;
      }

      if(img_src==null)
      {
        try{
          img_src=document.getElementById('J_ZoomHook').getAttribute("src");
        }catch(e){
          var img_src=null;
        }
      }
      if(img_src==null)
      {
        try{
          img_src=document.getElementById('J_ThumbView').getAttribute("src");
        }catch(e){
          var img_src=null;
        }
      }
      //new 2024
      if(img_src==null){
        if(document.querySelectorAll("div[class^='SkuContent--isSelected']>img, div[class*='SkuContent--isSelected'] > img").length > 0){
          let _img_src = document.querySelectorAll("div[class^='SkuContent--isSelected']>img, div[class*='SkuContent--isSelected'] > img")[0].src;
          if(_img_src.indexOf('.webp') > 0){
            let vt=_img_src.indexOf('.jpg');
            if(vt!=-1){
              img_src=_img_src.substring(0,vt+4);

            }else{
              let vt=_img_src.indexOf('.png');
              if(vt!=-1){
                img_src=_img_src.substring(0,vt+4);
              }else{
                img_src=_img_src;
              }
            }
          }else{
            img_src=_img_src;
          }
        }
      }
      //new ui tmall 2022
      if(img_src==null)
      {
        try{
          var imgElement = document.querySelectorAll('img');
          if(imgElement.length > 0){
            for(i = 0; i < imgElement.length; i++){

              if(imgElement[i].getAttribute('class') != null && imgElement[i].getAttribute('class') != ""
                  && (imgElement[i].getAttribute('class').includes('PicGallery--mainPic') || imgElement[i].getAttribute('class').includes('PicGallery--thumbnail'))){
                let _img_src = imgElement[i].getAttribute("src");
                if(_img_src.indexOf('.webp') > 0){
                  let vt=_img_src.indexOf('.jpg');
                  if(vt!=-1){
                    img_src=_img_src.substring(0,vt+4);

                    break;
                  }else{
                    let vt=_img_src.indexOf('.png');
                    if(vt!=-1){
                      img_src=_img_src.substring(0,vt+4);
                      break;
                    }else{
                      img_src=_img_src;

                      break;
                    }
                  }
                }else{
                  img_src=_img_src;

                  break;
                }

              }
            }
          }
        }catch(e){
          var img_src=null;

        }
      }
      if (img_src == null || img_src === '') {
          try {
              img_src = document.querySelectorAll('[class*="mainPic-"]')[0].src;
          } catch (e) {}
      }

      return encodeURIComponent(img_src);
    }
    function getSellerName()
    {
      var seller_name = '';
      if(window.location.href.indexOf('tmall') > 0) { // Tmall
        if(document.getElementsByClassName('slogo').length > 0) { // Page detail of shop
          if (document.getElementsByClassName('slogo-shopname').length > 0) {
            seller_name = document.getElementsByClassName('slogo-shopname')[0].innerHTML;
          } else if(document.getElementsByClassName('flagship-icon').length > 0) {
            seller_name = document.getElementsByClassName('slogo')[0].getElementsByTagName('span')[1].getAttribute('data-tnick');
          } else {
            seller_name = document.getElementsByClassName('slogo')[0].getElementsByTagName('span')[0].getAttribute('data-tnick');
          }
        } else { // Page detail of general
          if(document.getElementsByClassName('bts-extend').length > 0 ) {
            try {
              seller_name = document.getElementsByClassName('bts-extend')[0].getElementsByTagName('li')[1].getElementsByTagName('span')[0].getAttribute('data-tnick');
            } catch(e) {
              //console.log('Seller name not found!');
              //console.log(e);
            }
          }
          else
          {
            if(document.getElementsByName('seller_nickname').length > 0){
              seller_name = document.getElementsByName('seller_nickname')[0].value;
            }
          }
        }
        //Tmall new UI 2022
        if(document.getElementById("aliww-click-trigger") != null && document.getElementById("aliww-click-trigger") != undefined){
          seller_name = document.getElementById("aliww-click-trigger").getAttribute('data-nick');
        }
        //seller_name = encodeURIComponent(seller_name);
      } else {
        var shop_info = document.getElementsByClassName('tb-shop-name');

        seller_name = (shop_info.length > 0 ? shop_info[0].getElementsByTagName('a')[0].textContent : '');

        if(seller_name == '') {
          // Find base info
          if( document.getElementsByClassName('base-info').length > 0) {
            for(var i =0; i < document.getElementsByClassName('base-info').length; i++) {
              if(document.getElementsByClassName('base-info')[i].getElementsByClassName('seller').length > 0) {
                if(document.getElementsByClassName('base-info')[i].getElementsByClassName('seller')[0].getElementsByClassName('J_WangWang').length > 0) {
                  seller_name = document.getElementsByClassName('base-info')[i].getElementsByClassName('seller')[0].getElementsByClassName('J_WangWang')[0].getAttribute('data-nick');
                  break;
                }
                if(document.getElementsByClassName('base-info')[i].getElementsByClassName('seller')[0].getElementsByClassName('ww-light').length > 0) {
                  seller_name = document.getElementsByClassName('base-info')[i].getElementsByClassName('seller')[0].getElementsByClassName('ww-light')[0].getAttribute('data-nick');
                  break;
                }
              }
            }
          }
          //if(document.getElementById('J_TEnterShop') != null) seller_name = document.getElementById('J_TEnterShop').innerHTML;
        }
      }
      return encodeURIComponent(seller_name);
    }
    function getCookie(c_name)
    {
        var i,x,y,ARRcookies=document.cookie.split(";");

        for (i=0;i<ARRcookies.length;i++)
        {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name)
            {
                return unescape(y);
            }
        }
    }
    //ham lay comment
    function getComment()
    {
        if(document.getElementById("txtBz")!=null)
            return encodeURIComponent(document.getElementById("txtBz").value);
        else return '';
    }
    function getLink()
    {
      //debugger;
      var src = domainurlstatic+'ajax-loader.gif';
      var href = cart_url;

      var element =document.getElementsByName("item_id");

      if(element.length>0)
      {
        element=element[0];
        var item_id=element.value;
      }else var item_id=0;

      if(item_id==0 || item_id==null || item_id=='')
      {
        var element =document.getElementsByName("item_id_num");

        if(element.length>0)
        {
          element=element[0];
          var item_id=element.value;
        }else var item_id=0;
      }
      if(item_id==0 || item_id==null || item_id=='')
      {
        if(window.location.href.indexOf('tmall.hk') <= 0)
        {
          var path = window.location.pathname;
          id = /item\/(.+)\.htm/i.exec(path);
          //console.log(id);
          if(id && id.length > 0)
          {
            item_id = id[1];
          }
          else
          {
            item_id = 0;
          }

        }

      }
      if(item_id==0 || item_id==null || item_id=='')
      {
        var element =document.getElementById("LineZing");

        if(element!=null)
        {
          var item_id=element.getAttribute('itemid');
        }else var item_id=0;
      }
      if(item_id==0 || item_id==null || item_id=='')
      {
        var element =document.getElementById("aliww-click-trigger");

        if(element!=null)
        {
          var item_id=element.getAttribute('data-item');
        }else var item_id=0;
      }
      var rate=rateMoney();
      var price_taobao=getPriceTaobao();
      var price_result = Math.ceil(price_taobao * rate);
      var item_price=price_taobao;

      var seller_id = '';
      var shop_url='';
      var url_params='';

      if(document.getElementById('J_listBuyerOnView')!=null)
      {
        element = document.getElementById('J_listBuyerOnView');
        url_params   = element.getAttribute('detail:params');
      }

      if(document.getElementById('J_SellerInfo')!=null)
      {
        element = document.getElementById('J_SellerInfo');
        url_params   = element.getAttribute('data-url');
      }

      if(url_params=='' || url_params==null)
      {
        if(element.hasAttribute("data-api"))
          url_params   = element.getAttribute('data-api');
      }
      if(url_params.indexOf('seller_num_id')>0)
        seller_id = urlParams.getUrlVars(url_params)['seller_num_id'];

      if(url_params.indexOf('user_num_id')>0)
        seller_id = urlParams.getUrlVars(url_params)['user_num_id'];
      if(seller_id=="" && document.getElementById("J_Pine") != null)
      {
        element=document.getElementById("J_Pine");
        seller_id= element.getAttribute('data-sellerid');
      }
      //get shopurl
      if(shop_url==""){
        if(document.querySelectorAll("a[class^='ShopHeader--board'], a[class*='ShopHeader--board']").length > 0){
          let shoplink=   document.querySelectorAll("a[class^='ShopHeader--board'], a[class*='ShopHeader--board']")[0];
          if(shoplink){
            let arrshopurl= document.querySelectorAll("a[class^='ShopHeader--board'], a[class*='ShopHeader--board']")[0].getAttribute('href').split('/');
            if(arrshopurl && arrshopurl.length >=3){
              shop_url = encodeStrToNumber(arrshopurl[2].replace('.taobao.com',''));
            }else{
              shop_url = encodeStrToNumber(shoplink);
            }
          }

        }
      }
      if(shop_url==""){
        if(document.querySelectorAll("a[class^='ShopHeaderNew--detailWrap'], a[class*='ShopHeaderNew--detailWrap'],a[class^='ShopHeader--detailWrap'], a[class*='ShopHeader--detailWrap']").length > 0){
          let shoplink=   document.querySelectorAll("a[class^='ShopHeaderNew--detailWrap'], a[class*='ShopHeaderNew--detailWrap'],a[class^='ShopHeader--detailWrap'], a[class*='ShopHeader--detailWrap']")[0];
          if(shoplink){
            let arrseller= document.querySelectorAll("a[class^='ShopHeaderNew--detailWrap'], a[class*='ShopHeaderNew--detailWrap'],a[class^='ShopHeader--detailWrap'], a[class*='ShopHeader--detailWrap']")[0].getAttribute('href').split('/');
            if(arrseller && arrseller.length >=3){
              shop_url = encodeStrToNumber(arrseller[2].replace('.taobao.com',''));
            }else{
              shop_url = encodeStrToNumber(shoplink);
            }
          }
        }
      }
      //get seller id tmall 2022
      if(seller_id == ""){
        var scripts = document.getElementsByTagName('script');
        if(scripts.length > 0) {
          for(var script = 0; script < scripts.length; script++) {
            var contentScript = scripts[script].innerHTML;
            if(contentScript != ""){
              var str = contentScript;
              var res = str.match(/at_alis=2%5f(.*?)&/g);

              if(res != null && res != ''){
                var mySubString = res[0].substring(res[0].indexOf("at_alis=2%5f") + 12, res[0].lastIndexOf("&"));

                if(mySubString > 0){
                  seller_id = mySubString;
                }
              }

            }
          }
        }
      }
      //
      if(seller_id == ""){
        var allSpan = document.querySelectorAll("img[class^='PicGallery--thumbnailPic'], img[class*='PicGallery--thumbnailPic'], img[class*='ShopHeader--pic'], img[class^='ShopHeader--pic']");
        if(allSpan.length > 0){
          for(var i = 0; i < allSpan.length; i++){
            if(allSpan[i].getAttribute('class') != null && allSpan[i].getAttribute('class') != '' && allSpan[i].getAttribute('class') != undefined){
              if (allSpan[i].getAttribute('class').includes('PicGallery--thumbnailPic') || allSpan[i].getAttribute('class').includes('ShopHeader--pic'))
              {
                let src=allSpan[i].getAttribute('src');
                if(src){
                  src=src.split('/')
                  if(src && src[5] && parseInt(src[5]) > 100000){
                    seller_id = src[5];
                  }
                }

              }
            }
          }
        }
        if(seller_id==""){
          if(document.querySelector("div[class^='ShopHeaderNew--leftWrap']>img,div[class*='ShopHeaderNew--leftWrap']>img")){
            let src=document.querySelector("div[class^='ShopHeaderNew--leftWrap']>img,div[class*='ShopHeaderNew--leftWrap']>img").getAttribute('src');
            if(src){
              src=src.split('/')
              if(src && src[5] && parseInt(src[5]) > 100000){
                seller_id = src[5];
              }
            }
          }
        }
        if(seller_id==""){
          if(document.querySelectorAll("a[class^='ShopHeader--board'], a[class*='ShopHeader--board']").length > 0){
            let shoplink=   document.querySelectorAll("a[class^='ShopHeader--board'], a[class*='ShopHeader--board']")[0];
            if(shoplink){
              let arrseller= document.querySelectorAll("a[class^='ShopHeader--board'], a[class*='ShopHeader--board']")[0].getAttribute('href').split('/');
              if(arrseller && arrseller.length >=3){
                seller_id = encodeStrToNumber(arrseller[2].replace('.taobao.com',''));
              }else{
                seller_id = encodeStrToNumber(shoplink);
              }
            }
            console.log('seller_id:'+seller_id);
          }
        }
        // thay doi class 05- 2024
        if(seller_id==""){
          if(document.querySelectorAll("a[class^='ShopHeaderNew--detailWrap'], a[class*='ShopHeaderNew--detailWrap'],a[class^='ShopHeader--detailWrap'], a[class*='ShopHeader--detailWrap']").length > 0){
            let shoplink=   document.querySelectorAll("a[class^='ShopHeaderNew--detailWrap'], a[class*='ShopHeaderNew--detailWrap'],a[class^='ShopHeader--detailWrap'], a[class*='ShopHeader--detailWrap']")[0];
            if(shoplink){
              let arrseller= document.querySelectorAll("a[class^='ShopHeaderNew--detailWrap'], a[class*='ShopHeaderNew--detailWrap'],a[class^='ShopHeader--detailWrap'], a[class*='ShopHeader--detailWrap']")[0].getAttribute('href').split('/');
              if(arrseller && arrseller.length >=3){
                seller_id = encodeStrToNumber(arrseller[2].replace('.taobao.com',''));
              }else{
                seller_id = encodeStrToNumber(shoplink);
              }
            }
            console.log('seller_id:'+seller_id);
          }
        }


        // var host = window.location.host;

        // if(host != "detail.tmall.com" && host != "detail.tmall.hk"){
        //      seller_id = encodeStrToNumber(window.location.host);
        // }

      }
      //
      if(seller_id == ""){
        var host = window.location.host;

        if(host != "detail.tmall.com" && host != "detail.tmall.hk"){
          seller_id = encodeStrToNumber(window.location.host);
        }

      }
      var quantity='';
      element = document.getElementById("J_IptAmount");
      if(element) {
        quantity = element.value;
      }else if(document.getElementsByClassName('mui-amount-input').length>0) //tmall
      {
        element=document.getElementsByClassName('mui-amount-input');
        element=element[0];
        quantity = element.value;
      }else if(document.querySelector('.countValueForPC') != null && document.querySelector('.countValueForPC') != undefined){ //tmall new UI 2022
        quantity = document.querySelector('.countValueForPC').value;
      }else if(document.querySelectorAll("input[class^='Operation--countValue'], input[class*='Operation--countValue']").length > 0){
        quantity = document.querySelectorAll("input[class^='Operation--countValue'], input[class*='Operation--countValue']")[0].value;
      }
      else quantity = '';

      if (quantity === 0 || quantity === ''){
          try {
              quantity = document.querySelectorAll('[class*="countValue-"]')[0].value;
          } catch (e) {}
      }
      //lay title
      var title=getTitle();
      //lay img
      var img=getImgLink();

      //lay seller name
      var seller_name=getSellerName();

      var element =document.getElementsByName("allow_quantity");
      if(element.length>0)
      {
        element=element[0];
        var amount=element.value;
      }else var amount=0;
      var p_color_id=1627207;
      var p_size_id=20509;

      var selected_props=document.getElementsByClassName('tb-selected');
      var p_params='';

      var max_p=0;
      var color_size='';
      var data_value='';
      //console.log(selected_props);
      if(selected_props.length>0)
      {
        for(var i=0;i<selected_props.length;i++)
        {
          var ele=selected_props[i];

          if(window.location.href.indexOf('tw.') > 0) { // Tw.taobao
            var prop_str=ele.getAttribute("data-pv");
          }else if(window.location.href.indexOf('world.') > 0) { // Tw.taobao
            var prop_str=ele.getAttribute("data-pv");
            if(prop_str == null)
            {
              var prop_str=ele.getAttribute("data-value");
            }

          }else{
            var prop_str=ele.getAttribute("data-value");
          }
          //console.log("taobao props",prop_str);
          if(prop_str != null && prop_str.length>0)
          {
            max_p++;
            //p_params+='&p'+max_p+'='+prop_str;
            if(data_value=='')
              data_value+=prop_str;
            else data_value+=';'+prop_str;

            if(window.location.href.indexOf('taiwan.') > 0) { // Tw.taobao
              p_e=ele.getElementsByTagName('a');
            }else{
              p_e=ele.getElementsByTagName('span');
            }
            p_e=p_e[p_e.length-1];
            //console.log(p_e);
            if(typeof p_e ==='undefined')
            {
              p_e=ele.getElementsByTagName('i');
              prop_str=p_e.textContent;
            }
            else{
              prop_str=p_e.textContent;
              if(color_size==='')
                color_size+=encodeURIComponent(prop_str);
              else
                color_size+=';'+encodeURIComponent(prop_str);
            }

          }else continue;
        }
      } else {
          selected_props = document.querySelectorAll('[class*="valueItem-"][class*="isSelected"]');
          if(selected_props.length>0)
          {
              selected_props.forEach( $ => {
                  if(color_size==='')
                      color_size+=encodeURIComponent($.innerText);
                  else
                      color_size+=';'+encodeURIComponent($.innerText);
              })
          }
      }
      //new UI tmall 2022
      if(document.querySelectorAll('.selectSkuText').length > 0){
        var listSelected = document.querySelectorAll('.selectSkuText');
        for(var i = 0; i < listSelected.length; i++){
          var strAttr = listSelected[i].textContent;
          if(strAttr != ''){
            if(color_size=='')
              color_size+=encodeURIComponent(strAttr);
            else
              color_size+=';'+encodeURIComponent(strAttr);
          }
        }

        if(data_value == ''){
          var queryString = window.location.search;
          var urlParam = new URLSearchParams(queryString);
          skuIdUrl = urlParam.get('skuId');
          if(skuIdUrl != '' && skuIdUrl != null){
            data_value = skuIdUrl;
          }
        }
      }
      if(color_size==''){
        if(document.querySelectorAll("div[class^='SkuContent--isSelected'], div[class*='SkuContent--isSelected']").length > 0){
          let allsku =document.querySelectorAll("div[class^='SkuContent--isSelected'], div[class*='SkuContent--isSelected']");
          for(var i = 0; i < allsku.length; i++){
            let strAttr = allsku[i].textContent;
            if(strAttr != ''){
              if(color_size=='')
                color_size+=encodeURIComponent(strAttr);
              else
                color_size+=';'+encodeURIComponent(strAttr);
            }
          }
        }
        if(data_value == ''){
          var queryString = window.location.search;
          var urlParam = new URLSearchParams(queryString);
          skuIdUrl = urlParam.get('skuId');
          if(skuIdUrl != '' && skuIdUrl != null){
            data_value = skuIdUrl;
          }
        }
      }
      if (color_size === '') {
          try {
              color_size = document.querySelectorAll('[class*="valueItem-"][class*="isSelected"]')[0];
          } catch (e) {}
      }
      //console.log(data_value);
      var outer_id=getOuterId(item_id+data_value);

      var params='type=Taobao';
      if(parseInt(item_id)>0)
        params+='&item_id='+item_id;

      params+='&item_link='+encodeURIComponent(window.location.href);

      if(outer_id !=null)
        params+='&outer_id='+outer_id;

      if(item_price>0)
        params+='&item_price='+item_price;
      if(title.length>0)
        params+='&item_title='+title;

      if(img.length>0)
        params+='&item_image='+img;

      if(seller_name.length>0) {
          params+='&seller_name='+seller_name;
      } else {
          seller_name = document.querySelectorAll('[class*="shopNameLevelWrapper"]')[0].getElementsByTagName("span")[0].innerText;
          params+='&seller_name='+seller_name;
      }

      if(parseInt(seller_id)>0)
        params+='&seller_id='+seller_id;

      if(parseInt(quantity)>0)
        params+='&item_quantity='+quantity;
      if(shop_url.length > 0){
        params+='&shop_url='+shop_url;
      }
      //lay comment
      var comment= getComment();

      /*  if(parseInt(amount)>0)
            params+='&amount='+amount;*/
      if(color_size.length>0)
        params+='&color_size_name='+color_size;
      //lay comment
      if(comment.length>0)
        params+='&comment='+comment;
      if(data_value.length>0)
        params+='&data_value='+data_value;
      var ct=    getCookie('t');
      /*if(ct.length>0)
          params+='&ct='+ct;*/
      if(max_p>0)
      {
        params+=p_params;
      }

      // return href+params;
      return addVersion(params);
    }
    function linkHover()
    {
        var href=getLink();
        document.getElementById("id_nhaphang_add_cart").setAttribute('href',href);
    }
    function xmlhttpPost(strURL) {
        // var xmlHttpReq = false;
        // var self = this;
        // // Mozilla/Safari
        // if (window.XMLHttpRequest) {
        //     self.xmlHttpReq = new XMLHttpRequest();
        // }
        // // IE
        // else if (window.ActiveXObject) {
        //     self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // beforeHtml= document.getElementById("block_button").innerHTML;
        // document.getElementById("block_button").innerHTML='<img style="margin-top:12px;" src="'+domainurl+'ajax-loader.gif" alt="" />';
        // //self.xmlHttpReq.open('POST', strURL, true);
        // self.xmlHttpReq.open('GET', strURL+getLink(), true);
        // self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // self.xmlHttpReq.withCredentials = "true";
        //
        // self.xmlHttpReq.onreadystatechange = function() {
        //     if (self.xmlHttpReq.readyState == 4) {
        //         if(strURL.indexOf('item_collect')!=-1)
        //         {
        //             //luu san pham
        //             if(self.xmlHttpReq.responseText=='OK')
        //                 alert('Lưu sản phẩm thành công!');
        //             else alert(self.xmlHttpReq.responseText);
        //         }else
        //             updatepage(self.xmlHttpReq.responseText);
        //
        //         document.getElementById("block_button").innerHTML=beforeHtml;
        //         addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
        //     //    addListener(document.getElementById("id_nhaphang_save_item"), 'click', linkSave);
        //     }
        // }
        // console.log("run this function");
        // //alert(getLink());
        // self.xmlHttpReq.send(getLink());
        strURL += getLink();
        chrome.runtime.sendMessage({
            action: "request_server",
            method: 'GET',
            url: strURL,
            callback: 'after_request_server'
        });
    }

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            switch (request.action)
            {
                case "after_request_server":
                    updatepage(request.response);
                    document.getElementById("block_button").innerHTML=beforeHtml;
                    addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
                    break;
                default :
                    break;
            }
        }
    );

    function getquerystring() {
        var form     = document.forms['f1'];
        var word = form.word.value;
        qstr = 'w=' + escape(word);  // NOTE: no '?' before querystring
        return qstr;
    }

    function updatepage(str_arr){
		try {
            
			//var str_arr = JSON.parse(str);
			// if(str_arr.response == true)
			// {
				var htmlObject = document.createElement('div');
				htmlObject.innerHTML = str_arr.message;
				document.body.appendChild(htmlObject);
			// }
		}catch(e){
			var htmlObject = document.createElement('div');
			htmlObject.innerHTML = str_arr.message;
			document.body.appendChild(htmlObject);
		}
    }
    
    function closeBox()
    {
        //get box
        var box=document.getElementById("box-confirm-nh-site");
        var p=box.parentNode;
        p.removeChild(box);
    }
    function linkClick()
    {
      var classHtml = document.getElementsByTagName('html')[0].getAttribute('class');
      if(classHtml != null && classHtml != undefined && classHtml.includes("translated-ltr")){
        alert('Vui lòng tắt Google Dịch!');
        return false;
      }
      var href=getLink();

      //tong thuoc tinh
      if(window.location.href.indexOf('world.taobao') > 0) {
        var props=document.getElementsByClassName('tb-cleafix');
      }else{
        /*var props=document.getElementsByClassName('J_TSaleProp');*/
        if(document.getElementsByClassName('J_TSaleProp').length > 0){
          var props=document.getElementsByClassName('J_TSaleProp');
        }

        if(document.getElementsByClassName('skuCate').length > 0){
          var props=document.getElementsByClassName('skuCate');
        }
      }
      var full=true;
      if(props != undefined && props.length>0)
      {
        //kiem tra so thuoc tinh da chon cua sp

        var count_selected=0;
        for(var i=0;i<props.length;i++)
        {
          var selected_props=props[i].getElementsByClassName('tb-selected');
          //new tmall ui 2022
          if(document.getElementsByClassName('skuCate').length > 0){
            var selected_props=props[i].getElementsByClassName('selectSkuText');
          }
          if(selected_props!=null && selected_props!='undefined')
            count_selected+=selected_props.length;
        }
        if(count_selected<props.length)
        {
          full=false;
        }

      }
      if(full==true)
        document.getElementById("id_nhaphang_add_cart").setAttribute('target',"_blank");
      else
      {
        document.getElementById("id_nhaphang_add_cart").setAttribute('target',"");
        alert("Bạn chưa chọn đầy đủ thuộc tính sản phẩm!");
        document.getElementById("id_nhaphang_add_cart").setAttribute('href','javascript:void(0);');
        return ;
      }

      //document.getElementById("id_nhaphang_add_cart").setAttribute('href',href);
      document.getElementById("id_nhaphang_add_cart").setAttribute('href','javascript:void(0)');
      document.getElementById("id_nhaphang_add_cart").setAttribute('target',"");

      xmlhttpPost(cart_url);
    }
    function linkSave() {
        var href=getLink();
            
        //tong thuoc tinh
        var props=document.getElementsByClassName('J_TSaleProp');
        var full=true;
        if(props.length>0)
        {
            //kiem tra so thuoc tinh da chon cua sp
                
            var count_selected=0;
            for(var i=0;i<props.length;i++)
            {
                var selected_props=props[i].getElementsByClassName('tb-selected');    
                if(selected_props!=null && selected_props!='undefined')
                    count_selected+=selected_props.length;
            }
            if(count_selected<props.length)
            {
                full=false;
            }
            
        }
        if(full==true)
            document.getElementById("id_nhaphang_save_item").setAttribute('target',"_blank");
        else 
        {
            document.getElementById("id_nhaphang_save_item").setAttribute('target',"");
            alert("Bạn chưa chọn đầy đủ thuộc tính sản phẩm!");
            document.getElementById("id_nhaphang_save_item").setAttribute('href','javascript:void(0);');
            return ;
        }
        
        document.getElementById("id_nhaphang_save_item").setAttribute('href','javascript:void(0)');
        document.getElementById("id_nhaphang_save_item").setAttribute('target',"");
            
        xmlhttpPost(url_save);
    }
    $(document).ready(function () {
      $(document).on('click','.skuWrapper',function(){
        if(typeof $('.taobaovn-color-price').html()==='undefined'){
          var price_taobao = getPriceTaobao();
          //console.log(price_taobao);
          var rate    = rateMoney();
          var price_result = Math.ceil(price_taobao * rate);
          price_result = String(price_result).replace(/^\d+(?=.|$)/, function (int) {
            return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ".");
          });
          if(price_result!=0){
            var s = renderbox(price_result);
            var div = document.createElement('div');
            div.innerHTML = s;
            if(document.getElementsByClassName('skuWrapper')[0].parentNode.nextSibling){
              document.getElementsByClassName('skuWrapper')[0].parentNode.nextSibling.innerHTML= s;
            }else if(document.querySelectorAll("div[class^='PurchasePanel--contentWrap'], div[class*='PurchasePanel--contentWrap']").length > 0){
              document.querySelectorAll("div[class^='PurchasePanel--contentWrap'], div[class*='PurchasePanel--contentWrap']")[0].nextSibling.className='';
              document.querySelectorAll("div[class^='PurchasePanel--contentWrap'], div[class*='PurchasePanel--contentWrap']")[0].nextSibling.innerHTML= s;
            }
            addListener(document.getElementById("id_nhaphang_add_cart"), 'mouseover', linkHover);
            addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
          }
        }
      })
    });
    this.htmlOnLoad=function ()
    {
        window.onload = function() {
            
            setTimeout(function(){
                var src     = domainurl+'nhaphang_order.gif';
                var rate    = rateMoney();

                var price_taobao = getPriceTaobao();
                if(price_taobao > 0)
                {
                    var price_result = Math.ceil(price_taobao * rate);
                    price_result = String(price_result).replace(/^\d+(?=.|$)/, function (int) {
                        return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ".");
                    });
                }
                else
                {
                    var price_result = 0;
                }

                var elem = document.createElement("div");
                elem.className = '_addon-template';
                document.body.insertBefore(elem, document.body.childNodes[0]);
                document.querySelectorAll("._addon-template")[0].style.display = 'block';
                var con = document.querySelectorAll("._addon-template")[0];
                var s = renderbox(price_result);
                var p = render2();
            /* //html vung hien thi gia
                var price_text='<div style="font-weight:bold;color: red;width: 195px; font-size:25px;line-height:40px;" id="tinphat-price">'+(price_result)+' VN\u0110</div> ';
                //html vung mota
                var com_text='<div><span style="width:60px;">L\u1EDDi nh\u1EAFn</span><textarea cols="60" id="txtBz" style="height: 45px; width: 98%; resize: none; color:black; border: 1px solid #0fb4e7;font-size: 12px;" name="txtBz"></textarea></div>';
                //html vung luu lai
                var home_link='<a href="http://hangquangchau.com" title="Đặt hàng quảng châu" target="_blank" style="float:right; font-size:14px; font-weight:normal; text-decoration:none; padding:5px 0px 0 0; color:#FFFFFF !important;">hangquangchau.com</a>';   
                var save_text='<div style="float:right;margin-right:5px">'+home_link+'</div>';

                //html toan bo addon
                var s = '<dl class="clearfix" id="gia-tinphat" style="background: -webkit-gradient(linear, left top, left bottom, from(#b7deed), to(#21b4e2));background: -moz-linear-gradient(center top , #b7deed, #21b4e2) repeat scroll 0 0 transparent; border: 2px solid #0fb4e7; width: 300px; padding: 5px; color:#FFFFFF; height: 150px;font-size:15px;">' +price_text+com_text+
                '<div class="xbTipBlock tahoma"><div style="width:100%;float:right">' +
                ' <div style="float:left;" id="block_button"><a id="id_nhaphang_add_cart" href="javascript:;"><input type="button" style="background: none repeat scroll 0 0 #ED9017; border: 1px solid #0fb4e7; color: #FFFFFF; padding: 2px 10px;cursor: pointer;font-weight:bold;" value="Mua s\u1EA3n ph\u1EA9m"></a></div>'+save_text+'</div></div></dl>'+
                '';
                */

                console.log(price_result);

                if(price_result != 0)
                {
                    // document.getElementsByClassName('tb-btn-add')[0].parentNode.innerHTML= s;
                    
                    var div = document.createElement('div');
                    div.innerHTML = s;
                    con.innerHTML = p;
                    try{
                        document.getElementsByClassName('tb-btn-add')[0].parentNode.innerHTML= s;
                    }catch(e){
                    }
                    try {
                        document.querySelectorAll('[class*="LeftButtonList-"]')[0].innerHTML = s;
                    } catch (e) {}
                    try{
                        con.innerHTML = p;
                        document.getElementsByClassName('item-buy-btn')[0].parentNode.innerHTML= s; 
                    }catch(e){
                    }

                    try{
                        con.innerHTML = p;
                        document.getElementsByClassName('Actions--leftButtons--1M3KkF7')[0].parentNode.innerHTML= s;
                    }catch(e){
                    }

                    addListener(document.getElementById("id_nhaphang_add_cart"), 'mouseover', linkHover);
                    addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
                }
                else
                {
                    con.innerHTML = p;
                    try{
                        con.innerHTML = p;
                    }catch(e){
                    }
                    try{
                        con.innerHTML = p;   
                    }catch(e){
                    }
                    try {
                        document.querySelectorAll('[class*="LeftButtonList-"]')[0].innerHTML = s;
                    } catch (e) {}
                }
                checkUrl();
                getDataSearch();
                //document.getElementById('J_StrPriceModBox').parentNode.insertBefore( div.firstChild , document.getElementById('J_StrPriceModBox') );
                //add cac su kien
            }, 1000);
           
        }
    }
}

// END TAOBAO --------------------------------------------------------------------------

// ---------- START ALIBABA -----------------------------------------
function alibaba(cart_url,url_save) {
    
    function addGlobalNoTranslate() {
               
       if(document.getElementById('mod-detail-price-sku')!=null)    
       {
          var hd=document.getElementById('mod-detail-price-sku');
            
          hd.className+=' notranslate'; 
       }        
       if(document.getElementById('mod-detail-price')!=null)    
       {
          var hd=document.getElementById('mod-detail-price');
            
          hd.className+=' notranslate'; 
       }
    }
    addGlobalNoTranslate();
        
    function additionPrice() {
        return 0;
    }
   
    //hàm lấy danh sách màu sắc
    function getColor() {
        return -1;
    }
    //hàm lấy danh sách kích cỡ
    function getSize() {
        return -1;
    }
    //ham lay comment
    function getComment() {
        if(document.getElementById("txtBz")!=null)
            return encodeURIComponent(document.getElementById("txtBz").value);
        else return '';
    }
    //ham tao ra danh sach box chon mau sac, kich thuoc
    function getBuyItemsBox()
    {
       var atts_html='';
       var attArea = document.getElementsByClassName("mod-detail-sku"); 
       if(attArea.length>0) { // có thuộc tính dc tim thay
            var atts_class = attArea[0].getElementsByClassName('d-sku');
            if(atts_class.length>0)
            {
               // lap qua danh sach cac thuoc tinh va gia tri cua thuoc tinh 
               for(var i=0;i<atts_class.length;i++)   
               {
                  var element= atts_class[i];
                  //lay ten thuoc tinh
                  var prop_name = element.getElementsByTagName("dt");
                  prop_name = prop_name[0].textContent;
                 
                  atts_html+=' '+prop_name;
                 
                  //lay danh sach gia tri thuoc tinh
                  var prop_vals= element.getElementsByTagName("li");
                  if(prop_vals.length>0)
                  {
                      var drop='<select style="width:80px" class="select_props" name="'+prop_name+'" rel="'+prop_name+'">';
                      drop+='<option value="-">--Chọn--</option>';
                      for(var j=0;j<prop_vals.length;j++)   
                      {
                         var li_val=prop_vals[j];  
                         //kiem tra the a trong li
                         if(li_val.getElementsByTagName("a").length>0) 
                         {
                            //lay data-value cua the a
                            li_val=li_val.getElementsByTagName("a");
                            li_val=li_val[0];
                            li_val=li_val.getAttribute('data-value');
                         }else
                            li_val=li_val.textContent;
                         
                         drop+='<option value="'+li_val+'">'+li_val+'</option>';
                      }
                      drop+='</select>';
                  }
                  atts_html+=drop;
               } 
            }
       }
       //gen ra box mau sac,kich thuoc,text nhap so luong
       atts_html+=' Số lượng:<input style="width:36px;height:16px" name="J_AmountInput" id="J_AmountInput" value=""/>';
       
       return atts_html;
    }
    
    function getBuyItemsNewBox()
    {
       var atts_html='';
       var attArea = document.getElementsByClassName("mod-detail-purchasing-multiple");  
       if(attArea.length>0)
       {
           if(attArea[0].getElementsByClassName("leading").length>0)
           {
                var colors=  attArea[0].getElementsByClassName("leading")[0].getElementsByTagName("a");
                if(colors.length>0)
                {
                   var drop='<select style="width:80px" class="select_props" name="Màu sắc" rel="Màu sắc">';
                   drop+='<option value="-">--Chọn màu sắc--</option>'; 
                   for(i=0;i<colors.length;i++)
                   {
                       var color= colors[i].getAttribute('title');
                       drop+='<option value="'+color+'">'+color+'</option>';  
                   }
                                  
                   drop+='</select>';   
                   atts_html+=drop;  
                }
           } else
           {
               var drop='<select style="width:80px" class="select_props" name="Màu sắc" rel="Màu sắc">';
               drop+='<option value="-">--Chọn màu sắc--</option>'; 
             
               drop+='<option value="Như hình">Như hình</option>';  
             
                              
               drop+='</select>';   
               atts_html+=drop; 
            }
            var sizes=  attArea[0].getElementsByClassName("name");
            
            if(sizes.length>0)
            {
               var drop='<select style="width:80px" class="select_props" name="Kích thước" rel="Kích thước">';
               drop+='<option value="-">--Chọn kích thước--</option>'; 
               for(i=1;i<sizes.length;i++)
               {
                   var size= sizes[i].innerText;
                   drop+='<option value="'+size+'">'+size+'</option>';  
               }
                              
               drop+='</select>';   
               atts_html+=drop;  
            }
       }
       //gen ra box mau sac,kich thuoc,text nhap so luong
       atts_html+=' Số lượng:<input style="width:36px;height:16px" name="J_AmountInput" id="J_AmountInput" value=""/>';
       
       return atts_html;
    }
    
    //ham lay thong tin color_size_name theo form moi
    function getNewColorSizeName() {

        var props = document.getElementsByClassName("select_props");
        if(props == null) { // không có thuộc tính
            return encodeURIComponent('');
        }
        color_size_name='';
        if(props.length>0)
        {
            for(var i=0;i<props.length;i++)
            {
                var element = props[i];
                
                if(color_size_name=='')
                    color_size_name+=element.options[element.selectedIndex].value;
                else color_size_name+=';'+element.options[element.selectedIndex].value;
            }
        }
        return encodeURIComponent(color_size_name);

    }
    
    //ham lay thong tin color_size_name
    function getColorSizeName() {
        try{
            var buyArea = document.getElementsByClassName("d-sku-content");
            if(buyArea == null) { // không có thuộc tính
                return '';
            }
            var attr_Area = buyArea[0].getElementsByClassName('d-sku-box');
            var attr_list = attr_Area[0].getElementsByClassName('d-sku');
                
            var color_size_name='';
            var selects = attr_Area[0].getElementsByClassName('d-selected');
            if(selects.length>0)
            {
                for(var i=0;i<selects.length;i++)
                {
                    var element = selects[i];
                    if(color_size_name=='')
                        color_size_name+=element.getAttribute('data-value');
                    else color_size_name+=';'+element.getAttribute('data-value');
                }
            }
            return encodeURIComponent(color_size_name);
        } catch (e) {
            return '';
        }
    }
	//Chỗ này cần thêm
	// var abc = this;
	// abc.first = !0;
	// for (var t, n = document.querySelectorAll("script"), r = {}, s = {}, newData = {}, l = 0; l < n.length; l++)
	// 	if (n[l].text.includes("var iDetailData")) {
	// 		let abc = n[l].text;
	// 		window.eval(abc), (r = iDetailData);
	// 		break;
	// 	}
	// for (l = 0; l < n.length; l++)
	// 	if (n[l].text.includes("iDetailConfig")) {
	// 		let abc = n[l].text;
	// 		window.eval(abc), (s = iDetailConfig);
	// 		break;
	// 	}
	// for (l = 0; l < n.length; l++)
	// 	if (n[l].text.includes("window.__INIT_DATA")) {
	// 		let abc = n[l].text;
	// 		window.eval(abc), (newData = window.__INIT_DATA);
	// 		break;
	// 	}
	// Chỗ này cần sửa
    function getSellerId() {
        var seller_id = '';
        try{
            var element =document.getElementsByClassName("mod-detail-gallery");
            if(element.length >0)
            {
                var attr_object=element[0].getAttribute('data-mod-config');
                 attr_object=JSON.parse(attr_object.replace("\t", "").replace("\n", ""));
                 seller_id=attr_object['userId'];

            }else{
				var element =document.getElementsByClassName("mod-detail-version2018-gallery");
				if(element.length >0)
				{
					var attr_object=(element[0].getAttribute('data-mod-config').replaceAll('\n','')).replaceAll('\t','');
					 attr_object=JSON.parse(attr_object);
					 seller_id=attr_object['userId'];

				}
			}
        }catch(e)
        {
            seller_id = '';
        }
		if(seller_id=='')
		{
            if(typeof iDetailConfig==='object'){
                if(typeof iDetailConfig.userId !=='undefined'){
                    seller_id=iDetailConfig.userId;
                }
                
            }
			//seller_id = newData.globalData.offerBaseInfo.sellerUserId.toString();
		}
        if(seller_id==''){

            try{
                var element = document.getElementsByName("sellerId");
                if(element.length > 0)
                {
                    element     = element[0];
                    seller_id   = element.value;
                } else {
                    // New 24/4/2013
                    element = document.getElementsByClassName('contact-div');
                    if(element.length > 0) {
                        seller_id = element[0].getElementsByTagName('a')[0].innerHTML;
                    }else{
                        element = document.getElementById('dsr-userid');
                        seller_id = element.value;
                    }
                }
            } catch(e) {
				var element='';
                element=element.replace("http://","");
				element=element.replace(".cn.alibaba.com","");
				element=element.replace(".cn.1688.com","");

				var seller_id=element;

                var element =document.getElementsByClassName("top-nav-bar");
                if(element.length>0)
                {
                    element=element[0];
                    element=element.getElementsByTagName('a');
                    element=element[0];
                    element=element.getAttribute('href');

                    element=element.replace("http://","");
                    element=element.replace(".cn.alibaba.com","");
                    element=element.replace(".cn.1688.com","");

                    var seller_id=element;
                }
            }
        }
		console.log(seller_id);
        return encodeURIComponent(seller_id);
    }
    function getSellerName()
    {
         var seller_name = '';
            try{
                var element = document.getElementsByName("sellerId");
                if(element.length > 0)
                {
                    element     = element[0];
                    seller_name   = element.value;
                } else {
                    // New 24/4/2013
                    element = document.getElementsByClassName('contact-div');
                    if(element.length > 0) {
                        seller_name = element[0].getElementsByTagName('a')[0].innerHTML;
                    }else{
                        element = document.getElementById('dsr-userid');
                        seller_name = element.value;
                    }
                }
            } catch(e) {
                 var element='';
                element=element.replace("http://","");
				element=element.replace(".cn.alibaba.com","");
				element=element.replace(".cn.1688.com","");

				var seller_name=element;
                var element =document.getElementsByClassName("top-nav-bar");
                if(element.length>0)
                {
                    element=element[0];
                    element=element.getElementsByTagName('a');
                    element=element[0];
                    element=element.getAttribute('href');
					if(element != null)
					{
						element=element.replace("http://","");
						element=element.replace(".cn.alibaba.com","");
						element=element.replace(".cn.1688.com","");

						var seller_name=element;
					}
					else
					{
						seller_name = newData.globalData.offerBaseInfo.sellerLoginId.toString();
					}
                }
            }
			console.log(seller_name);

        return encodeURIComponent(seller_name);
    }
    //ham lay item_id cua san pham
    function getItemId() {
        //var elements =document.getElementsByName("offerId");
        //return document.getElementById("feedbackInfoId").value;
        var element=  window.location.href
        element=element.replace("http://",""); 
		element=element.replace("https://",""); 
        element=element.replace("detail.1688.com/offer/","");
        try{
            element=element.split('.html');          
            var item_id= element[0];   
        }catch(e)
        {
            element=element.replace(".html","");
            var item_id= element[0];    
        }      
        return item_id;
    }
    //ham lay item_title cua san pham
    function getItemTitle() {
        //var element =document.getElementById("mod-detail-hd");
        //if(element == null)
		//	element =document.getElementById("mod-detail-title");

        element=document.getElementsByTagName('h1');
		var item_title = '';
        if(element.length>0)
        {
            element=element[0];
            var item_title=element.textContent;
        }
		else
		{
			element=document.getElementsByClassName('title-text')[0];
			var item_title=element.textContent;
		}
        return encodeURIComponent(item_title);
    }
    //ham lay item_image cua san pham
	//hàm này cần thay thế bản mới
    function getItemImage() {
        var element =document.getElementsByClassName("mod-detail-gallery");
		if(element.length == 0)
		{
			element =document.getElementsByClassName("mod-detail-version2018-gallery");
		}
		if(element.length == 0)
		{
			element =document.getElementsByClassName("detail-gallery-wrapper");
		}

        
            if(element[0].getElementsByClassName("vertical-img").length > 0)
            {
                if(document.getElementsByClassName('table-sku').length > 0){
                    var tableelement=document.getElementsByClassName('table-sku')[0];
                    let tglen=tableelement.getElementsByClassName('amount-input').length;
                    for(var i=0;i<tglen;i++){
                        if(tableelement.getElementsByClassName('amount-input')[i].value > 0){
                            if(tableelement.getElementsByClassName("vertical-img")[i]){
                                let l=tableelement.getElementsByClassName("vertical-img")[i];
                                
                                    img_obj = l.getElementsByTagName("img");
                                    item_image = img_obj[0].getAttribute('src');
                                    item_image=item_image.replace('32x32','400x400')
                                
                            }
                        }
                    }
                    
                    //return result;
                }else{
                    var main_image = element[0].getElementsByClassName("vertical-img");
                    var item_image = '';
                    if(main_image != null)
                    {
                        img_obj = main_image[0].getElementsByTagName("img");
                        item_image = img_obj[0].getAttribute('src');
                    }
                }
                if(typeof (item_image) ==='undefined'){
                    var main_image = element[0].getElementsByClassName("vertical-img");
                    var item_image = '';
                    if(main_image != null)
                    {
                        img_obj = main_image[0].getElementsByTagName("img");
                        item_image = img_obj[0].getAttribute('src');
                    }
                }
                
            }
            else
            {
                var main_image = element[0].getElementsByClassName("detail-gallery-preview");
                var item_image = '';
                if(main_image != null)
                {
                    img_obj = main_image[0].getElementsByTagName("img");
                    item_image = img_obj[0].getAttribute('src');
                }
            }
        
		
        return encodeURIComponent(item_image);
    }
	// lấy ảnh sản phẩm theo từng loại hàng đặt
    function getItemImages() {
        var element =document.getElementsByClassName("table-sku");
		let result='';

        
        if(document.getElementsByClassName('table-sku').length > 0){
            var tableelement=document.getElementsByClassName('table-sku')[0];
            let tglen=tableelement.getElementsByClassName('amount-input').length;
            for(var i=0;i<tglen;i++){
                if(tableelement.getElementsByClassName('amount-input')[i].value > 0){
                    if(tableelement.getElementsByClassName("vertical-img")[i]){
                        let l=tableelement.getElementsByClassName("vertical-img")[i];
                        
                            img_obj = l.getElementsByTagName("img");
                            item_image = img_obj[0].getAttribute('src');
                            item_image=item_image.replace('32x32','400x400')
                            if(result=='')
                                result+=item_image;
                            else
                                result+='|'+item_image;
                    }
                }
            }

            //return result;
        }
        if(document.getElementsByClassName('selector-table').length > 0){
            let elementparent=document.getElementsByClassName('selector-table')[0];
            let _result='';
            if(elementparent.getElementsByTagName('input').length > 0){
                let l=elementparent.getElementsByTagName('input').length;
                let colprice=4;
                //let colsl=
                if(typeof elementparent.getElementsByTagName('tr')[0].getElementsByTagName('th')=='object'){
                    let l_th=elementparent.getElementsByTagName('tr')[0].getElementsByTagName('th').length;
                    for(var j1=0;j1<l_th;j1++){
                        if(elementparent.getElementsByTagName('tr')[0].getElementsByTagName('th')[j1].textContent==='价格(元)'){
                            colprice=j1;
                        }
                    }
                }
                for(var j=0;j<l;j++)
                    {
                        if(elementparent.getElementsByTagName('input')[j].value !='' && parseInt(elementparent.getElementsByTagName('input')[j].value) > 0){                          
                           
                            if(typeof elementparent.getElementsByTagName('tr')[j+1].getElementsByTagName('td')[0]=='object'){
                                let l =  elementparent.getElementsByTagName('tr')[j + 1].getElementsByTagName('td')[0];
                                
                                img_obj = l.getElementsByTagName("img");
                                if(img_obj.length >=1){
                                item_image = img_obj[0].getAttribute('src');
                                item_image=item_image.replace('32x32','400x400');
                                }
                            }
                            if(typeof item_image !=='undefined'){
                                if(_result=='')
                                _result+=item_image;
                                else
                                _result+='|'+item_image;
                            }
                        }
                    }
            }
            if(_result){
                result=_result;
            }
            //return result;
        }
    
        if(result==''){
            var dv = document.getElementsByClassName('list-selected');
			if(dv==null || dv.length==0) return '';
			dv = dv[0];
			var tbl_info = dv.getElementsByClassName('table-list');
			if(tbl_info==null || tbl_info.length==0) return '';
			tbl_info = tbl_info[0];

			var trs = tbl_info.getElementsByTagName('tr');
			let divimg = document.getElementsByClassName('unit-detail-spec-operator');

			if(trs.length>0)
			{
				for(var i=0;i<trs.length;i++)
				{
					var tr = trs[i];
                    var lis = tr.getElementsByTagName('li').length;
					var color_value= tr.getElementsByClassName('prop')[0].textContent;
                    for(var k=0;k<lis;k++){
                    for(var j=0;j<divimg.length;j++){
                        let divtg=divimg[j];
                        var unit_config=JSON.parse(divtg.getAttribute('data-unit-config').replaceAll('\n',''));
                        if(unit_config && unit_config.name==color_value){
                            if(divtg.getAttribute('data-imgs')){
                                let data_imgs=JSON.parse(divtg.getAttribute('data-imgs').replaceAll('\n',''));
                                if(data_imgs){
                                    if(result=='')
                                        result+=data_imgs.preview;
                                    else
                                        result+='|'+data_imgs.preview;
                                }
                            }
                        }
                    }
                    }

				}
			}
        }   
           
        
		
        return encodeURIComponent(result);
    }
    //ham lay item_link cua san pham
    function getItemLink() {
        return encodeURIComponent(window.location.href);
    }
    //hàm lấy số lượng mua
    function getQuantity() {
        if(document.getElementById("J_AmountInput")!=null)
        {
            return document.getElementById("J_AmountInput").value;
		}
        else if(document.getElementsByClassName("obj-amount").length > 0 ){
			 var element =document.getElementsByClassName("obj-amount");
			 var quantity =element[0].getElementsByClassName("amount-input");

			 if(quantity.length > 0 )
			 {
				return quantity[0].getAttribute('value');
			 }else{
				return getAllowedMinQuantity();
			 }

		}else{
			return getAllowedMinQuantity();
		}
    } 
    
	//hàm lấy giá TQ của sản phẩm dựa vào số lượng mua
    function getPrice() {

        var quantity =getQuantity();
        quantity = parseInt(quantity);
        console.log("Quantity:"+quantity);
        var price = 0;
        var tbl_price = decodeURIComponent(getPriceTable());
        //console.log("TABLEPRICE:"+getPriceTable());
        if(tbl_price=='')
		{
			// Giảm giá theo thời gian
			var itemPrice=document.getElementsByClassName("item-price");
			//console.log("giam gia",itemPrice);
			if(itemPrice.length)
			{
				var numPrice=itemPrice[0].getElementsByClassName("num");
				//console.log("giam gia 1",numPrice);
				if(numPrice.length)
				{
					return numPrice[0].textContent;
				}else{
					return 0;
				}

			}else{
				var itemPrice=document.getElementsByClassName("obj-price");
				if(itemPrice.length)
				{
					var numPrice=itemPrice[0].getElementsByClassName("price-now");
					if(numPrice.length)
					{
						return numPrice[0].textContent;
					}
				}
				return 0;
			}
		}

        tbl_price = tbl_price.split(';');
        if(tbl_price.length==0) return 0;

        for(var i=0;i<tbl_price.length;i++)
        {

           var strs = tbl_price[i].split(':');
           var amounts = strs[0];
           var prices = strs[1];
           if(amounts.indexOf('\u2265')!=-1)
           {
              var str_amounts = amounts.split('\u2265');
              if(quantity>=parseInt(str_amounts[1]))
              {
                 price = prices;
                 break;
              }
           }

           if(amounts.indexOf('-')!=-1)
           {
              var str_amounts = amounts.split('-');
              if(quantity>=parseInt(str_amounts[0]) && quantity<=parseInt(str_amounts[1]))
              {
                 price = prices;
                 break;
              }
           }
        }
        console.log("Price:"+price);
		console.log("Quantity_string:"+str_amounts);
        return processPrice(price);

    }
	//Cần sửa chỗ này
    function getAllowedMinQuantity() {

		var itemPrice=document.getElementsByClassName("mod-detail-version2018-price");
		if(itemPrice.length > 0)
		{
			var min=1;
			var span_amounts = document.getElementsByClassName("price-begin");
			if( span_amounts.length > 0)
			{
				var amount_tg = span_amounts[0].getElementsByTagName('span');
				var amount = amount_tg[0];
				if(amount.innerText.indexOf('\u2265')!=-1)
				{
					var prices=amount.innerText.split('\u2265');
					if(prices.length>0 && parseInt(prices[1])<min)
					{
						min=prices[1];
					}

				}else{
					if((amount.innerText.indexOf('-')!=-1) )
					{
						var prices=amount.innerText.split('-');
						if(parseInt(prices[0]) >  min)
						{
							min=parseInt(prices[0]);
						}
					}
				}
				return min;
			}else{
				return min;
			}
		}else if(document.getElementById("mod-detail-price")){
			var min=1;
			var div_prices = document.getElementById("mod-detail-price");
			if(div_prices==null)
			{
				//alert(min);
				return min;
			}
			var span_prices = div_prices.getElementsByTagName("span");
			if(span_prices==null)
			{
				//alert(min);
				return min;
			}

			min=1000000000;
			for (var i = 0; i<span_prices.length; i++) {
				var str=span_prices[i].textContent;

				//nếu span chứa thông tin số lượng sản phẩm mua:
				if((str.indexOf('-')!=-1) )
				{
					var prices=str.split('-');
					if(prices.length>0 && parseInt(prices[0])<min)
					{
						min=prices[0];
					}
				}
				if(str.indexOf('\u2265')!=-1)
				{
					var prices=str.split('\u2265');
					if(prices.length>0 && parseInt(prices[1])<min)
					{
						min=prices[1];
					}

				}
			}

			if(min!=1000000000)
				return min;
			else return 1;
		}
		else 
		{
			var min=1;
			var divpr = document.getElementsByClassName("od-pc-offer-price-contain");
			if(document.getElementsByClassName("od-pc-offer-price-contain").length > 0)
			{
				var spanpr = divpr[0].getElementsByClassName("unit-box");
				if(divpr[0].getElementsByClassName("unit-box").length > 0)
				{
					min = spanpr[0].textContent.match(/\d/g);
					min = min.join("");
				}
				else
				{
					var spanpr = divpr[0].getElementsByClassName("unit-text");
					min = spanpr[0].textContent.match(/\d/g);
					min = min.join("");
				}
				return min;
			}
			else
			{
				return min;
			}
			
		}
    }
	// Hàm lấy bảng giá
    function getPriceTable() {

		var itemPrice=document.getElementsByClassName("mod-detail-version2018-price");
		if(itemPrice.length > 0)
		{

			var span_amounts = document.getElementsByClassName("price-begin");
			var span_prices = document.getElementsByClassName("price-num");
			if(span_prices.length > 0)
			{
				//debugger;
				//duyệt qua các mức giá
				var price_table = str = '';
				if(span_prices.length>0)
				{
					for (var i = 0; i < span_amounts.length; i++) {

						var amount_tg = span_amounts[i].getElementsByTagName('span');
						var amount = amount_tg[0].innerText;

						var price = span_prices[i].innerText;
						/*
						//nếu span chứa thông tin số lượng sản phẩm mua:
						if(tr_prices.getElementsByClassName('split').length>0)
						{
							price = span_prices[i+1].textContent;
						}
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
						*/
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
					}

					//console.log("price_table",price_table);
					return encodeURIComponent(price_table);
				}
			}else{
				return "";
			}
		}else if(document.getElementsByClassName("mod-detail-price").length > 0){
			var div_prices = document.getElementById("mod-detail-price");
			if(div_prices == null) return '';

			var tr_amounts = div_prices.getElementsByClassName("amount");
			var tr_prices = div_prices.getElementsByClassName("price");

			if(tr_amounts.length==0 || tr_prices.length==0) return '';
			tr_amounts=tr_amounts[0];
			  var member_lv_wrapper = div_prices.getElementsByClassName('member-lv-wrapper');
			  if(member_lv_wrapper.length == 0){
				tr_prices=tr_prices[0];
			  }else{
				tr_prices=tr_prices[1];
			  }

			var span_amounts = tr_amounts.getElementsByClassName("value");
			var span_prices = tr_prices.getElementsByClassName("value");

			if(span_amounts.length==0 || span_prices.length==0) return '';

			var price_table = str = '';

			//duyệt qua các mức giá
			if(span_prices.length>0)
			{
				for (var i = 0; i < span_amounts.length; i++) {

					var amount = span_amounts[i].textContent;
					var price = span_prices[i].textContent;

					//nếu span chứa thông tin số lượng sản phẩm mua:
					if(tr_prices.getElementsByClassName('split').length>0)
					{
						price = span_prices[i+1].textContent;
					}
					if(price_table == '')
						price_table += amount + ':' + processPrice(price);
					else price_table+=';'+amount+':'+ processPrice(price);
				}
			}
			console.log("price_table",price_table);
			return encodeURIComponent(price_table);
		}
		else if(document.getElementsByClassName("od-pc-offer-price-common").length > 0)
		{
			var span_amounts = document.getElementsByClassName("unit-text");
			var span_prices = document.getElementsByClassName("price-text");
			if(span_prices.length > 0)
			{
				//debugger;
				//duyệt qua các mức giá
				var price_table = str = '';
				if(span_prices.length>0)
				{
					for (var i = 0; i < span_amounts.length; i++) {

						var amount_tg = span_amounts[i].innerText;
						var amount = amount_tg;
						amount = amount.replace("件",'').trim();
						amount = amount.replace("件起批",'').trim();
						amount = amount.replace("起批",'').trim();
						var price = span_prices[i].innerText;
						/*
						//nếu span chứa thông tin số lượng sản phẩm mua:
						if(tr_prices.getElementsByClassName('split').length>0)
						{
							price = span_prices[i+1].textContent;
						}
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
						*/
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
					}

					console.log("price_table",price_table);
					return encodeURIComponent(price_table);
				}
			}else{
				return "";
			}
		}
		else if(document.getElementsByClassName("od-pc-offer-price-bm").length > 0)
		{
			var span_amounts = document.getElementsByClassName("unit-text");
			var span_prices = document.getElementsByClassName("price-text");
			if(span_prices.length > 0)
			{
				//debugger;
				//duyệt qua các mức giá
				var price_table = str = '';
				if(span_prices.length>0)
				{
					for (var i = 0; i < span_amounts.length; i++) {

						var amount_tg = span_amounts[i].innerText;
						var amount = amount_tg;
						amount = amount.replace("件",'').trim();
						amount = amount.replace("件起批",'').trim();
						amount = amount.replace("起批",'').trim();
						var price = span_prices[i].innerText;
						/*
						//nếu span chứa thông tin số lượng sản phẩm mua:
						if(tr_prices.getElementsByClassName('split').length>0)
						{
							price = span_prices[i+1].textContent;
						}
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
						*/
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
					}

					console.log("price_table",price_table);
					return encodeURIComponent(price_table);
				}
			}else{
				return "";
			}
		}else if(document.getElementsByClassName("mod-detail-info-price").length > 0){
            let moddetail=document.getElementsByClassName("mod-detail-info-price")[0];
            let modmini=document.getElementsByClassName("mod-detail-info-minimum")[0];
            var span_amounts = modmini.getElementsByClassName("obj-amount");
			var span_prices = moddetail.getElementsByClassName("price-now");
			if(span_prices.length > 0)
			{
				//debugger;
				//duyệt qua các mức giá
				var price_table = str = '';
				if(span_prices.length>0)
				{
					for (var i = 0; i < span_amounts.length; i++) {

						var amount_tg = span_amounts[i].innerText;
						var amount = amount_tg;
						amount = amount.replace("件",'').trim();
						amount = amount.replace("件起批",'').trim();
						amount = amount.replace("起批",'').trim();
                        amount = amount.replace("条",'').trim();
						var price = span_prices[i].innerText;
						/*
						//nếu span chứa thông tin số lượng sản phẩm mua:
						if(tr_prices.getElementsByClassName('split').length>0)
						{
							price = span_prices[i+1].textContent;
						}
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
						*/
						if(price_table == '')
							price_table += amount + ':' + processPrice(price);
						else price_table+=';'+amount+':'+ processPrice(price);
					}

					console.log("price_table",price_table);
					return encodeURIComponent(price_table);
				}
			}else{
				return "";
			}
        }
    }
	//chỗ này cần sửa cả function
	function getTotalAmount()
    {
        //lay sub-total
		if(document.getElementsByClassName('od-pc-offer-price-common') == null || document.getElementsByClassName('od-pc-offer-price-common').length == 0)
		{
			var dv = document.getElementsByClassName('list-selected');
			if(dv==null || dv.length==0){
				
					var dv = document.getElementsByClassName('obj-amount');
					if(dv !=null && dv.length > 0)
					{
						var objamount=dv[0];
						if(document.getElementsByClassName('timer-txt').length > 0)
						{
							var amountObject=document.getElementsByClassName('amount-input');
							return parseInt(amountObject[0].value);
						}else{
							var amountObject=objamount.getElementsByClassName('amount-input');
							if(amountObject !=null)
							{
								console.log("amountObject",amountObject[0].value);
								return parseInt(amountObject[0].value);
							}
						}

					}else if(document.getElementsByClassName('selected-list').length > 0){
                        var amountObject = document.getElementsByClassName('selected-list')[0];
                        var amountinput = amountObject.getElementsByClassName('num')[0].textContent;
                        return parseInt(amountinput);
                    }
					else
					{
						//var result = 0;
                        var amountObject=document.getElementsByClassName('next-input-group');
                        if(amountObject !=null){
                            var amountinput=amountObject[0].getAttribute('class');
                            return parseInt($('.'+amountinput +' input').val());
                        }
					}
				
				
				
			}
			dv = dv[0];
			var tbl_info = dv.getElementsByClassName('table-list');
			if(tbl_info==null || tbl_info.length==0) return '';
			tbl_info = tbl_info[0];

			var trs = tbl_info.getElementsByTagName('tr');
			var result=0;
			if(trs.length>0)
			{
				for(var i=0;i<trs.length;i++)
				{
					var tr = trs[i];

					var color_value= tr.getElementsByClassName('prop')[0].textContent;

					var lis = tr.getElementsByTagName('li');
					if(lis!=null && lis.length>0)
					{
					   for(var j=0;j<lis.length;j++)
					   {
						  var li =  lis[j];

						  var s_element = li.getElementsByClassName('name');

						  if(s_element!=null && s_element.length>0)
							 var size_value = s_element[0].textContent;
						  else size_value='Free size';

						  var amount_value = li.getElementsByClassName('value')[0].textContent;
						  result +=parseInt(amount_value);
						  //console.log("amount_value",amount_value);


					   }
					}

				}
			}
		}
		else
		{
			var dv = document.getElementsByClassName('order-price-wrapper');
			dv = dv[0];
			if(document.getElementsByClassName('total-count').length > 0)
			{
				var tbl_info = dv.getElementsByClassName('total-count')[0].textContent;
				tbl_info = tbl_info.match(/\d/g);
				result = tbl_info.join("");
			}
			else
			{
				var result = 0;
			}
			
		}
        console.log("Total amount:"+result);
        return parseInt(result);
    }
    /*
    Ham lay mau sac,kich thuoc va so luong tuong ung
    */
	function getPriceBySku(sku,color_value = "")
	{

        var fullSku = color_value+"&gt;"+sku;

        var price="";
        try{
			var body_html = document.getElementsByTagName('body')[0].innerHTML;
			var iDetailData_html = body_html.split("var iDetailData =");
			var idetail_html2 = iDetailData_html[1].split("iDetailData.allTagIds =");
			var sku_html = idetail_html2[0].trim();
			var sku_html1 = sku_html.substring(0, sku_html.length - 1);
			var sku_json = JSON.parse(sku_html1);
			Object.entries(sku_json.sku.skuMap).forEach(function(val, idx){
				if(val[0]==fullSku)
				{
					price = val[1].price;
					Object.entries(val[1]).forEach(function(valPrice, pix){
						if(valPrice[0] == "discountPrice"){
							price = valPrice[1];
						}
					});

				}
			});
		}catch(e)
		{
			//console.log("error",e);
		}
		var newPrice = parseFloat(price);
		if(isNaN(newPrice)){
    		var tbl_sku = document.getElementsByClassName('table-sku');
			if(document.getElementsByClassName('table-sku').length > 0)
			{
				var trs = tbl_sku[0].getElementsByTagName('tr');
				if(trs.length>0)
				{
					for(var i=0;i<trs.length;i++)
					{
						var tr = trs[i];
						var data_config=JSON.parse(tr.getAttribute('data-sku-config').replaceAll('\n',''));
						if(data_config.skuName==sku)
						{
							//console.log("data-config",data_config.skuName);
							 price= tr.getElementsByClassName('price')[0].getElementsByClassName('value')[0].textContent;
							//console.log("sku-table-amount",price);
						}



					}
				}
			}
			else
			{
				var jsonsku = newData.globalData.skuModel.skuInfoMap;
				price = jsonsku[fullSku]['price'];
			}
    		
        }

		return price;
	}
	
    function getAmountColorSize()
    {
		
        //lay sub-total
        if(document.getElementsByClassName('order-price-wrapper').length > 0)
		{
			var dv = document.getElementsByClassName('order-price-wrapper');
			var tbl_info = dv[0].getElementsByClassName('selected-list-wrapper');
			if(tbl_info==null || tbl_info.length==0) return '';
			tbl_info = tbl_info[0];

			var trs = tbl_info.getElementsByClassName('selected-item-wrapper');
			var result='';
			if(trs.length>0)
			{
				for(var i=0;i<trs.length;i++)
				{
					var tr = trs[i];

					var color_value= tr.getElementsByClassName('name')[0].textContent.replace('=','');

					var lis = tr.getElementsByClassName('children-wrapper');
					if(lis!=null && lis.length>0)
					{
					   for(var j=0;j<lis.length;j++)
					   {
						  var li =  lis[j];
						  var data_name = li.getElementsByClassName('children-wrapper-name')[0].textContent.replace('=','');
						  var sku_full = color_value+"&gt;"+data_name;
						  
						  var price=getPriceBySku(data_name,color_value);
						 
						  //var price=getPriceBySku(data_config.skuName);
						  var s_element = li.getElementsByClassName('children-wrapper-name')[0].textContent;

						  if(s_element!= '')
							 var size_value = li.getElementsByClassName('children-wrapper-name')[0].textContent.replace('=','');
						  else size_value='Free size';

						  var amount_value = li.getElementsByClassName('count')[0].getAttribute('title');


						 if(!amount_value)
							amount_value=getQuantity();


						  if(result=='')
							 result+=color_value+';'+size_value+'='+amount_value+";"+price;
						  else
							 result+='|'+color_value+';'+size_value+'='+amount_value+";"+price;
					   }
					}

				}
			}
			
		}else if(document.getElementsByClassName('selector-table').length > 0){
            let elementparent=document.getElementsByClassName('selector-table')[0];
            var result='';
            if(elementparent.getElementsByTagName('input').length > 0){
                let l=elementparent.getElementsByTagName('input').length;
                let colprice=4;
                //let colsl=
                if(typeof elementparent.getElementsByTagName('tr')[0].getElementsByTagName('th')=='object'){
                    let l_th=elementparent.getElementsByTagName('tr')[0].getElementsByTagName('th').length;
                    for(var j1=0;j1<l_th;j1++){
                        if(elementparent.getElementsByTagName('tr')[0].getElementsByTagName('th')[j1].textContent==='价格(元)'){
                            colprice=j1;
                        }
                    }
                }
                for(var j=0;j<l;j++)
					{
                        if(elementparent.getElementsByTagName('input')[j].value !='' && parseInt(elementparent.getElementsByTagName('input')[j].value) > 0){                          
                            if(typeof elementparent.getElementsByTagName('tr')[j+1].getElementsByTagName('td')[0]=='object'){
                                var color_value =  elementparent.getElementsByTagName('tr')[j + 1].getElementsByTagName('td')[0].textContent.replace('=','')
                            }
                            if(typeof elementparent.getElementsByTagName('tr')[j+1].getElementsByTagName('td')[1]=='object'){
                                color_value += ' '+ elementparent.getElementsByTagName('tr')[j + 1].getElementsByTagName('td')[1].textContent.replace('=','')
                            }
                            if(typeof elementparent.getElementsByTagName('tr')[j+1].getElementsByTagName('td')[2]=='object'){
                                color_value += ' '+ elementparent.getElementsByTagName('tr')[j + 1].getElementsByTagName('td')[2].textContent.replace('=','')
                            }
                            if(typeof elementparent.getElementsByTagName('tr')[j+1].getElementsByTagName('td')[3]=='object'){
                                var size_value =  elementparent.getElementsByTagName('tr')[j + 1].getElementsByTagName('td')[3].textContent.replace('=','')
                            }
                            if(typeof elementparent.getElementsByTagName('tr')[j+1].getElementsByTagName('td')[colprice]=='object'){
                                var price =  elementparent.getElementsByTagName('tr')[j + 1].getElementsByTagName('td')[colprice].textContent
                            }
                            var amount_value=parseInt(elementparent.getElementsByTagName('input')[j].value);
                            if(result=='')
							 result+=color_value+';'+size_value+';'+'='+amount_value+";"+price;
						  else
							 result+='|'+color_value+';'+size_value+';'+'='+amount_value+";"+price;
                        }
                    }
            }
            //return result;
        }
		else
		{
			var dv = document.getElementsByClassName('list-selected');
			if(dv==null || dv.length==0) return '';
			dv = dv[0];
			var tbl_info = dv.getElementsByClassName('table-list');
			if(tbl_info==null || tbl_info.length==0) return '';
			tbl_info = tbl_info[0];

			var trs = tbl_info.getElementsByTagName('tr');
			var result='';


			if(trs.length>0)
			{
				for(var i=0;i<trs.length;i++)
				{
					var tr = trs[i];

					var color_value= tr.getElementsByClassName('prop')[0].textContent.replace('=','');

					var lis = tr.getElementsByTagName('li');
					if(lis!=null && lis.length>0)
					{
					   for(var j=0;j<lis.length;j++)
					   {
						  var li =  lis[j];
						  var data_config=JSON.parse(li.getAttribute('data-sku-config'));
						  var sku_full = color_value+"&gt;"+data_config.skuName;
						  var price=getPriceBySku(data_config.skuName,color_value);
						  //var price=getPriceBySku(data_config.skuName);
						  var s_element = li.getElementsByClassName('name');

						  if(s_element!=null && s_element.length>0)
							 var size_value = s_element[0].textContent.replace('=','');
						  else size_value='Free size';

						  var amount_value = li.getElementsByClassName('value')[0].textContent;


						 if(!amount_value)
							amount_value=getQuantity();


						  if(result=='')
							 result+=color_value+';'+size_value+'='+amount_value+";"+price;
						  else
							 result+='|'+color_value+';'+size_value+'='+amount_value+";"+price;
					   }
					}

				}
			}
		}
        console.log("1688 attr:"+result);
        return encodeURIComponent(result);
    }
	
    //ham lay khoi luong sp
    function getWeight()
    {
        var weight=0;
        var div=document.getElementsByClassName('mod-detail-parcel');
   
        return weight;
    }
    
    
    //hàm lấy giá VND dựa vào giá TQ
    function getVNDPrice(price_taobao) {
        var rate=rateMoney();
        var price_result = roundNumber(price_taobao * rate,2);
        price_result = String(price_result).replace(/^\d+(?=.|$)/, function (int) {
            return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ".");
        });
      
        return price_result;
    }
    function xmlhttpPost(strURL) {
        // var xmlHttpReq = false;
        // var self = this;
        // // Mozilla/Safari
        // if (window.XMLHttpRequest) {
        //     self.xmlHttpReq = new XMLHttpRequest();
        // }
        // // IE
        // else if (window.ActiveXObject) {
        //     self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // if(document.getElementById("block_button").innerHTML.indexOf('input')!=-1){
        //     beforeHtml= document.getElementById("block_button").innerHTML;
        //     document.getElementById("block_button").innerHTML='<img style="margin-top:12px;" src="'+domainurl+'ajax-loader.gif" alt="" />';
        // }
        // //self.xmlHttpReq.open('POST', strURL, true);
        // self.xmlHttpReq.open('GET', cart_url+strURL, true);
        // self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // self.xmlHttpReq.withCredentials = "true";
        //
        // self.xmlHttpReq.onreadystatechange = function() {
        //     if (self.xmlHttpReq.readyState == 4) {
        //         if(strURL.indexOf('item_collect')!=-1)
        //         {
        //             //luu san pham
        //             if(self.xmlHttpReq.responseText=='OK')
        //                 alert('Lưu sản phẩm thành công!');
        //             else alert(self.xmlHttpReq.responseText);
        //         }else
        //             updatepage(self.xmlHttpReq.responseText);
        //
        //         if(document.getElementById("id_nhaphang_add_cart")!=null)
        //             document.getElementById("id_nhaphang_add_cart").addEventListener('click', linkClick);
        //
        //     }
        //     if(beforeHtml!='')
        //         document.getElementById("block_button").innerHTML=beforeHtml;
        // }
        //
        // self.xmlHttpReq.send(cart_url);

        console.log('func addcart 1688.com==========');
        chrome.runtime.sendMessage({
            action: "request_server",
            method: 'GET',
            url: cart_url+strURL,
            callback: 'after_request_server'
        });
    }

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            switch (request.action)
            {
                case "after_request_server":
                    updatepage(request.response);
                    if(beforeHtml!=''){
                      document.getElementById("block_button").innerHTML=beforeHtml;
                    }

                    if(document.getElementById("id_nhaphang_add_cart")!=null){
                      document.getElementById("id_nhaphang_add_cart").addEventListener('click', linkClick);
                    }
                    break;
                default :
                    break;
            }
        }
    );

   function updatepage(str_arr){
		try {
			//var str_arr = JSON.parse(str);
			// if(str_arr.response == true)
			// {
				var htmlObject = document.createElement('div');
				htmlObject.innerHTML = str_arr.message;
				document.body.appendChild(htmlObject);
			// }
		}catch(e){
			var htmlObject = document.createElement('div');
			htmlObject.innerHTML = str;
			document.body.appendChild(htmlObject);
		}
    }

    function getLink(color_size_name,quantity) {
        //lấy item_id
        var item_id     = getItemId();
		//console.log("1688 ItemID:"+item_id);
        //lấy item_title
        var item_title  = getItemTitle();
		console.log("1688 ItemTitle:"+item_title);
        //lấy item_image
        var item_image  = getItemImage();
        //lấy item_link
        var item_link   = getItemLink();
        //lay gia
        var price_taobao= getPrice();
        //var price_result = getVNDPrice(price_taobao);
        var item_price  = price_taobao;
        //console.log(item_price);
        //lay ban gia
        var price_table = getPriceTable();
        //lấy seller_id    
        var seller_id   = getSellerId();
        var seller_name = getSellerName();
        //lấy số lượng
        if(quantity=='' || quantity==null)
            var quantity    = getQuantity();
        
        //lấy khoi lượng
        var item_weight    = getWeight();
        
        //lấy màu sắc
        var color       = getColor();
        //lay comment
        var comment     = getComment();
        //lấy kích thước
        var size        = getSize();
        
        var skus = getAmountColorSize();
        var item_images=getItemImages();   
        
        console.log("1688 ItemImages:"+item_images);
        // lay color_size_name
       // var color_size_name = getColorSizeName();
        if(color_size_name=='' || color_size_name==null)
            var color_size_name = getNewColorSizeName();
            
        var params='type=1688';
        if(parseInt(item_id)>0)
            params+='&item_id='+item_id;
        if(item_title!='')
            params+='&item_title='+item_title;
        if(item_title=='')
           params+='&item_title='+item_link; 
            
        if(item_image!='')
            params+='&item_image='+item_image;
        if(comment!='')
            params+='&comment='+comment;
        if(item_link!='')
            params+='&item_link='+item_link;    
        if(item_price>0)
            params+='&item_price='+item_price;
        
        if(item_weight>0)
            params+='&item_weight='+item_weight;
            
        if(price_table!='')
            params+='&price_table='+price_table;    
        if(color_size_name!='')
            params+='&color_size_name='+color_size_name;
        if(item_images !=''){
            params+='&item_images='+item_images;
        }
        if(skus!='')
            params+='&skus='+skus;
        else 
            params+='&skus='+item_id;
        if(seller_id.length>0)
        {
            params+='&seller_id='+seller_id;
        }
        if(seller_name.length>0)
        {
            params+='&seller_name='+seller_name;
        } else {
            seller_name = document.querySelector('meta[property="og:product:nick"]').content.split(';')[0].split('=')[1];
            params+='&seller_name='+seller_name;
        }
        if(parseInt(quantity)>0)
            params+='&item_quantity='+quantity;
              
        if(parseInt(color)>-1)
            params+='&color='+color;
        
        if(parseInt(size)>-1)
            params+='&size='+size;
        return addVersion(params);
    }
   
    function linkClick() {
		if(document.getElementsByClassName('order-has-select-button').length > 0)
		{
			if(document.getElementsByClassName('selected-list-wrapper').length == 0)
			{
				document.getElementsByClassName('order-has-select-button')[0].click();
				document.getElementsByClassName("selected-list-wrapper")[0].style.zIndex = -1
			}
			
		}
		//console.log("buy 1688");
        var full=true;
        //validate số lượng
		var quantity = getTotalAmount();
		//console.log("Total qty",quantity);
        //so luong nho nhat dc phep mua
        var min             = getAllowedMinQuantity();
		//console.log("min qty",min);
		//if(quantity=="")
		//{
		//	quantity=min;
		//}
		//console.log(min);
        //so luong kh nhap
        //var quantity        = parseInt(getQuantity());
        //var quantity        = getQuantity();
        //console.log(" qty",quantity);
        if(quantity=='' || parseInt(quantity)==0)    
        {
           alert('S\u1ED1 l\u01B0\u1EE3ng mua t\u1ED1i thi\u1EC3u l\u00E0 '+min+' s\u1EA3n ph\u1EA9m.');
            return; 
        }
        /**
            * Kiểm tra các trường hợp:
            * 1. Hàng có đủ số lượng
            * 2. Số lượng mua có đạt min
            * 3. Số lượng mua có là bộ số của số lượng min
            **/
        if(quantity < min) {
            alert('S\u1ED1 l\u01B0\u1EE3ng mua t\u1ED1i thi\u1EC3u l\u00E0 '+min+' s\u1EA3n ph\u1EA9m.');
            return;
        } 
       
      
        //document.getElementById("id_nhaphang_add_cart").setAttribute('href','javascript:void(0)');
        //document.getElementById("id_nhaphang_add_cart").setAttribute('target',"");
        
        var amounts=getAmountColorSize();
        if(amounts!='')
        {
            var list_amount=amounts.split('|');
            for(var i=0;i<list_amount.length;i++)
            {
                var color_size = list_amount[i].split('=');
                if(color_size[0]!='' && color_size[1]!='')
                {
                    xmlhttpPost(getLink(encodeURIComponent(color_size[0]),encodeURIComponent(color_size[1])));    
                }
            }
            
        }
        else
        {
            if(quantity>0)
            xmlhttpPost(getLink(encodeURIComponent('Nh\u01B0 h\u00ECnh;Free size='+quantity),encodeURIComponent(quantity)));    
        }
    }    
   
    function quantityOnBlur() {
        var price_taobao = getPrice();
        var price = getVNDPrice(  );
        //thay lai text price theo so luong
        //console.log(price_taobao); 
        document.getElementById('hangnhap-price').innerHTML=price+' VNĐ';
    }
     // Cross-browser implementation of element.addEventListener()
    function addListener(element, type, expression, bubbling) {
        bubbling = bubbling || false;
        if(window.addEventListener) { // Standard
            element.addEventListener(type, expression, bubbling);
            return true;
        } else if(window.attachEvent) { // IE
            element.attachEvent('on' + type, expression);
            return true;
        } else return false;
    }
    if(document.getElementsByClassName('obj-order').length > 0)
	{
		this.htmlOnLoad = function()
		{
			
			if((document.getElementsByClassName("amount-input")==null || document.getElementsByClassName("amount-input")=='undefined'))
			{
				//return;
			}
			
			//var href=getLink();
			var src     = domainurl+'nhaphang_order.gif';
			var rate    = rateMoney();
			if(getPrice() > 0)
			{
				var price_taobao = getPrice();
				var price_result = Math.ceil(price_taobao * rate);
				price_result = String(price_result).replace(/^\d+(?=.|$)/, function (int) {
					return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ".");
				});
			}
			else
			{
				var price_result = 0;
			}
			var s = renderbox(price_result);
			var p = render2();
			var elem = document.createElement("div");
			elem.className = '_addon-template';
			var div = document.createElement('div');
			document.body.insertBefore(elem, document.body.childNodes[0]);
			document.querySelectorAll("._addon-template")[0].style.display = 'block';
			var con = document.querySelectorAll("._addon-template")[0];
				div.innerHTML = s;
				// Chỗ cần sửa
				if(document.getElementsByClassName('obj-order').length > 0)
				{
					document.getElementsByClassName('obj-order')[0].innerHTML='';
					document.getElementsByClassName('obj-order')[0].parentNode.insertBefore( div.firstChild , document.getElementsByClassName('obj-order')[0].previousSibling );
				}   
				else if(document.getElementById('recyclerview'))
				{
					//chỗ này cần sửa
						document.getElementsByClassName('order-button-wrapper')[0].parentNode.insertBefore(div.firstChild, document.getElementsByClassName('order-button-wrapper')[0]);
					
				}
				con.innerHTML = p;
				addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
			checkUrl();
			getDataSearch();                   
			//document.getElementById("id_nhaphang_add_cart").addEventListener( 'click', linkClick);
		};
	}   
	else if(document.getElementById('recyclerview'))
	{
		window.onload = function()
		{
			
			if((document.getElementsByClassName("amount-input")==null || document.getElementsByClassName("amount-input")=='undefined'))
			{
				//return;
			}
			
			//var href=getLink();
			var src     = domainurl+'nhaphang_order.gif';
			var rate    = rateMoney();
			if(getPrice() > 0)
			{
				var price_taobao = getPrice();
				var price_result = Math.ceil(price_taobao * rate);
				price_result = String(price_result).replace(/^\d+(?=.|$)/, function (int) {
					return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ".");
				});
			}
			else
			{
				var price_result = 0;
			}
			var s = renderbox(price_result);
			var p = render2();
			var elem = document.createElement("div");
			elem.className = '_addon-template';
			var div = document.createElement('div');
			document.body.insertBefore(elem, document.body.childNodes[0]);
			document.querySelectorAll("._addon-template")[0].style.display = 'block';
			var con = document.querySelectorAll("._addon-template")[0];
				div.innerHTML = s;
				// Chỗ cần sửa
				if(document.getElementsByClassName('obj-order').length > 0)
				{
					document.getElementsByClassName('obj-order')[0].innerHTML='';
					document.getElementsByClassName('obj-order')[0].parentNode.insertBefore( div.firstChild , document.getElementsByClassName('obj-order')[0].previousSibling );
				}   
				else if(document.getElementById('recyclerview'))
				{
					//chỗ này cần sửa
						document.getElementsByClassName('order-button-wrapper')[0].parentNode.insertBefore(div.firstChild, document.getElementsByClassName('order-button-wrapper')[0]);
					
				}
				con.innerHTML = p;
				addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
			checkUrl();
			getDataSearch();                   
			//document.getElementById("id_nhaphang_add_cart").addEventListener( 'click', linkClick);
		};
		
	}
	else
	{
		window.onload = function()
		{
			
			if((document.getElementsByClassName("amount-input")==null || document.getElementsByClassName("amount-input")=='undefined'))
			{
				//return;
			}
			
			//var href=getLink();
			var src     = domainurl+'nhaphang_order.gif';
			var rate    = rateMoney();
			if(getPrice() > 0)
			{
				var price_taobao = getPrice();
				var price_result = Math.ceil(price_taobao * rate);
				price_result = String(price_result).replace(/^\d+(?=.|$)/, function (int) {
					return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ".");
				});
			}
			else
			{
				var price_result = 0;
			}
			var s = renderbox(price_result);
			var p = render2();
			var elem = document.createElement("div");
			elem.className = '_addon-template';
			var div = document.createElement('div');
			document.body.insertBefore(elem, document.body.childNodes[0]);
			document.querySelectorAll("._addon-template")[0].style.display = 'block';
			var con = document.querySelectorAll("._addon-template")[0];
				div.innerHTML = s;
				// Chỗ cần sửa
				if(document.getElementsByClassName('obj-order').length > 0)
				{
					document.getElementsByClassName('obj-order')[0].innerHTML='';
					document.getElementsByClassName('obj-order')[0].parentNode.insertBefore( div.firstChild , document.getElementsByClassName('obj-order')[0].previousSibling );
				}   
				else if(document.getElementById('recyclerview'))
				{
					//chỗ này cần sửa
						document.getElementsByClassName('order-button-wrapper')[0].parentNode.insertBefore(div.firstChild, document.getElementsByClassName('order-button-wrapper')[0]);
					
				}
				con.innerHTML = p;
				addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
			checkUrl();
			getDataSearch();                   
			//document.getElementById("id_nhaphang_add_cart").addEventListener( 'click', linkClick);
		};
	}
}

// VIPSHOP -------------------

function vipshop(cart_url, url_save) {

    function addGlobalNoTranslate() {

        if (document.getElementById('mod-detail-price-sku') != null) {
            var hd = document.getElementById('mod-detail-price-sku');

            hd.className += ' notranslate';
        }
        if (document.getElementById('mod-detail-price') != null) {
            var hd = document.getElementById('mod-detail-price');

            hd.className += ' notranslate';
        }
    }

    // Cross-browser implementation of element.addEventListener()
    function addListener(element, type, expression, bubbling) {
        bubbling = bubbling || false;
        if (window.addEventListener) { // Standard
            element.addEventListener(type, expression, bubbling);
            return true;
        } else if (window.attachEvent) { // IE
            element.attachEvent('on' + type, expression);
            return true;
        } else return false;
    }

    addGlobalNoTranslate();

    function additionPrice() {
        return 0;
    }


    //ham lay comment
    function getComment() {
        if (document.getElementById("txtBz") != null)
            return encodeURIComponent(document.getElementById("txtBz").value);
        else return '';
    }

    //ham lay thong tin color_size_name theo form moi
    function getColorSizeName() {
		//size
		color_size_name = '';
		var sizeblock = document.querySelector("#J-sizeArea-wrap .sli-selected .size-list-item-name");
		if(sizeblock != null){
			color_size_name += sizeblock.innerHTML + ';';
		}
		else{
			
			var sizeblock = document.querySelector("#J-sizeArea-wrap .sli-disabled .size-list-item-name");
			if(sizeblock != null){
					color_size_name += sizeblock.innerHTML + ';';
			}else{
				if(document.querySelectorAll("#J-sizeArea-wrap .size-list li").length > 0){
					return '';
				};
			}
		}
		//color
		var colorblock = document.querySelector(".color-list .selected");
		if(colorblock != null){
			color_size_name += colorblock.getAttribute("title");
		}
		return encodeURIComponent(color_size_name);
		
    }
	
	 function getOuterId() {
		//size
		var outer_id =getItemId();
		var sizeblock = document.querySelector("#J-sizeArea-wrap .sli-selected");
		if(sizeblock != null){
			outer_id += sizeblock.getAttribute('data-id');
		}
		//color
		var colorblock = document.querySelector(".color-list .selected");
		if(colorblock != null){
			outer_id += colorblock.getAttribute("id").replace(/\J-colorItem-/g, '');
		}
		return encodeURIComponent(outer_id);
		
    }
	
    function getSellerId() {
     
		var seller_id = 'vipshop';
		var cur_page=window.location.href;
		var cur_array = cur_page.split('detail-');
		if(cur_array)
		{
			var cur_brand=cur_array[1].split('-');
			if(cur_brand)
			{
				seller_id=cur_brand[0].trim();
			}
		}
        return encodeURIComponent(seller_id);
    }
	
	function getSellerName()
	{
		var seller_name = ''
		var element = document.querySelector(".pib-title .pib-title-class");
		if(element != null){
			 var aelemt=element.getElementsByTagName('a');
			
			 if(aelemt.length)
			 {
					seller_name = element.getElementsByTagName('a')[0].innerHTML;
			 }else{
				  seller_name = element.innerHTML;
			 }
			 
		}	
		
        return encodeURIComponent(seller_name);
	}
	
    //ham lay item_id cua san pham
    function getItemId() {
		var str = window.location.href;
		var i = str.lastIndexOf(".html");
		var str2 = str.substring(0,i);
		var j = str2.lastIndexOf('-');
		var item_id = str2.substring(j +1,str2.length);
		return item_id;
	 
    }
    //ham lay item_title cua san pham
    function getItemTitle() {
		var item_title = ''
		var element = document.querySelector(".pib-title .pib-title-detail");
		if(element != null){
			 item_title = element.innerHTML;
		}
	
        return encodeURIComponent(item_title);
    }
    //ham lay item_image cua san pham
    function getItemImage() {
		  var item_image = '';
		var element = document.querySelector("#J-mer-ImgReview .J-mer-bigImgZoom");
		if(element != null){
			 item_image = element.getAttribute("href");
		}
        return encodeURIComponent(item_image);
    }
    //ham lay item_link cua san pham
    function getItemLink() {
        return encodeURIComponent(window.location.href);
    }
	
    //hàm lấy số lượng mua
    function getQuantity() {

		var result = '';
		var element = document.querySelector("#J-num-select .J-pro-num-txt");
		if(element != null){
			 result = element.innerHTML;
		}
	
	
        return encodeURIComponent(result);
	
	
	
    }

    //hàm lấy giá TQ của sản phẩm dựa vào số lượng mua
    function getPrice() {
		  var result = 0;
		var element = document.querySelector(".pi-price-box em");
		if(element != null){
			 result = parseFloat(element.innerHTML);
		 }

        return result;

    }
   
 
    //hàm lấy giá VND dựa vào giá TQ
    function getVNDPrice(price_taobao) {
        var rate = rateMoney();
        var price_result = roundNumber(price_taobao * rate, 2);
        price_result = String(price_result).replace(/^\d+(?=.|$)/, function (int) {
            return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ".");
        });

        return price_result;
    }
    function xmlhttpPost(strURL) {
        // var xmlHttpReq = false;
        // var self = this;
        // // Mozilla/Safari
        // if (window.XMLHttpRequest) {
        //     self.xmlHttpReq = new XMLHttpRequest();
        // }
        // // IE
        // else if (window.ActiveXObject) {
        //     self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // beforeHtml= document.getElementById("block_button").innerHTML;
        // document.getElementById("block_button").innerHTML='<img style="margin-top:12px;" src="'+domainurl+'ajax-loader.gif" alt="" />';
        // //self.xmlHttpReq.open('POST', strURL, true);
        // self.xmlHttpReq.open('GET', strURL+getLink(), true);
        // self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // self.xmlHttpReq.withCredentials = "true";
        //
        // self.xmlHttpReq.onreadystatechange = function() {
        //     if (self.xmlHttpReq.readyState == 4) {
        //         if(strURL.indexOf('item_collect')!=-1)
        //         {
        //             //luu san pham
        //             if(self.xmlHttpReq.responseText=='OK')
        //                 alert('Lưu sản phẩm thành công!');
        //             else alert(self.xmlHttpReq.responseText);
        //         }else
        //             updatepage(self.xmlHttpReq.responseText);
        //
        //         document.getElementById("block_button").innerHTML=beforeHtml;
        //         addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
        //     //    addListener(document.getElementById("id_nhaphang_save_item"), 'click', linkSave);
        //     }
        // }
        // console.log("run this function");
        // //alert(getLink());
        // self.xmlHttpReq.send(getLink());
        console.log('func addcart vipshop==========');
        strURL += getLink();
        chrome.runtime.sendMessage({
            action: "request_server",
            method: 'GET',
            url: strURL,
            callback: 'after_request_server'
        });
    }

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            switch (request.action)
            {
                case "after_request_server":
                    updatepage(request.response);
                    document.getElementById("block_button").innerHTML=beforeHtml;
                    addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);
                    break;
                default :
                    break;
            }
        }
    );

    function updatepage(str_arr){
		try {
			//var str_arr = JSON.parse(str);
			// if(str_arr.response == true)
			// {
				var htmlObject = document.createElement('div');
				htmlObject.innerHTML = str_arr.message;
				document.body.appendChild(htmlObject);
			// }
		}catch(e){
			var htmlObject = document.createElement('div');
			htmlObject.innerHTML = str;
			document.body.appendChild(htmlObject);
		}
    }
    
    function getLink(color_size_name, quantity) {
		var href = cart_url;
        //lấy item_id
        var item_id = getItemId();
        //lấy item_title
        var item_title = getItemTitle();
        //lấy item_image
        var item_image = getItemImage();
        //lấy item_link
        var item_link = getItemLink();
        //lay gia
        var item_price = getPrice();
        
        //lấy seller_id    
        var seller_id = getSellerId();
        var seller_name = getSellerName();
        //lấy số lượng
        if (quantity == '' || quantity == null)
            var quantity = getQuantity();

        //lay comment
        var comment = getComment();

	
        //var skus = getAmountColorSize();
		//console.log(color_size_name);
        // lay color_size_name
        // var color_size_name = getColorSizeName();
        if (color_size_name == '' || color_size_name == null)
            var color_size_name = getColorSizeName();
		
		if(color_size_name==''){
			alert("B\u1EA1n ch\u01B0a ch\u1ECDn \u0111\u1EA7y \u0111\u1EE7 thu\u1ED9c t\u00EDnh s\u1EA3n ph\u1EA9m!");
			return false;
		}
	
		var outer_id = getOuterId();
		
        var params = 'type=TMall';
		
        if (parseInt(item_id) > 0)
            params += '&item_id=' + item_id;
        if (item_title != '')
            params += '&item_title=' + item_title;
        if (item_title == '')
            params += '&item_title=' + item_link;

        if (item_image != '')
            params += '&item_image=' + item_image;
     
        if (item_link != '')
            params += '&item_link=' + item_link;
        if (item_price > 0)
            params += '&item_price=' + item_price;

        if (color_size_name != '')
            params += '&color_size_name=' + color_size_name;
		
		if(outer_id !='')
			params+='&outer_id='+outer_id;    
		
        if (seller_id.length > 0) {
            params += '&seller_id=' + seller_id;
        }
        if (seller_name.length > 0) {
            params += '&seller_name=' + seller_name;
        }
        if (parseInt(quantity) > 0)
            params += '&item_quantity=' + quantity;

        if (comment !="")
            params += '&comment=' + comment;

        return addVersion(params);
    }

    function linkClick() {
        if(getLink()){
			xmlhttpPost(cart_url);
		}
    }

    this.htmlOnLoad = function () {
		
        var src     = domainurl+'nhaphang_order.gif';
		
        var price_taobao = getPrice();
        var price_result = getVNDPrice(price_taobao);
        //var quantity = getQuantity();
		
        var s = renderbox(price_result);
	
        var div = document.createElement('div');
        div.innerHTML = s;
         if(document.getElementsByClassName('i-button'))
            {
               document.getElementsByClassName('i-button')[0].innerHTML = s;
            }
         addListener(document.getElementById("id_nhaphang_add_cart"), 'click', linkClick);

    };
}







var host = getHostname();
var ex=null;

var url=domain_addcart+"?";
function setDataSearch(transerlateLang,orderBy,diaDiem,LinkXuong){
    var objData={};
    objData.lang=$("#soflow-color").val();
    objData.orderBy=orderBy;
    objData.diaDiem=diaDiem;
    objData.LinkXuong=LinkXuong;
    objData.keyWorkXanh=$("#vndich").val();
    return objData;
    //LocalStorageSearch.set(objData);
}
var LocalStorageSearch={
    set: function(value,fn) {
        chrome.storage.local.set({"dataSearch": JSON.stringify(value)},function(){
            fn();
        });

    },
    get: function(fn) {
       try{
           chrome.storage.local.get("dataSearch", function (obj) {
               try{
                   var dataSearch=JSON.parse(obj.dataSearch);
                   fn(dataSearch);
               }
               catch(erx){}
           });

         //  var saved = localStorage.getItem("dataSearch");
          // saved = JSON.parse(saved);
          // fn(saved);


          // var dataSearch=getCookie("dataSearch");
           // dataSearch = JSON.parse(dataSearch);
           // fn(dataSearch);
       }
        catch(err){

        }
        //return saved
        /*chrome.storage.local.get("dataSearch", function (obj) {
            var data=JSON.parse(obj);
            fn(data);
        });*/
    }
};
var url_save="";
//    var url_save="http://localhost/abc/public_html/item/item_collect_addon?";
function callTranserlate(source,target,q){
	var parameter='?source='+source+
		'&target='+target+
		 '&q='+encodeURIComponent(q)
	var fullUrl="https://hangquangchau24h.vn/api/translate.php"+parameter;
	var request = httpGet(fullUrl);
	if (request) {
          // console.log(request.response);
           var res= JSON.parse(request);
           var url = window.location.href;
           var transerlateLang= res.data.translations[0].translatedText;
		   //console.log(fullUrl);
		   //console.log(res);
           if (url.match('taobao.com')) {
              // document.getElementsByName("q")[0].setAttribute("type", "text");
               //document.getElementsByName("q")[0].setAttribute("value",transerlateLang);
               var orderBy=$("#orderby").val();
               var diadiem=$("#diadiem-taobao").val();
               var linkXuong=$("#xuong-taobao").val();
               var query="";

               if(orderBy===1||orderBy==="1")query="&sort=sale-desc";
               if(diadiem!=="0"&&diadiem!==0)query=query+"&loc="+diadiem;
               if(linkXuong===1||linkXuong==="1")query=query+"&app=shopsearch";

               //console.log("https://s.taobao.com/search?q="+transerlateLang+query);
                var objData= setDataSearch(transerlateLang,orderBy,diadiem,linkXuong);
               LocalStorageSearch.set(objData,function(){
                   window.location="https://s.taobao.com/search?q="+transerlateLang+query;
               });
           }
           if (url.match(/tmall.com|tmall.hk|yao.95095.com/)) {
               // return "TMALL"
               window.location=" https://list.tmall.com/search_product.htm?q="+transerlateLang;

           }
           if (url.match(/1688.com|alibaba/)) {
               // return "1688"
               var orderBy=$("#orderby").val();
               var diadiem=$("#diadiem-1688").val();
               var linkXuong=$("#xuong-1688").val();
               var query="";

               var urlDefault="selloffer/offer_search.htm";
               if(orderBy===1||orderBy==="1")query="&descendOrder=true&sortType=va_rmdarkgmv30&uniqfield=userid";
               if(diadiem!=="0"&&diadiem!==0)query=query+"&province="+diadiem;
               if(linkXuong===1||linkXuong==="1"){
                   query=query+"&app=shopsearch";
                   urlDefault="company/company_search.htm";
               }
               var objData= setDataSearch(transerlateLang,orderBy,diadiem,linkXuong);
               LocalStorageSearch.set(objData,function(){
                   window.location="https://s.1688.com/"+urlDefault+"?keywords="+transerlateLang+query;
               });


           }
        }
	console.log(fullUrl);
}
$(document).on('click','#vnshoptimkiem',function(){
	 var source= document.getElementById("soflow-color").value;
	 var target='zh-CN';
	 var q=document.getElementById("vndich").value+'';
	 callTranserlate(source,target,q);

});
//taobao
if(host.indexOf('taobao')!=-1 || host.indexOf('tmall')!=-1 || host.indexOf('yao.95095.com')!=-1)
{
    if(host.indexOf('login.taobao') == -1 && host.indexOf('login.tmall') == -1)
	{
		ex=new taobao(url,url_save);
	}
}
//alibaba
if(host.indexOf('alibaba')!=-1 || host.indexOf('detail.1688.com')!=-1)
{
    var curr = window.location.href;
    if (curr.indexOf('.html?__NEWPC__') === -1 ) {
        window.location.href = curr.substring(0, curr.indexOf("html") + 4) + '?__NEWPC__=false';
    }
    //console.info(host+'&__NEWPC__=false');

    ex= new alibaba(url,url_save);
}
// if(window.location.href.indexOf('detail.tmall.com')!=-1 && window.location.href.indexOf('item.htm')!=-1)
// {
//     var curr = window.location.href;

//     curr = curr.replace(/item.htm/g, "item_o.htm");

//     window.location.href = curr;
// }
//vipshop
if (host.indexOf('vip') != -1 || host.indexOf('vipshop') != -1) {
    ex = new vipshop(url, url_save);
}

console.log("ex",ex);
if( ex !=null){
	ex.htmlOnLoad();
}