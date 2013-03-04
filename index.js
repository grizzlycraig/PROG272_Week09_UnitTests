/**
 * @author craig.mills
 */



CGMApp.Main = (function() {
	'use strict';

	//var CGMutil = new CGMApp.Utility(); 
	
	// Application Constructor
	function Main() {
		// any constructor code...
		this.initialize;
	}

	Main.prototype.initialize = function() {
		console.log("CGM initialize called.");
		//showDirectories();
		//var dirEntry = new directoryEntry();
		//showDirectories(dirEntry);
	};

		
	
	console.log('CGM Received Event: ');

	return CGMApp;
})();


console.log("CGM: MIDDLE in document ready...");


/*

function square(a) {
	return a*a;
}

function multiply(a,b) {
	return a*b;
}

*/


// NOW: the tests (using the module pattern still?)
// ?? HOW would we the QUnit to recognize the test if it's embedded in a Utility piece?
// ? Put the QUnit stuff into a module of its own, a subset of CGMApp like Utility is???

/*
// Test FAILURE FIRST as a part of writing the tests first (TDD, Test First, Agile programming...)
// This test is "intentionally left blank" to fail.
test("Multiply", function() {
});
*/

// "Sanity check" test... 
test("GottaPass", function(){
	ok(true, true);
});

// COMMENT OUT this function to see the green 'all is okay' bar at QUnit top o' page
// Test an ERROR squaring a number, just to mix it up a bit...
test("TestAnErrorSquaring", function() {
	var expected = 44;
	var CGMutil = new CGMApp.Utility();
	var actual = CGMutil.square(7);
	equal(expected, actual, "This test intentionally SHOULD fail.");
});

// Test squaring a number
test("TestASquare", function() {
	var expected = 121;
	var CGMutil = new CGMApp.Utility();
	var actual = CGMutil.square(11);
	equal(expected, actual, "This test should take 11 times 11.");
});

// Test adding two numbers
test("TestAdding", function() {
	var expected = 31;
	var CGMutil = new CGMApp.Utility();
	var actual = CGMutil.add(24,7);
	equal(expected, actual, "Adding two numbers.");
});

// Test subtracting two numbers
test("TestSubtract", function() {
	var expected = 31;
	var CGMutil = new CGMApp.Utility();
	var actual = CGMutil.subtract(38,7);
	equal(expected, actual, "Subtracting two numbers.");
});

// Now we test a multiply...
test("Multiply", function() {
	var expected = 24;
	var CGMutil = new CGMApp.Utility();
	var actual = CGMutil.multiply(3,8);
	equal(expected, actual, "Multiply message");
});

// Now we test a divide...
test("Divide", function() {
	var expected = 1.50;
	var CGMutil = new CGMApp.Utility();
	var actual = CGMutil.divide(3,2);
	equal(expected, actual, "Divide message");
});

// COMMENT OUT this function to see the green 'all is okay' bar at QUnit top o' page
// Test a divide by zero just to see what it looks like.....
test("The Impossible Divide", function() {
	var expected = 9999;
	var CGMutil = new CGMApp.Utility();
	var actual = CGMutil.divide(3,0);
	equal(expected, actual, "Impossible Divide message");
});




// Just some quickie sample tests!!
/*
test("Test01", function() {
	//ok(true==false, true);
	equal(true, false, "true isn't false!");
});

test("Test02", function() {
	equal(true,"My", "You can't HANDLE the truth!!");
});
*/


