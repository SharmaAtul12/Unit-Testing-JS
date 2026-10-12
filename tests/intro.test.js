import {describe,test,it,expect} from "vitest";
import { max , fizzBuzz, calculateAverage, factorial} from "../src/intro.js";

describe('max', () => {
  it('should return the first argument if it is greater', () => {

    //* AAA Pattern ------------------------->

    // 1. Arrange :-> Turn on the TV  
    const a = 2;
    const b = 1;

    // 2. Act :-> Press the power button
    const result = max(a, b);

    // 3. Assert :-> Check if the TV is on
    expect(result).toBe(a);
  })
})

//! Writing in much simpler manner without AAA pattern

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2,1)).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1,2)).toBe(2);
  });

  it('should return the first argument if both are equal', () => {
    expect(max(2,2)).toBe(2);
  });
});


//! Testing the fizzBuzz function

describe('fizzBuzz', () => {
  it('should return FizzBuzz if the number is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })

  it('should return Fizz if the number is only divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })

  it('should return Buzz if the number is only divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  })

  it('should return number as a string if the number is not divisible by either 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1');
  })
})

//! Test Driven Development (TDD) approach 
// In TDD, we write the tests first and then implement the function to make the tests pass.

describe('calculateAverage', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate the average of an array with two elements', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it('should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  it('should return 1 if given 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 if given 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 if given 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 if given 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 if given 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should return undefined if given a negative number', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
