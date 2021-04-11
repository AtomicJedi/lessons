function getNumbersMutiplikator(multiplikator, logConsole) {
	return function(start, end) {
		logConsole({Конфигурация: dataConfig});
		logConsole({мультипликатор: dataConfig.multiplikator});
		logConsole({старт: start, финиш: end});

		while (start <= end) {
			if (start % multiplikator == dataConfig.isEntry) {
				logConsole(start);
			}
			start++;
		}
	};
}

var logConsole = data => console.log(data);

var dataConfig = {
	multiplikator: 10,
	start: 45,
	end: 68,
	isEntry: false
};

let multiplikatorFor20 = getNumbersMutiplikator(dataConfig.modulus, logConsole);

window.dataConfig.modulus = 4;

let multiplikatorFor7 = getNumbersMutiplikator(dataConfig.modulus,	logConsole);

multiplikatorFor20(dataConfig.start, dataConfig.end);
multiplikatorFor20(20, 80);

window.dataConfig.isEntry = true;

multiplikatorFor7(dataConfig.start, dataConfig.end);
multiplikatorFor7(8, 41);