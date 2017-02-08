
(function ($) {
	"use strict"; // this function is executed in strict mode

	$(document).ready(function () {

		var contactForm = $('#contactForm');

			if ( contactForm.length ) {
				contactForm.validate({
					rules: {
						contactName: "required",
						contactEmail: {
							required: true,
							email: true
						},
						contactSubject: "required",
						contactMessage: "required"
					},
					errorPlacement: function (error, element) {
						return true;
					}
				});
			}


	});
})(jQuery);