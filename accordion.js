document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.offer__accordion-item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.offer__accordion-item__trigger');
			const content = self.querySelector('.offer__accordion-item__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				content.style.maxHeight = null;
                self.classList.toggle('open');
			}
		});
	});
});