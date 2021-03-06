/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  const strArr1 = arr[0].toLowerCase().split("");
  const strArr2 = arr[1].toLowerCase().split("");
  const Obj = {};
  let possible = true;

  strArr1.forEach((char) => {
    if (!Obj[char]) Obj[char] = 0;
    Obj[char]++;
  });

  strArr2.forEach((char) => {
    if (!Obj[char]) possible = false;
  });
  console.log(possible);

  return possible;
}

// OR

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "neo"]);
