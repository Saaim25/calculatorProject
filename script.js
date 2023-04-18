var display = document.getElementById("inputBox");
var buttons = document.querySelectorAll('input[type="button"]');

var string = "";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    if (event.target.value == "=") {
      string = eval(string);
      display.value = string;
    } else if (event.target.value == "AC") {
      string = "";
      display.value = string;
    } else if (event.target.value == "DE") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string += event.target.value;
      display.value = string;
    }
  });
}
