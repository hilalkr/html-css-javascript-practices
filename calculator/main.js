const keys = document.querySelectorAll('.key'); // add event listeners to each button
const display_input = document.querySelector('.display .input'); //update the input section of the calculator display
const display_output = document.querySelector('.display .output'); //update the output section of the calculator display

let input = ""; //This field is left empty as it will be a value entered by the user.

for (let key of keys) {
	const value = key.dataset.key; //dataset: determine which action to perform when the button is clicked 

	key.addEventListener('click', () => {
		if (value == "clear") { //clears default values on the screen
			input = "";
			display_input.innerHTML = "";
			display_output.innerHTML = "";
		} else if (value == "backspace") {
			input = input.slice(0, -1);
			display_input.innerHTML = CleanInput(input); //formatting the input in a specific way before it is displayed
		} else if (value == "=") {
			let result = eval(PerpareInput(input)); // input is evaluated and the result is formatted

			display_output.innerHTML = CleanOutput(result);
		} else if (value == "brackets") {
			if (
				input.indexOf("(") == -1 || 
				input.indexOf("(") != -1 && // parenthesis check to determine operation priority
				input.indexOf(")") != -1 && 
				input.lastIndexOf("(") < input.lastIndexOf(")")
			) {
				input += "(";
			} else if (
				input.indexOf("(") != -1 && 
				input.indexOf(")") == -1 || 
				input.indexOf("(") != -1 &&
				input.indexOf(")") != -1 &&
				input.lastIndexOf("(") > input.lastIndexOf(")")
			) {
				input += ")";
			}

			display_input.innerHTML = CleanInput(input);
		} else {
			if (ValidateInput(value)) {
				input += value;  //CleanInput(new result)=> input+value
				display_input.innerHTML = CleanInput(input);
			}
		}
	})
}

function CleanInput(input) {
	let input_array = input.split(""); //(seperator) e.g: input = 5+5 function split it  ['5','+','5']
	let input_array_length = input_array.length;

	for (let i = 0; i < input_array_length; i++) {
		if (input_array[i] == "*") {
			input_array[i] = ` <span class="operator">x</span> `;
		} else if (input_array[i] == "/") {
			input_array[i] = ` <span class="operator">÷</span> `;
		} else if (input_array[i] == "+") {
			input_array[i] = ` <span class="operator">+</span> `;
		} else if (input_array[i] == "-") {
			input_array[i] = ` <span class="operator">-</span> `;
		} else if (input_array[i] == "(") {
			input_array[i] = `<span class="brackets">(</span>`;
		} else if (input_array[i] == ")") {
			input_array[i] = `<span class="brackets">)</span>`;
		} else if (input_array[i] == "%") {
			input_array[i] = `<span class="percent">%</span>`;
		}
	}

	return input_array.join(""); 
}

function CleanOutput (output) {
	let output_string = output.toString();
	let decimal = output_string.split(".")[1]; //seperates  decimal part and the integer part
	output_string = output_string.split(".")[0];

	let output_array = output_string.split("");
	
	if (output_array.length > 3) {
		for (let i = output_array.length - 3; i > 0; i -= 3) {
			output_array.splice(i, 0, ","); // adds a comma every three digits
		}
	}

	if (decimal) {
		output_array.push(".");
		output_array.push(decimal); //adds the decimal part of the number to the array
	}

	return output_array.join("");
}

function ValidateInput (value) {
	let last_input = input.slice(-1); //if the last input character is in the operators array,
	let operators = ["+", "-", "*", "/"]; // then the input is valid.

	if (value == "." && last_input == ".") { //if input=".", lastinput="." =>input invalid
		return false;
	}

	if (operators.includes(value)) {
		if (operators.includes(last_input)) { //if the last input is in the operator array,
			return false; //last input invalid
		} else {
			return true; // if the last input character is not an operator, last input valid 
		}
	}

	return true;
}

function PerpareInput (input) {
	let input_array = input.split("");

	for (let i = 0; i < input_array.length; i++) {
		if (input_array[i] == "%") { //When the % operator is entered,
			input_array[i] = "/100"; // it will be replaced by /100
		}
	}

	return input_array.join("");
}