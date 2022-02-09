function map(){
	var x = document.getElementById("map");
	if (x.style.display === "block"){
		x.style.display = "none";
	}else{
		x.style.display = "block";
	}
}

function gioHang(){
	var x = document.getElementById("gioHang");
	if (x.style.display === "block"){
		x.style.display = "none";
	}else{
		x.style.display = "block";
	}
}

function search(){
  var x = document.getElementById("search");
  if (x.style.display === "block"){
	x.style.display = "none";
  }else{
	x.style.display = "block";
  }
}

function support(){
	var x = document.getElementById("support");
	if (x.style.display === "block"){
		x.style.display = "none";
	}else{
		x.style.display = "block";
	}
}

function hide(){
	var x = document.getElementById("hide");
	if(x.style.display === "block"){
	x.style.display = "none";
	}else{
	x.style.display = "block";
	}
}

function hide2(){
	var x = document.getElementById("hide2");
	if(x.style.display === "block"){
	x.style.display = "none";
	}else{
	x.style.display = "block";
	}
}

function hide3(){
	var x = document.getElementById("hide3");
	if(x.style.display === "block"){
	x.style.display = "none";
	}else{
	x.style.display = "block";
	}
}

function hide4(){
	var x = document.getElementById("hide4");
	if(x.style.display === "block"){
	x.style.display = "none";
	}else{
	x.style.display = "block";
	}
}


//slide show

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n){
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n){
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length){slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
} 



// giỏ hàng vjppro

function cart(btn){
	var row = btn.parentElement.parentElement.parentElement.cloneNode(true);
	var cart = document.getElementById("item");
	var rows = cart.getElementsByTagName("tr");
	if(rows.length == 10){
		return alert("Giỏ hàng đầy vui lòng thanh toán hoặc xóa bớt để tiếp tục !")
	}
	for(var i = 0; i < rows.length; i++){
		var cells = rows[i].getElementsByTagName('td');
		var title = cells[0].innerText;
		var rows2 = row.getElementsByTagName("tr");

		for(var j = 0; j < rows2.length; j++){
			var cells2 = rows2[j].getElementsByTagName('td');
			var titleCheck = cells2[0].innerText;
			if(title == titleCheck){
				return alert("Mặt hàng này đã có trong giỏ hàng !")
			}
		}
	}
	var btnXoa = row.getElementsByTagName('button')[0];
	btnXoa.innerText = "Xóa";
	btnXoa.setAttribute('onclick','xoa(this)')
	btnXoa.setAttribute('class','remove')	
	document.getElementById('item').appendChild(row);
	total()
	alert("Đã thêm mặt hàng vào giỏ hàng !")
}


function xoa(btn1){
	var row = btn1.parentElement.parentElement.parentElement;
	document.getElementById('item').removeChild(row);
	total();
}

function total(){
	var cart = document.getElementById("item");
	var rows = cart.getElementsByTagName("tr");
	var tong = 0;	
	var valueII = 0
	for(var i = 0; i < rows.length; i++){
		var cells = rows[i].getElementsByTagName('td');
		var price = cells[1].innerText = document.getElementsByClassName("itemPrice")[i].getAttribute("data-price");
		var valueI = cells[2] =  document.getElementsByClassName("quantityInput")[i].value;
		tong += ( Number(valueI) * Number(price));	

		//định dạng
		var totalItemPrice = Number(valueI) * Number(price);
		totalItemPrice = totalItemPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		var totalItemPrice = cells[3].innerText = totalItemPrice + "đ";	
		document.getElementById('so').innerText = valueII += Number(valueI);
	}	

	//định dạng
	tong = tong.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	document.getElementById('total').innerText= tong;
	document.getElementById('so').innerText = valueII;
}

function totalMenu(){
	var cart = document.getElementById("itemMenu");
	var rows = cart.getElementsByTagName("tr");
	var tong = 0;	
	var valueII = 0
	for(var i = 0; i < rows.length; i++){
		var cells = rows[i].getElementsByTagName('td');
		var price = cells[1].innerText;
		var valueI = cells[2] =  document.getElementsByClassName("quantityInputMenu")[i].value;
		tong += ( Number(valueI) * Number(price));	

		//định dạng
		var totalItemPrice = Number(valueI) * Number(price);
		totalItemPrice = totalItemPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		var totalItemPrice = cells[3].innerText = totalItemPrice + "đ";	
		document.getElementById('so').innerText = valueII += Number(valueI);
	}	

	//định dạng
	tong = tong.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	document.getElementById('total').innerText= tong;
	document.getElementById('so').innerText = valueII;
}

function order(){
	if( document.getElementById('so').innerText == 0){
		return alert("Không có đơn hàng để thanh toán!");
	}
	else{
		document.getElementById('item').innerText= " \n ";
		document.getElementById('total').innerText= "0đ";
		document.getElementById('so').innerText= 0;
		return alert("Chúc mừng bạn đã thanh toán thành công!");
	}
}


// form

function validateForm(){
	var name = document.forms["formSupport"]["yourName"].value
	var email = document.forms["formSupport"]["yourEmail"].value
	var phone = document.forms["formSupport"]["yourPhone"].value
	var sex = document.forms["formSupport"]["yourSex"].value
	var mess = document.forms["formSupport"]["yourMess"].value
	var sothich = document.getElementsByName("sothich")
	if(name == ""){
		var check = document.getElementById("name").style.color = "red"
		check = "* Bạn chưa nhập họ và tên !"
		document.getElementById("name").innerText = check;			
	}

	if(email ==""){
		var check = document.getElementById("email").style.color = "red"
		check = "* Bạn chưa nhập email !"
		document.getElementById("email").innerText = check 	
	}

	if(phone == ""){
		var check = document.getElementById("phone").style.color = "red"
		check = "* Bạn chưa nhập số điện thoại !" 
		document.getElementById("phone").innerText = check	
	}

	if(sex == "gioitinh"){
		var check = document.getElementById("addInf").style.color = "red"
		check = "* Bạn chưa chọn giới tính !" 
		document.getElementById("addInf").innerText = check 
	}


	if(mess == ""){
		var check = document.getElementById("mess").style.color = "red"
		check = "* Bạn chưa nhập tin nhắn hỗ trợ !" 
		document.getElementById("mess").innerText = check
	}

	if(!sothich[0].checked && !sothich[1].checked && !sothich[2].checked && !sothich[3].checked && !sothich[4].checked && !sothich[5].checked ){
        var check = document.getElementById("checksothich").style.color = "red"
		check = "* Sở thích phải chọn ít nhất 1 cái !" 
		document.getElementById("checksothich").innerText = check
    }

	if(name != "" && email !="" && phone !="" && sex !="gioitinh" && mess != ""){
		alert("Tin nhắn hỗ trợ đã được gửi về bộ phận quản lý, sẽ được xử lý ngay !")
		return true;
	}
	return false	
}

function phoneCheck(){
	var phone = document.forms["formSupport"]["yourPhone"].value
	var count = phone.length;
	if (count > 10) {
		var replace = phone.slice(0,phone.length-1);
		document.getElementById("replacePhone").value =  replace
    }
	else if(isNaN(phone) == true){
		var replace = phone.slice(0,phone.length-1);
		document.getElementById("replacePhone").value =  replace

		var check = document.getElementById("phone").style.color = "red"
		check = "* Bạn phải nhập số và phải đủ 10 số " 
		document.getElementById("phone").innerText = check
	}
	else if(count == 10){
		var check = document.getElementById("phone").style.color = "green"
		check = "✔"
		document.getElementById("phone").innerText = check
	}
	else{
		var check = document.getElementById("phone").style.color = "red"
		check = "* Bạn phải nhập đủ 10 số " 
		document.getElementById("phone").innerText = check 
	}
}

function sexCheck(){
	var sex = document.forms["formSupport"]["yourSex"].value
	if(sex != "gioitinh"){
		var check = document.getElementById("addInf").style.color = "green"
		check = "✔"
		document.getElementById("addInf").innerText = check
	}
	else{
		var check = document.getElementById("addInf").style.color = "red"
		check = "* Bạn chưa chọn giới tính !"
		document.getElementById("addInf").innerText = check
	}
}

function emailCheck(){
	var email = document.forms["formSupport"]["yourEmail"].value
	var checkGmail = email.lastIndexOf("@gmail.com")
	var checkYahoo = email.lastIndexOf("@yahoo.com");
	var checkEmail = email.lastIndexOf("@email.com");
	var check = document.getElementById("email").style.color = "red"
		check = "Trước @ phải có ký tự !"
	if(checkGmail == -1 && checkYahoo == -1 && checkEmail == -1 ){
		var check = document.getElementById("email").style.color = "red"
		check = "Bạn nhập chưa đúng định dạng email \n (@gmail.com, @yahoo.com, @email.com )" 
		document.getElementById("email").innerText = check
	}
	else if(checkGmail == 0 ){ 
		document.getElementById("email").innerText = check
	}
	else if(checkYahoo == 0 ){
		document.getElementById("email").innerText = check
	}
	else if(checkEmail == 0 ){
		document.getElementById("email").innerText = check
	}
	else{
		var check = document.getElementById("email").style.color = "green"
		check = "✔"
		document.getElementById("email").innerText = check
	}
}

function messCheck(){
	var mess = document.forms["formSupport"]["yourMess"].value
	var count = mess.length;
	if(count < 10){
		var check = document.getElementById("mess").style.color = "red"
		check = "* Phải trên 10 ký tự !"
		document.getElementById("mess").innerText = check
	}
	else{
		var check = document.getElementById("mess").style.color = "green"
		check = "✔"
		document.getElementById("mess").innerText = check
	}
}

function nameCheck(){
	var name = document.forms["formSupport"]["yourName"].value
	var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
	var count = name.length;
	var nameCheck = name.substr(count-1);

	var check = document.getElementById("name").style.color = "red" 
	check = "Không được sử dùng ký tự đặc biệt !"

 	if( nameCheck.match(format)){
		document.getElementById("name").innerText = check
		var replace = name.slice(0,name.length-1);
		document.getElementById("replaceName").value =  replace
		
	}
	else{
		var check = document.getElementById("name").style.color = "green"
		check = "✔"
		document.getElementById("name").innerText = check
	}
	
}

function checkS(){
	var check = document.getElementById("checksothich").style.color = "green"
	check = "✔"
	document.getElementById("checksothich").innerText = check
}
function sothich_khac(visible){
    var sothich_khac = document.getElementById("khac")
    sothich_khac.style.display = visible ? "" : "none";
}

function typeCheck(){
	var check = document.getElementById("type").value
	var type = document.getElementsByClassName("type")
	var count= type.length
	if(check =='none'){
		var x = document.getElementsByTagName("select").length
		if(x != 2){
			document.getElementById("typeCheck2").removeChild(typeRemove);
			document.getElementById("typeCheck2").removeChild(typeRemoveGB);
			document.getElementById("typeCheck2").removeChild(typeRemovePrice);
		}
		//
		typeRemoveGB = document.createElement("select")
		typeRemoveGB.setAttribute("id","typeGb")
		typeRemoveGB.setAttribute("oninput","typeCheckGb()")
		document.getElementById("typeCheck2").appendChild(typeRemoveGB);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","512GB")
		opt.innerText = "512GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","256GB")
		opt.innerText = "256GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","128GB")
		opt.innerText = "128GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","64GB")
		opt.innerText = "64GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","32GB")
		opt.innerText = "32GB"
		document.getElementById("typeGb").appendChild(opt);


		//
		typeRemovePrice = document.createElement("select")
		typeRemovePrice.setAttribute("id","typePrice")
		typeRemovePrice.setAttribute("oninput","typeCheckPrice()")
		document.getElementById("typeCheck2").appendChild(typeRemovePrice);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","1")
		opt.innerText = "< 10tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","2")
		opt.innerText = "10tr < 20tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","3")
		opt.innerText = "20tr < 30tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","4")
		opt.innerText = "> 40tr"
		document.getElementById("typePrice").appendChild(opt);

		
		//
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type")
			if(typeName != 'none'){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(check == 'laptop'){
		var remove = document.getElementsByTagName("select")[2]
		var remove2 = document.getElementsByTagName("select")[3]
		document.getElementById("typeCheck2").removeChild(remove)
		document.getElementById("typeCheck2").removeChild(remove2)
		var x = document.getElementsByTagName("select").length
		if(x != 2){
			document.getElementById("typeCheck2").removeChild(typeRemovePrice);
		}
		typeRemove = document.createElement("select")
		typeRemove.setAttribute("id","typeLaptop")
		typeRemove.setAttribute("oninput","typeCheckLaptop()")
		document.getElementById("typeCheck2").appendChild(typeRemove);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typeLaptop").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","Air")
		opt.innerText = "MacBook Air"
		document.getElementById("typeLaptop").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","Pro")
		opt.innerText = "MacBook Pro"
		document.getElementById("typeLaptop").appendChild(opt);

		//
		typeRemoveGB = document.createElement("select")
		typeRemoveGB.setAttribute("id","typeGb")
		typeRemoveGB.setAttribute("oninput","typeCheckGbLaptop()")
		document.getElementById("typeCheck2").appendChild(typeRemoveGB);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","512GB")
		opt.innerText = "512GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","256GB")
		opt.innerText = "256GB"
		document.getElementById("typeGb").appendChild(opt);

		//

		typeRemovePrice = document.createElement("select")
		typeRemovePrice.setAttribute("id","typePrice")
		typeRemovePrice.setAttribute("oninput","typeCheckPrice()")
		document.getElementById("typeCheck2").appendChild(typeRemovePrice);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","1")
		opt.innerText = "< 10tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","2")
		opt.innerText = "10tr < 20tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","3")
		opt.innerText = "20tr < 30tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","4")
		opt.innerText = "> 40tr"
		document.getElementById("typePrice").appendChild(opt);

		//

		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type")
			if(typeName != 'laptop'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

	else if(check == 'iPhone'){
		var remove = document.getElementsByTagName("select")[2]
		var remove2 = document.getElementsByTagName("select")[3]
		document.getElementById("typeCheck2").removeChild(remove)
		document.getElementById("typeCheck2").removeChild(remove2)
		var x = document.getElementsByTagName("select").length
		if(x != 2){
			document.getElementById("typeCheck2").removeChild(typeRemovePrice);
		}
		typeRemove = document.createElement("select")
		typeRemove.setAttribute("id","typeIphone")
		typeRemove.setAttribute("oninput","typeCheckIphone()")
		document.getElementById("typeCheck2").appendChild(typeRemove);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typeIphone").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","11")
		opt.innerText = "iPhone 11"
		document.getElementById("typeIphone").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","12")
		opt.innerText = "iPhone 12"
		document.getElementById("typeIphone").appendChild(opt);

		//
		typeRemoveGB = document.createElement("select")
		typeRemoveGB.setAttribute("id","typeGb")
		typeRemoveGB.setAttribute("oninput","typeCheckGbIphone()")
		document.getElementById("typeCheck2").appendChild(typeRemoveGB);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","512GB")
		opt.innerText = "512GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","256GB")
		opt.innerText = "256GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","128GB")
		opt.innerText = "128GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","64GB")
		opt.innerText = "64GB"
		document.getElementById("typeGb").appendChild(opt);

		//

		typeRemovePrice = document.createElement("select")
		typeRemovePrice.setAttribute("id","typePrice")
		typeRemovePrice.setAttribute("oninput","typeCheckPrice()")
		document.getElementById("typeCheck2").appendChild(typeRemovePrice);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","1")
		opt.innerText = "< 10tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","2")
		opt.innerText = "10tr < 20tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","3")
		opt.innerText = "20tr < 30tr"
		document.getElementById("typePrice").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","4")
		opt.innerText = "> 40tr"
		document.getElementById("typePrice").appendChild(opt);

		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type")
			if(typeName != 'iPhone'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

	else if(check == 'iPad'){
		document.getElementById("typeCheck2").removeChild(laptop);
		document.getElementById("typeCheck2").removeChild(iphone);
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type")
			if(typeName != 'iPad'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

	else if(check == 'Watch'){
		document.getElementById("typeCheck2").removeChild(iphone);
		document.getElementById("typeCheck2").removeChild(laptop);
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type")
			if(typeName != 'Watch'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

	else if(check == 'AirPods'){
		document.getElementById("typeCheck2").removeChild(iphone);
		document.getElementById("typeCheck2").removeChild(laptop);
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type")
			if(typeName != 'AirPods'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

}

function typeCheckLaptop(){
	
	var check = document.getElementById("typeLaptop").value
	var type = document.getElementsByClassName("type")
	var count= type.length
	if(check =='none'){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName =='Pro' || typeName == 'Air'){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	
	else if(check == 'Air'){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != 'Air'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(check == 'Pro'){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != 'Pro'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
}

function typeCheckIphone(){
	var check = document.getElementById("typeIphone").value
	var type = document.getElementsByClassName("type")
	var count= type.length
	if(check =='none'){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName =='11' || typeName == '12'){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	
	else if(check == '11'){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '11'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(check == '12'){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '12'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
}

function typeCheckGb(){
	var check = document.getElementById("typeGb").value
	var type = document.getElementsByClassName("type")
	var count= type.length
	if(check == "none"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			if( typeName != 'none' ){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(check == "512GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			if(typeName != '512GB'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(check == "256GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			if(typeName != '256GB'){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(check == "128GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			if(typeName != '128GB' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

}

function typeCheckGbLaptop(){
	var check = document.getElementById("typeGb").value
	var checkLaptop = document.getElementById("typeLaptop").value
	var type = document.getElementsByClassName("type")
	var count= type.length

	if(checkLaptop =="Air" && check == "none"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if( typeName2 == 'Air' ){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkLaptop =="Air" && check == "512GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '512GB' || typeName2 != 'Air' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkLaptop =="Air" && check == "256GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '256GB' || typeName2 != 'Air' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkLaptop =="Air" && check == "128GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '128GB' || typeName2 != 'Air' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

	//
	if(checkLaptop =="Pro" && check == "none"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if( typeName2 == 'Pro' ){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkLaptop =="Pro" && check == "512GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '512GB' || typeName2 != 'Pro' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkLaptop =="Pro" && check == "256GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '256GB' || typeName2 != 'Pro' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkLaptop =="Pro" && check == "128GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '128GB' || typeName2 != 'Pro' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

	//

	if(checkLaptop =="none" && check == "none"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if( typeName2 == 'Pro' || typeName2 == 'Air' ){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkLaptop =="none" && check == "512GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName == '512GB' && typeName2 == "Air"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else if(typeName == '512GB' && typeName2 == "Pro"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "none"
			}
		}
	}
	else if(checkLaptop =="none" && check == "256GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName == '256GB' && typeName2 == "Air"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else if(typeName == '256GB' && typeName2 == "Pro"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "none"
			}
		}
	}
	else if(checkLaptop =="none" && check == "128GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName == '128GB' && typeName2 == "Air"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else if(typeName == '128GB' && typeName2 == "Pro"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "none"
			}
		}
	}

}


function typeCheckGbIphone(){
	var check = document.getElementById("typeGb").value
	var checkIphone = document.getElementById("typeIphone").value
	var type = document.getElementsByClassName("type")
	var count= type.length

	if(checkIphone =="11" && check == "none"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if( typeName2 == '11' ){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkIphone =="11" && check == "512GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '512GB' || typeName2 != '11' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkIphone =="11" && check == "256GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '256GB' || typeName2 != '11' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkIphone =="11" && check == "128GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '128GB' || typeName2 != '11' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}

	//
	if(checkIphone =="12" && check == "none"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if( typeName2 == '12' ){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkIphone =="12" && check == "512GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '512GB' || typeName2 != '12' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkIphone =="12" && check == "256GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '256GB' || typeName2 != '12' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkIphone =="12" && check == "128GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName != '128GB' || typeName2 != '12' ){
				document.getElementsByClassName("type")[i].style.display = "none"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	//
	
	if(checkIphone =="none" && check == "none"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if( typeName2 == '11' || typeName2 == '12' ){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
		}
	}
	else if(checkIphone =="none" && check == "512GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName == '512GB' && typeName2 == "11"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else if(typeName == '512GB' && typeName2 == "12"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "none"
			}
		}
	}
	else if(checkIphone =="none" && check == "256GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName == '256GB' && typeName2 == "11"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else if(typeName == '256GB' && typeName2 == "12"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "none"
			}
		}
	}
	else if(checkIphone =="none" && check == "128GB"){
		for(var i = 0 ; i < count;i++){
			var typeName = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type3")
			var typeName2 = document.getElementsByClassName("itemNameMenu")[i].getAttribute("data-type2")
			if(typeName == '128GB' && typeName2 == "11"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else if(typeName == '128GB' && typeName2 == "12"){
				document.getElementsByClassName("type")[i].style.display = "block"
			}
			else{
				document.getElementsByClassName("type")[i].style.display = "none"
			}
		}
	}
}

function resetLoc(){
	var x = document.getElementsByTagName("select").length
	if(x != 3){
		document.getElementById("typeCheck2").removeChild(typeRemove);
		document.getElementById("typeCheck2").removeChild(typeRemoveGB);


		typeRemoveGB = document.createElement("select")
		typeRemoveGB.setAttribute("id","typeGb")
		typeRemoveGB.setAttribute("oninput","typeCheckGb()")
		document.getElementById("typeCheck2").appendChild(typeRemoveGB);

		opt = document.createElement("option")
		opt.setAttribute("value","none")
		opt.innerText = "None"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","512GB")
		opt.innerText = "512GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","256GB")
		opt.innerText = "256GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","128GB")
		opt.innerText = "128GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","64GB")
		opt.innerText = "64GB"
		document.getElementById("typeGb").appendChild(opt);

		opt = document.createElement("option")
		opt.setAttribute("value","32GB")
		opt.innerText = "32GB"
		document.getElementById("typeGb").appendChild(opt);

		typeCheck()
		typeCheckGb()
		var x = document.getElementsByTagName("select").length
		if(x != 2){
			document.getElementById("typeCheck2").removeChild(typeRemove);
			document.getElementById("typeCheck2").removeChild(typeRemoveGB);
	
	
			typeRemoveGB = document.createElement("select")
			typeRemoveGB.setAttribute("id","typeGb")
			typeRemoveGB.setAttribute("oninput","typeCheckGb()")
			document.getElementById("typeCheck2").appendChild(typeRemoveGB);
	
			opt = document.createElement("option")
			opt.setAttribute("value","none")
			opt.innerText = "None"
			document.getElementById("typeGb").appendChild(opt);
	
			opt = document.createElement("option")
			opt.setAttribute("value","512GB")
			opt.innerText = "512GB"
			document.getElementById("typeGb").appendChild(opt);
	
			opt = document.createElement("option")
			opt.setAttribute("value","256GB")
			opt.innerText = "256GB"
			document.getElementById("typeGb").appendChild(opt);
	
			opt = document.createElement("option")
			opt.setAttribute("value","128GB")
			opt.innerText = "128GB"
			document.getElementById("typeGb").appendChild(opt);
	
			opt = document.createElement("option")
			opt.setAttribute("value","64GB")
			opt.innerText = "64GB"
			document.getElementById("typeGb").appendChild(opt);
	
			opt = document.createElement("option")
			opt.setAttribute("value","32GB")
			opt.innerText = "32GB"
			document.getElementById("typeGb").appendChild(opt);
	
		}
	}
}