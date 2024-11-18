var grade1 = Number(prompt("Enter Client Side Scripting 1 Grade:"));
var grade2 = Number(prompt("Structured Programming 1 Grade:"));
var grade3 = Number(prompt("Structured Programming 2 Grade:"));
var grade4 = Number(prompt("Enter Client Side Scripting 2 Grade:"));
var grade5 = Number(prompt("Enter Project A Grade:"));

var result =
  "Your CS10 grade is : " +
  (grade1 + grade2 + grade3 + grade4 + grade5) / 5 +
  "%";
alert(result);
