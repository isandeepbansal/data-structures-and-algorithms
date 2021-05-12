// Write a recursive function that takes a string and reverse the string.

const reverse = (str) => {
  if (typeof str !== "string") return "Enter a valid string";

  if (str.length === 1) {
    return str[0];
  } else {
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
  }
};

console.log(reverse("sandeep bansal"));
