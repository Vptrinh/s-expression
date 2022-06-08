//PROMPT: A command line program that acts as a simple calculator: it takes a single argument as an expression and prints out the integer result of evaluating it.

function sExpress(parse) {
  //Separate the terms and remove the brackets.
  function splitExpression(parse) {
    let removed = parse[0].replace(/[\])}[{(]/g, "");
    let result = removed.split(" ");

    for (i = 0; i < result.length; i++) {
      if ()
    }
    let onlyIntegers = result.map((str) => {
      return Number(str);
    });

    return onlyIntegers;
  }

  let newExpression = splitExpression(parse);
  console.log("newExpression: ", newExpression);

  function addition(array) {
    if (array.includes("add")) {
      const sum = array.reduce((totalSum, nextValue) => {
        if (typeof nextValue === "number" && isFinite(nextValue)) {
          return totalSum + nextValue;
        }
        //skip otherwise
        return totalSum;
      }, 0);

      console.log("Sum: ", sum);
      return sum;
    }
  }

  console.log("Add expression: ", addition(newExpression));
}

let parse = process.argv.slice(2);
console.log(sExpress(parse));
