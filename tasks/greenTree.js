const drawChristmasTree = (height) => {
	for ( i = 0; i < height; i++) {
		let tiers = '^'.repeat(2 * i + 1);
		let spaces = ' '.repeat(height - i - 1);
		console.log(spaces + tiers);
	}
}
drawChristmasTree(55, "Впиши высоту цифрами");