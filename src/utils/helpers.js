// check if email is valid and return a boolean
export function isValidEmail(inputText) {
	const mailformat =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (inputText.match(mailformat)) {
		return true;
	} else {
		return false;
	}
}


// replaces moment.js locale
export function timeSince(date) {
	const seconds = Math.floor((new Date() - date) / 1000);
	let interval = seconds / 31536000;
	if (interval > 1) {
		return Math.floor(interval) < 2
			? Math.floor(interval) + ' year'
			: Math.floor(interval) + 'years';
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) < 2
			? Math.floor(interval) + ' month'
			: Math.floor(interval) + ' months';
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) < 2
			? Math.floor(interval) + ' day'
			: Math.floor(interval) + ' days';
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) < 2
			? Math.floor(interval) + ' hour'
			: Math.floor(interval) + ' hours';
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) < 2
			? Math.floor(interval) + ' minute'
			: Math.floor(interval) + ' minutes';
	}
	return Math.floor(seconds) < 2
		? Math.floor(seconds) + ' second'
		: Math.floor(seconds) + 'seconds';
}

