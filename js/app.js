const jsz = function() {
	var inputs = Array.from(document.querySelectorAll('.jsz-signin-input')).forEach(function(input) {
		input.addEventListener('focus', function() {
			var label = input.previousElementSibling;
			label.classList.add('selected');
		});
		input.addEventListener('focusout', function() {
			if (input.value == '') {
				var label = input.previousElementSibling;
				label.classList.remove('selected');
			}
		})
	});
	document.getElementById('toggle-mode').addEventListener('click', function(e) {
		document.body.classList.toggle('dark-mode');
	})
}



window.onload = jsz();