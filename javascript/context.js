var joe = {
  firstName: "Joe",
  lastName: "Eames",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(joe.fullName());

var dan = {
  firstName: "Dan",
  lastName: "Wahlin"
};

dan.stolenFullName = joe.fullName;

// Whenever a function is invoked, with a '.' syntax, whatever object is left to the dot,
// is the "this" in the function (very important to have the attributes of the first
// object: firtName and lastname)
// console.log(dan.stolenFullName());

var fullName = joe.fullName;
var firstName = "John";
var lastName = "Papa";
console.log(fullName());

$(function() {
  $(".all").click(function() {
    var that = this;
    $(".answer").each(function() {
      $(this).text($(that).text());
    });
  });
});
