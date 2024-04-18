const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
context.textBaseline = "bottom";
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const consolasWidth = 1126/2048 * 18;

let showHints=false;
let userSelected = [];
let showArrow = false;
let lessonNum = 0;
let stage = 0;


function displayIDE() {
    displayMenuBar();
    displayEditorArea();
    displayFileExplorer();
	displayConsoleArea();
}

function displayMenuBar() {
    // Draw menu bar
    context.fillStyle = '#f0f0f0';
    context.fillRect(0, 0, canvasWidth, canvas.height*0.1);

    // Add menu items
    context.fillStyle = '#000';
    context.font = '18px Consolas';
    context.fillText('File', 10, 30);
    context.fillText('Edit', 70, 30);
    context.fillText('View', 130, 30);
    context.fillText('Run ', 190, 30);
    context.fillText('Help', 250, 30);
    // Add more menu items as needed
}

function displayLineNumbers() {
	context.fillStyle = '#888';
    context.font = '18px Consolas';
    for (let i = 1; i <= 17; i++) { // Displaying 17 lines
        context.fillText(i, 5, 50 + i * 20);
    }
	
	// Add line separator
	context.strokeStyle = '#ccc';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(30, 50); // Start at the top-left corner of the editor area
    context.lineTo(30, canvas.height*0.8); // End at the bottom-left corner of the editor area
    context.stroke();
}

function displayEditorArea() {
    context.fillStyle = '#fff';
    context.fillRect(0, canvas.height*0.1, canvasWidth*0.75, canvas.height*0.8);
	
	displayLineNumbers(context)
}

function displayFileExplorer() {
    context.fillStyle = '#eaeaea';
    context.fillRect(canvasWidth*0.75, canvasHeight*0.1, canvasWidth*0.25, canvasHeight*0.9);

    // Add text
    context.fillStyle = '#000';
    context.font = '14px Consolas';
    context.fillText('File Explorer', 620, 100);
}

function displayConsoleArea() {
    context.fillStyle = '#ccc';
    context.fillRect(0, canvasHeight*0.8, canvasWidth*0.75, canvasHeight*0.2);
}

function displayCode(code) {
    context.fillStyle = '#000';
    context.font = '18px Consolas';
	let currentLine = 0;
    let currentChar = 0;
	let lastTime = 0;
	
	function printCode(timestamp) {
        // Check if animation completed
        if (currentLine === code.length) {
            return;
        }
		
		const deltaTime = timestamp - lastTime;
		const speed = 40;
		if (deltaTime >= speed) {

            // Print next character
			if (currentChar < code[currentLine].length) {
				context.fillText(code[currentLine][currentChar], 40 + (currentChar * consolasWidth), 70 + currentLine * 20);
			}

            // Move to next character or line
            currentChar++;
            if (currentChar > code[currentLine].length) {
                currentLine++;
                currentChar = 0;
            }

            // Update last frame time
            lastTime = timestamp;
        }
        requestAnimationFrame(printCode);
    }
	requestAnimationFrame(printCode);
}

function fillRoundedRect(x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.arcTo(x + width, y, x + width, y + height, radius);
    context.arcTo(x + width, y + height, x, y + height, radius);
    context.arcTo(x, y + height, x, y, radius);
    context.arcTo(x, y, x + width, y, radius);
    context.closePath();
    context.fill();
}

function drawArrow(x, y, width, height) {
    // Draw the main body of the arrow
	showArrow = true;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + width - height, y);
    context.lineTo(x + width - height, y - height / 2);
    context.lineTo(x + width, y + height / 2);
    context.lineTo(x + width - height, y + height + height / 2);
    context.lineTo(x + width - height, y + height);
    context.lineTo(x, y + height);
    context.closePath();
    context.fill();
}

function highlightSelectableCode(selectable) {
	for (let selection of selectable) {
		if (userSelected.includes(selection["index"])) {
			continue;
		}
		highlightSelection(selection, "#ff0", "#000");
	}
}

function highlightSelection(selection, BGcolour, FGcolour) {
	context.fillStyle = '#fff'; // first wipe clean
	context.fillRect(40+(selection["start"]*consolasWidth), 50 + selection["line"] * 20, consolasWidth * (selection["end"] - selection["start"]), 20);
	
	context.fillStyle = BGcolour;
	fillRoundedRect(40+(selection["start"]*consolasWidth), 50 + selection["line"] * 20, consolasWidth * (selection["end"] - selection["start"]), 20,10);
	
	context.fillStyle = FGcolour
	context.fillText(codeLessons[lessonNum]["code"][selection["line"]].slice(selection["start"],selection["end"]),
					 40+((selection["start"])*consolasWidth), 70 + selection["line"] * 20);
}

function runCode() {
	let incorrect = [];
    for (let index of userSelected) {
        let selection = codeLessons[lessonNum]["codeSelect"][index];
        if (selection["buggy"]) {
            highlightSelection(selection, "#0f0", "#000"); // Green if user correctly selected
        } else {
            highlightSelection(selection, "#f00", "#000"); // Red otherwise
			incorrect.push(index);
        }
    }
	displayConsoleArea();
	displayConsoleText2(incorrect.length);
	
	for (let i of incorrect) {
		const index = userSelected.indexOf(i);
		userSelected.splice(index, 1);
	}
}

function toggleHints() {
	showHints = true;
	highlightSelectableCode(codeLessons[lessonNum]["codeSelect"]);
}

function displayConsoleText2(incorrect) {
	context.fillStyle = '#000';
	context.font = '18px Consolas';
	const bugsPresent = codeLessons[lessonNum]["bugsPresent"];
	
	if (incorrect == 0) {
		context.fillText(`WELL DONE! YOU FOUND ALL ${bugsPresent} BUGS!`, 40, 440);
		context.fillStyle = '#fff';
		drawArrow(600, 400, 150, 50);
		context.fillStyle = "#000";
		context.fillText("Next Level", 610, 435);
		
	}
	else {
		context.fillText(`You correctly found ${bugsPresent - incorrect} bugs. There are ${incorrect} more to find`, 40, 440);
		context.fillText(`You have selected ${userSelected.length - incorrect}/${bugsPresent} sections to review`, 40, 460);
	}
}

function displayConsoleText() {
	context.fillStyle = '#000';
	context.font = '18px Consolas';
	const bugsPresent = codeLessons[lessonNum]["bugsPresent"];
	if (bugsPresent > 1) {
		context.fillText(`There are ${codeLessons[lessonNum]["bugsPresent"]} bugs in the code`, 40, 440);
	}
	else {context.fillText(`There is ${codeLessons[lessonNum]["bugsPresent"]} bug in the code`, 40, 440);}
	
	context.fillText(`You have selected ${userSelected.length}/${bugsPresent} sections to review`, 40, 460);
	if (bugsPresent - userSelected.length == 0) {
		context.fillText("Click Run to check your code", 40, 480);
	}
}

function userCodeSelection(lineNumber, charClicked) {
	for (let selection of codeLessons[lessonNum]["codeSelect"]) {
		if (lineNumber == selection["line"] &&
		(charClicked >= selection["start"] && charClicked < selection["end"])) {
			// User clicked a clickable part of code
			if (userSelected.includes(selection["index"])) {
				const index = userSelected.indexOf(selection["index"]);
				userSelected.splice(index, 1);
				if (showHints) {
					highlightSelection(selection, "#ff0", "#000");
				}
				else {
					highlightSelection(selection, "#fff", "#000");
				}
			}
			else {
				if (userSelected.length >= codeLessons[lessonNum]["bugsPresent"]) {
					break;
				}
				userSelected.push(selection["index"]);
				highlightSelection(selection, "#00f", "#fff");
			}
			displayConsoleArea();
			displayConsoleText();
			break;
		}
	}
}

function displayWhiteTextOnBlack() {
	context.fillStyle = "#000";
	context.fillRect(0, 0, canvasWidth, canvasHeight);
	
	context.fillStyle = "#fff";
	context.font = '18px Consolas';
	let currentLine = 0;
    let currentChar = 0;
	let lastTime = 0;
	let textOut = null;
	switch (stage) {
		case 0:
		textOut = theoryLessons[lessonNum];
		break;
		case 1:
		textOut = scenarioLessons[lessonNum];
		break;
		case 5:
		textOut = end_text;
		break;
	}
	
	
	function printText(timestamp) {
        // Check if animation completed
        if (currentLine === textOut.length) {
			if (stage == 5) {return;}
			drawArrow(600, 400, 150, 50);
			context.fillStyle = "#000";
			switch (stage) {
				case 0:
				context.fillText("View Scenario", 610, 435);
				break;
				case 1:
				context.fillText("View Code", 610, 435);
				break;
			}
            return;
        }
		
		const deltaTime = timestamp - lastTime;
		const speed = 40;
		if (deltaTime >= speed) {

            // Print next character
			if (currentChar < textOut[currentLine].length) {
				context.fillText(textOut[currentLine][currentChar], 40 + (currentChar * consolasWidth), 70 + currentLine * 20);
			}

            // Move to next character or line
            currentChar++;
            if (currentChar > textOut[currentLine].length) {
                currentLine++;
                currentChar = 0;
            }

            // Update last frame time
            lastTime = timestamp;
        }
        requestAnimationFrame(printText);
    }
	requestAnimationFrame(printText);
	
}

function callStage() {
	if (stage > 2) {
		stage = 0;
		lessonNum++;
		showHints = false;
	}		
	showArrow = false;
	if (lessonNum == 7) {stage = 5;}
	switch (stage) {
		case 0:
		case 1:
		case 5:
		displayWhiteTextOnBlack();
		break;
		case 2:
		displayIDE();
		displayCode(codeLessons[lessonNum]["code"])
		displayConsoleText();
		break;
	}
}

function userInputStage01(x, y) {
	if ((600 < x && x < 750) && (375 < y && y < 475)) {
		if (showArrow) {
			stage++;
			callStage();
		}
	}
}

function userInputStage2(x, y) {
	let charClicked = Math.floor((x-40)/consolasWidth);
    let lineNumber = Math.floor((y - 50) / 20);
	
	let hitInvalid = true;
	if ((lineNumber >= 0 && lineNumber < 17) &&
		(charClicked >= 0 && charClicked < 56)) {
		userCodeSelection(lineNumber, charClicked);
		hitInvalid = false;
	}
	else if ((185 < x && x < 230) && (10 < y && y < 32)) {
		if (codeLessons[lessonNum]["bugsPresent"] - userSelected.length == 0) {
			runCode();
		}
	}
	else if ((245 < x && x < 300) && (10 < y && y < 32)) {
		toggleHints();
	}
	else if ((600 < x && x < 750) && (375 < y && y < 475)) {
		if (showArrow) {
			stage++;
			userSelected = [];
			callStage();
		}
	}
	if (hitInvalid) {
		console.log(x,y,charClicked,lineNumber);
    }
}

canvas.addEventListener('click', function(event) {
    let x = event.clientX - canvas.getBoundingClientRect().left;
    let y = event.clientY - canvas.getBoundingClientRect().top;
	
	switch (stage) {
		case 0:
		case 1:
		userInputStage01(x, y);
		break;
		case 2:
		userInputStage2(x, y);
		break;
	}
});

callStage();
