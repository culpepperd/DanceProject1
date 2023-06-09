// Waltz Object
var waltz = {
	name: "Waltz",
	category: "Smooth",
	attributes: ["Floating", "Expansive", "Full"],
	bronze1SF: ["Left Box Turn", "Underarm Turn Right", "Promenade Hesitation"],
	bronze2SF: ["Basic Twinkle", "Change Turns"]
};

// Tango Object

// Foxtrot Object

// main function
function runProgram() {
	usrInput = prompt("Which dance would you like to learn about?");

	if (usrInput == "Waltz") {
		printWaltzSF();
	} else if (usrInput == "Tango") {
		// printTangoSF
	} else if (usrInput == "Foxtrot") {
		// printFoxSF
	}
}

// function call to print Waltz school figures
function printWaltzSF() {
	var count = 1;
	// for loop to iterate through and print array
	for (var i = 0; i < waltz.bronze1SF.length; i++) {
		console.log("School Figure " + count + ": " + waltz.bronze1SF[i]);
		count++;
	}
}

// function call to print Tango school figures
function printTangoSF() {
	var count = 1;
	// for loop to iterate through and print array
	for (var i = 0; i < tango.bronze1SF.length; i++) {
		console.log("School Figure " + count + ": " + tango.bronze1SF[i]);
		count++;
	}
}

// function call to print Foxtrot school figures
function printFoxtrotSF() {
	var count = 1;
	// for loop to iterate through and print array
	for (var i = 0; i < foxtrot.bronze1SF.length; i++) {
		console.log("School Figure " + count + ": " + foxtrot.bronze1SF[i]);
		count++;
	}
}

runProgram();