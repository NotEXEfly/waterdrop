$(document).ready(function(){
	// --Удаление--
	$('tbody').on("click", ".delete",function(){
		let element = $(this);
		let delete_element = $(this).attr("data-id");
		// alert(delete_element);
		$.ajax({
			type: "POST",
			url: "../admin/delete_order.php",
			data: {"delete_element": delete_element},
			dataType:"text",
			success: function(data){
				// alert(data);
				if(data = 1) element.parent().hide("slow");
			}
		});
	});

	// --Динамическая подгрузка контента при скроле--
	let num = 20;
	let inProcess = false;

	//начальная подгрузка если не хватило высоты
	function loopFirstRequest(){
		setTimeout(function() {
			if($('#table-wrapper').outerHeight() < $(document).outerHeight() && !inProcess) {
				console.log('Начальная подгрузка');
				request();
				loopFunc();
			}
		}, 100)
	};
	loopFirstRequest();

	//подгрузка при скроле
	$(window).scroll(function(){
		if(($(window).scrollTop() + $(window).height()) >= $(document).height() && !inProcess){
			console.log('Подгрузка при скроле');
			request();
		}
	});

	//запрос к бд за заказами
	function request() {
		$.ajax({
			type: "GET",
			url: "../admin/load.php",
			data: {num: num},
			dataType:"text",
			beforeSend: function() {
				inProcess = true;
			},
			success: function(data){
				data = jQuery.parseJSON(data);

				if(data != null) {
					$.each(data, function(index, data) {
						$('tbody').append("<tr><td>" + data.id + 
							"</td><td>" + data.name + 
							"</td><td>" + data.phone + 
							"</td><td>" + data.date +
							 "</td><td>" + data.secondary_info +
							"</td><td class=\"delete\" data-id=\""+data.id+"\"></td></tr>");
					});

					inProcess = false;
					num += 10;
				}	
			}
		});
	}

});