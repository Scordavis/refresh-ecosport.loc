// $(function() {

//  $('body').fadeOut(1500);

// });
$(document).ready(function() {


	// masked input
	$(function () {
	  $.mask.definitions['~'] = "[+-]";
	  //$("#date").mask("99/99/9999",{completed:function(){alert("completed!");}});
	  //$("#phone").mask("(999) 999-9999");
	  //$("#phoneExt").mask("(999) 999-9999? x99999");
	  $(".masked-input").mask("8(999)-999-99-99", {
	      placeholder: " "
	  });
	  //$("#tin").mask("99-9999999");
	  //$("#ssn").mask("999-99-9999");
	  //$("#product").mask("a*-999-a999", { placeholder: " " });
	  //$("#eyescript").mask("~9.99 ~9.99 999");
	  //$("#po").mask("PO: aaa-999-***");
	  //$("#pct").mask("99%");
	  //$("input").blur(function() {
	  //    $("#info").html("Unmasked value: " + $(this).mask());
	  //}).dblclick(function() {
	  //    $(this).unmask();
	  //});
	});


	// form switcher
	$('button[data-src="#form-callback"]').on('click', function() {
	  var metrika = $(this).data('fmetrika');
	  var header = $(this).data('fhead');
	  var description = $(this).data('fdescript');
	  var info = $(this).data('finfo');
	  $('.js-form-button').attr('onsubmit', metrika);
	  $('.js-form-heading').text(header);
	  $('.js-form-description').text(description);
	  $('.js-form [name=form_subject]').val(info);
	});


	$('a[data-src="#form-callback"]').on('click', function() {
	  var metrika = $(this).data('fmetrika');
	  var header = $(this).data('fhead');
	  var info = $(this).data('finfo');
	  var description = $(this).data('fdescript');
	  $('.popup-callback').attr('onsubmit', metrika);
	  $('.js-form-heading').text(header);
	  $('.js-form-description').text(description);
	  $('.popup-callback [name=form_subject]').val(info);
	});

// form thanks

	//E-mail Ajax Send
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "js/mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$('.wide-form__description--policy').addClass('hidden');
				$('.wide-form__success').removeClass('hidden');
				$('.wide-form__timeleft').addClass('hidden');
				$('.modal-form__thanks').addClass('active');
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
					$.fancybox.close();
					$('.wide-form__description--policy').removeClass('hidden');
					$('.wide-form__success').addClass('hidden');
					$('.wide-form__timeleft').removeClass('hidden');
					$('.modal-form__thanks').removeClass('active');
				}, 5000);
			});
			return false;
		});


		var headertext = [],
		headers = document.querySelectorAll(".feature th"),
		tablerows = document.querySelectorAll(".feature th"),
		tablebody = document.querySelector(".feature tbody");

		for(var i = 0; i < headers.length; i++) {
			var current = headers[i];
			headertext.push(current.textContent.replace(/\r?\n|\r/,""));
		}
		for (var i = 0, row; row = tablebody.rows[i]; i++) {
			for (var j = 0, col; col = row.cells[j]; j++) {
				col.setAttribute("data-th", headertext[j]);
			}
		};



});
