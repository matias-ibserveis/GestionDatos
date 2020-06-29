export default function flash(element) {
	requestAnimationFrame(() => {
		element.style.transition = 'none';
		element.style.color = '#99f03d';
		

		setTimeout(() => {
			element.style.transition = 'color 1s';
			element.style.color = '';
			element.style.backgroundColor = '';
		});
	});
}