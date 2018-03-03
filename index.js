var globalLogic = [];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(function q(){
  rl.question("> ", answer => {
    logicAnalyzer(answer);
		q();
	});
})();

function logicGen(num, array = []) {
  if (num == 0) {
    globalLogic.push(array);
    return;
  }

  --num;

  if (array.length == 0) {
    logicGen(num, [0]);
    logicGen(num, [1]);
  } else {
    logicGen(num, array.concat([0]));
    logicGen(num, array.concat([1]));
  }
}

function stringParser(string = "") {
  string = string.toUpperCase();
  let stringAux = string.toUpperCase();

  while (string.indexOf(".") != -1) string = string.replace(".", "&&");

  while (string.indexOf("+") != -1) string = string.replace("+", "||");

  while (string.indexOf("~") != -1) string = string.replace("~", "!");

  while (string.indexOf(" ") != -1) string = string.replace(" ", "");

  return {string, stringAux};
}

function stringToVars(string = "") {
  string = string.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 90) {
      string = string.substring(0, i) + string.substring(i + 1);
      i--;
    }
  }

  while (string.indexOf(" ") != -1) string = string.replace(" ", "");

  let stringVarArray = [];
  string.split("").map(strVar => {
    if (stringVarArray.indexOf(strVar) == -1) {
      stringVarArray.push(strVar);
    }
  });

  return stringVarArray;
}

function printLine(num) {
  let string = "";

  for (var i = 0; i < num; i++) string += "-";

  console.log(string);
}

function printResults(logicStringAux, logicVars, logicArrays, results) {
  printLine(logicVars.length * 4 + logicStringAux.length + 4);
  let str = "|";
  for (let i = 0; i < logicVars.length; i++) str += ` ${logicVars[i]} |`;
  str += ` ${logicStringAux} |`;
  console.log(str);
  printLine(logicVars.length * 4 + logicStringAux.length + 4);

  for (let j = 0; j < logicArrays.length; j++) {
    str = "|";
    for (let i = 0; i < logicVars.length; i++) str += ` ${logicArrays[j][i]} |`;

    let str2 = "";
    for (let k = 0; k < logicStringAux.length - 1; k++) {
      str2 += " ";
    }

    let index = Math.floor(logicStringAux.length / 2);
    str2 =
      str2.substring(0, index) + (results[j] ? 1 : 0) + str2.substring(index);

    str += ` ${str2} |`;

    console.log(str);
    printLine(logicVars.length * 4 + logicStringAux.length + 4);
  }
}

function logicAnalyzer(string = "") {
  globalLogic = [];
  let logicString = stringParser(string).string;
  let logicStringAux = stringParser(string).stringAux;
  let logicVars = stringToVars(string);
  logicGen(logicVars.length);
  let logicArrays = globalLogic;
  let results = [];

  //console.log(logicString, logicVars, logicArrays);

  logicArrays.map(arr => {
    logicVars.map((logicVar, index) => {
      eval(`${logicVar}=${arr[index]}`);
    });
    results.push(eval(logicString));
  });

  printResults(logicStringAux, logicVars, logicArrays, results);
}
