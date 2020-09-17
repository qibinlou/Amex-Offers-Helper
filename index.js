function main() {
	const WAIT_TIME_MS = 2000;
	const offerButtons = document.querySelectorAll('button.btn.offer-cta');
	for (let i = 0; i < offerButtons.length; ++i) {
		setTimeout(() => {
			try {
				console.log('Clicking ' + offerButtons[i].id);
				offerButtons[i].click();
			} catch (e) {
				console.error(e);
			}
		}, i * WAIT_TIME_MS)
	}
};

main();
