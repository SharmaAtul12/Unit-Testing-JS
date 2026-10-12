import {describe,test,it,expect} from "vitest";
import { max } from "../src/intro.js";

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

