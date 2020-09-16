const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.container img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

previews.forEach((previews) => {
	previews.addEventListener('click', () => {
		modal.classList.add('open');
		original.classList.add('open');
		//dynamic change in text and image
		const originalSrc = previews.getAttribute('data-original');
		original.src = `./Images/Proposal Photos/${originalSrc}`;
	});
});

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modal.classList.remove('open');
		original.classList.remove('open');
	}
});
