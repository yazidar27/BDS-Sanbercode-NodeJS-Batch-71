// object.js
// Array to Object
function arrayToObject(arr) {
  var now = new Date();
  var thisYear = now.getFullYear();

  for (var i = 0; i < arr.length; i++) {
    var firstName = arr[i][0];
    var lastName = arr[i][1];
    var gender = arr[i][2];
    var birthYear = arr[i][3];

    var person = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age:
        birthYear === undefined || birthYear > thisYear
          ? "Invalid Birth Year"
          : thisYear - birthYear,
    };

    console.log(i + 1 + ". " + firstName + " " + lastName + ":", person);
  }
}

var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];

arrayToObject(people);

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2025],
];

arrayToObject(people2);
