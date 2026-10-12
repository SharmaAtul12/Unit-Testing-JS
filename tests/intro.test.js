import {describe,test,it,expect} from "vitest";
import { max , fizzBuzz} from "../src/intro.js";

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
  })
})

describe('max', () => {
  it('should return the second argument if it is greater', () => {
    expect(max(1,2)).toBe(2);
  })
})

describe('max', () => {
  it('should return the first argument if both are equal', () => {
    expect(max(2,2)).toBe(2);
  })
})


//! Testing the fizzBuzz function

describe('fizzBuzz', () => {
  it('should return FizzBuzz if the number is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })
})

describe('fizzBuzz', () => {
  it('should return Fizz if the number is only divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })
})

describe('fizzBuzz', () => {
  it('should return Buzz if the number is only divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  })
})

describe('fizzBuzz', () => {
  it('should return number as a string if the number is not divisible by either 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1');
  })
})


