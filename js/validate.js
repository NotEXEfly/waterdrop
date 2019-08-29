
$(document).ready(function(){
	// --- маска ---
	$("#user_phone").mask("8 (999) 999 99 99");
  $("#modal_user_phone").mask("8 (999) 999 99 99");

  // --- валидация ---
	//валидация при нажатии клавиш
	$("#user_name").keyup(function(){
		keyupValidation(this);
	});
	$("#modal_user_name").keyup(function(){
		keyupValidation(this);
	});

	//валидация при нажатии кнопки
  $("#submit_btn").click(function(){
  	buttonSendValidation("#user_name", "#user_phone");
  });

  $("#modal_submit_btn").click(function(){
  	buttonSendValidation("#modal_user_name", "#modal_user_phone");
  });

});

function buttonSendValidation(user_name, user_phone){
	let name = $(user_name).val();
	let phone = $(user_phone).val();
	

	if(checkValidateNumber(phone)) $(user_phone).removeClass("bad-info");
	else $(user_phone).addClass("bad-info");
	if(checkValidateName(name)) $(user_name).removeClass("bad-info");
	else $(user_name).addClass("bad-info");

	if(checkValidateName(name) && checkValidateNumber(phone)) {
		request(name, phone);
		//имитация клика на кнопку при отправке формы на основном окне
  	$('.products-btn').trigger('click');
	}
}

function keyupValidation(arg){
		let name = $(arg).val();
		if(checkValidateName(name)) $(arg).removeClass("bad-info");
  	else $(arg).addClass("bad-info");
}

function request(name, phone){
	if (!SECONDARY_INFO) {SECONDARY_INFO = ""}
	$.ajax({
		type: "POST",
		url: "../php/orders.php",
		data: {name: name, phone: phone, secondary_info: SECONDARY_INFO},
		dataType:"text",
		success: function(data){
			if(data == 1){
				$(".overlay .content").html('<span class="okay-message">Спасибо за заказ!</span>');
				$("#user_name").val('');
				$("#user_phone").val('');
			}
			else
				$(".overlay .content").html('<span class="okay-message"><p>Произошла ошибка :(</p><p>Попробуйте еще.</p></span>'+data);

			SECONDARY_INFO = "";	
		}
	});
}

function checkValidateName(name){
	var reg = /^[a-zA-Zа-яА-Я ]+$/;
	// console.log(name.search(reg));
	if(name.search(reg) == 0 && name.length > 2 && name.length < 13) return true;
	else return false;
}

function checkValidateNumber(phone){
	if(phone.length == 17) return true;
	else return false;
}