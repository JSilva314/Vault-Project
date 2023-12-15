const input1 = document.querySelector("#code1");
const input2 = document.querySelector("#code2");
const input3 = document.querySelector("#code3");
const openBtn = document.querySelector("#unlock");
const response = document.querySelector("p");

// 1. Create the pseudocode explaining the excercise.
// 2. Create a string message to the user
// 3. Assign 3 variables to equal the combination for the lock.
// 4. Add comments throught the code explaining the process
// 5. Create a dialog box displaying the cault codes and text

//Below is the string message to the user

const message =
  "Dear User, You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//Below are the 3 constant variables that makeup the vault combination

const code1 = 20 / 2;
const code2 = 50 - 10;
const code3 = 30 + 9;

const secretCombination = `${code1}-${code2}-${code3}`;
console.log(secretCombination);

alert(`${message} ${secretCombination}`);

// Create a function that will check if combo is correct

const comboCheck = (num1, num2, num3) => {
  return `${num1}-${num2}-${num3}`;
};

// When the button is clicked check if combo is correct

openBtn.addEventListener("click", () => {
  const userInput = comboCheck(input1.value, input2.value, input3.value);
  console.log(userInput);
  if (userInput === secretCombination) {
    response.textContent = "Congrats! You've opened the safe.";
    response.style.color = "Green";
  } else {
    response.textContent = "Sorry, try again.";
    response.style.color = "Red";
  }
  document.querySelectorAll("input").forEach((ele) => (ele.value = ""));
});
