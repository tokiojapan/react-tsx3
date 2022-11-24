/* eslint-disable @typescript-eslint/no-unused-vars */
/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array
let arr1: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

// tuple
let tuple: [number, string] = [5, "BB"];

// any
let any1: any = false;

// void
const funcA = (): void => {
  const test = "TEST";
};
const funcB = (): number => {
  const test = "TEST";
  return 5;
};

// null
let null1: null = null;

// undefined
let undef: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: "ABC" };
