function fizzbuzzPrint( theNumber:number, Fizz:number, Buzz:number): string {
	var output:string = "";
	if (theNumber % Fizz == 0) {
		output = "Fizz";
	}
	if (theNumber % Buzz == 0) {
		output += "Buzz";
	}
	if (output == "") {
		output = theNumber.toString();
	}
	return output
}
function goThrough(start:number , end:number) {
	for (let i = start; i <= end; i++) {
		console.log(fizzbuzzPrint(i, 5, 7))
	}
}

    var start = new Date()
    goThrough(1, 350)
    var end = new Date()
	let diff = (end.getTime() - start.getTime())
	console.log("took: " + diff.toString)
