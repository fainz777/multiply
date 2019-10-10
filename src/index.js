module.exports = function multiply(first, second) {
  return (BigInt(first) * BigInt(second)).toString();
}


function getSinglMultiplication(str1, str2) {
  let singlMultiplicationsResult = [];

  for (let i = str1.length - 1; i >= 0; i--) {
    let temp = '';
    let tensCount = 0;

    for (let j = str2.length - 1; j >= 0; j--) {
      let multiplication = str1[i] * str2[j];
      multiplication += tensCount;

      if (j === 0) {
        temp = multiplication  + temp;
      } else {
        temp = multiplication % 10  + temp;
      }

      tensCount = parseInt(multiplication / 10);
    }
    singlMultiplicationsResult.push(temp);
  }

  return singlMultiplicationsResult;
}

function summarize(resultsArray, max) {
  let sum = '';
  let tensCount = 0;
  
  for (let i = max; i > 0; i--) {
    let temp = 0;
    
    for (let j = 0; j < resultsArray.length; j++) {
      temp += +resultsArray[j][i - 1];
    } 

    temp += tensCount;
    tensCount = parseInt(temp / 10);
    temp = temp % 10;
    sum = temp + sum;
  }
  
  return sum;
}

function normalize(resultsArray, max) {
  return resultsArray.map((item, i) => {
    item = item + Array(i + 1).join('0');
    item = Array(max - item.length + 1).join('0') + item; 
    return item;
  });
}

/**********************
	Second Solution
**********************/

const multiply2 = function multiply2(first, second) {
  let singlMultiplicationsResult = getSinglMultiplication(first, second);
  const arrLength = singlMultiplicationsResult.length;
  const max = singlMultiplicationsResult[arrLength - 1].length + arrLength - 1;
  singlMultiplicationsResult = normalize(singlMultiplicationsResult, max);
  const result = summarize(singlMultiplicationsResult, max);

  return result;
}

//module.exports = multiply2;