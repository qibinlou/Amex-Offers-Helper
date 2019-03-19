function main() {
	const WAIT_TIME_MS = 5000;
	const offerButtons = document.getElementsByClassName('btn');
	for (let i = 0; i < offerButtons.length; ++i) {
		if (offerButtons[i].title == "Add to Card") {
			setTimeout(() => {
				try {
					console.log('Clicking ' + offerButtons[i].id);
					offerButtons[i].click();
				} catch (e) {
					console.error(e);
				}
			}, i * WAIT_TIME_MS)
		}
	}
};

main();
