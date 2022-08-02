import * as challenge from "./js11";

describe("Tests for the js11 challenge functions", () => {
  describe("greet function", () => {
    test("Should return the string 'Hello, nice to meet you'", () => {
      const output = challenge.greet();
      expect(output).toBe("Hello, nice to meet you");
    });
  });

  describe("sumTwoNumbers function", () => {
    test("Should return the sum of two numbers", () => {
      expect(challenge.sumTwoNumbers(1, 2)).toBe(3);
      expect(challenge.sumTwoNumbers(-1, 23)).toBe(22);
    });
  });

  describe("checkLarger function", () => {
    test("Should return a specific string if both numbers are equal", () => {
      expect(challenge.checkLarger(2, 2)).toBe("Both numbers are equal");
    });

    test("Should return a specific string if first number is greater than second number", () => {
      expect(challenge.checkLarger(2, 1)).toBe("2 is bigger than 1");
    });

    test("Should return a specific string if second number is larger than first number", () => {
      expect(challenge.checkLarger(1, 2)).toBe("2 is bigger than 1");
    });
  });

  describe("filterByLength function", () => {
    test("Should flter an array of names by removing larger names", () => {
      const namesArr = ["Rachel", "Jack", "Shrimpy"];
      expect(challenge.filterByLength(namesArr)).toStrictEqual([
        "Rachel",
        "Jack",
      ]);
    });
    test("Should flter an array of names by removing larger names", () => {
      const namesArr = [
        "Barky",
        "Marco",
        "Sumi",
        "Cade",
        "Marabout",
        "Skwadwaddle",
      ];
      expect(challenge.filterByLength(namesArr)).toStrictEqual([
        "Barky",
        "Marco",
        "Sumi",
        "Cade",
      ]);
    });

    test("Should return the sting 'Sorry, no valid names supplied' if no short names provided", () => {
      const largeNamesArr = ["Ezeriel", "Velimir"];
      expect(challenge.filterByLength(largeNamesArr)).toBe(
        "Sorry, no valid names supplied"
      );
    });
  });

  describe("reduceNumbers function", () => {
    test("Should reduce each number in the array by the reducer amount", () => {
      const numbersArr = [10, 20, 30];
      expect(challenge.reduceNumbers(numbersArr, 5)).toStrictEqual([5, 15, 25]);
    });

    test("Should return a number equal to or greater than 0", () => {
      const numbersArr = [1, 2, 3];
      expect(challenge.reduceNumbers(numbersArr, 2)).toStrictEqual([0, 0, 1]);
    });

    test("Should return a number equal to or less than 255", () => {
      const numbersArr = [100, 200, 300];
      expect(challenge.reduceNumbers(numbersArr, 2)).toStrictEqual([
        98, 198, 255,
      ]);
    });
  });
});
