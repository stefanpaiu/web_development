function fullName(first, last) {
  var fullName = first;
  if (!!last && last.length > 0) {
    fullName += " " + last;
  }
  return fullName;
}

//-------------------------------

(function setup() {
  var utilities = getUtilities();
  var settings = getLocalStorageSettings();
  if (settings === undefined) {
    settings = getDefaultSettings();
  }
  window.app = {
    utilities: utilities,
    settings: settings
  };
})();

//-------------------------------

function ajax(cb) {
  setTimeout(function() {
    cb("Approved");
  }, 1000);
}

function showUserApproval() {
  var user = { name: "Joe Eames" };
  return function() {
    console.log(user.name);
  };
}

var newFunc = showUserApproval();
newFunc();
// user is out of scope but the function that calls it is not -> this will run successfully

// closures
function ajax(cb) {
  setTimeout(function() {
    cb("Approved");
  }, 1000);
}

var user = { name: "Joe Eames" };

ajax(function(status) {
  console.log(user.name + " is " + status);
});

user = { name: "John Papa" };
