

if (location.hash) {
	target = $(location.hash);
	if (target.length) {
		$.scrollTo(target, 2000, {
			'axis': 'y',
			onAfter: function() {
				target.find('.expandoButtonIdClass').click()
			}
		});
	}

}
