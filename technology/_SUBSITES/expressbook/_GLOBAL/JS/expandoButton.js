
//this will cause the parent of any button matched to expand/contract
//works for multiple button/container sets per invocation
$('body').widgets_features_expando_button({
	buttonSelector:'.expandoButtonId',
	shrunkButtonClassName:'contractButton',
	expandedButtonClassName:'expandButton'
});