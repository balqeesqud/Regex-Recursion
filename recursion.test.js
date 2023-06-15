
  
function division(number, dividedBy) {
  if (dividedBy === 0) {
    return 0; 
  }
  let z = 0;
  let x = Math.abs(number);
  let y = Math.abs(dividedBy);

  while (x >= y) {
    x = x-y;
    z++;
  }
  if ((number < 0 && dividedBy > 0) || (number > 0 && dividedBy < 0)) {
    z = -z;
  }

  return z;

}
//division(number,dividedBy);

function pow(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 1 / pow(x, -n);
  }

  if (n % 2 === 0) {
    const result = pow(x, n / 2);
    return result * result;
  }

  return x * pow(x, n - 1);
}
//pow(x,n)
//console.log(pow(x,n))     

function fibonacci(n) {
    // Write you logic here.
       
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let fMinusTwo = 0;
  let fMinusOne = 1;
  let fibNTH = 0;

  for (let i = 2; i <= n; i++) {
    fibNTH = fMinusOne + fMinusTwo;
    fMinusTwo = fMinusOne;
    fMinusOne = fibNTH;
  }
return fibNTH;
}
//console.log(fibonacci(n)); 


describe("Test division", () => {
  test("Return the division result", () => {
      expect(division(10, 2)).toStrictEqual(5);
      expect(division(10, 0)).toStrictEqual(0);
      expect(division(0, 10)).toStrictEqual(0);

  })
});

describe("Test pow", () => {
    test("It should work as Math.pow(x,n)", () => {
        expect(pow(10, 2)).toStrictEqual(100);
        expect(pow(10, 0)).toStrictEqual(1);
        expect(pow(0, 0)).toStrictEqual(1);
    })
});

describe("Test fibonacci", () => {
    test("It should implement fibonacci series logic", () => {
        expect(fibonacci(0)).toStrictEqual(0);
        expect(fibonacci(1)).toStrictEqual(1);
        expect(fibonacci(2)).toStrictEqual(1);
        expect(fibonacci(3)).toStrictEqual(2);
        expect(fibonacci(4)).toStrictEqual(3);
    })
});