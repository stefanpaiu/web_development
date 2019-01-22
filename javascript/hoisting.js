function fakeAjax(cb) {
    setTimeout(function () {
    }, 1000);
}

console.log('start');

fakeAjax(function (data) {
    console.log('ajax returned: ' + data);
});

console.log('end');

function processData(data) {
    console.log('I have processed the data: ' + data);
}

fakeAjax(processData);

function functionOne() {
}
var functionTwo = function () {
}

// Callbacks - happen after all waiting tasks in the queue are finished
//.....................................................................

const request = require('request');
request('https://www.somepage.com', function (error, response, body) {
    if (error) {
        // Handle error.
    }
    else {
        // Successful, do something with the result.
    }
});

const request = require('request');
function handleResponse(error, response, body) {
    if (error) {
        // Handle error.
    }
    else {
        // Successful, do something with the result.
    }
}
request('https://www.somepage.com', handleResponse);

// Adding messages & setTimeout function (the time given for the timeout, the second argument,
// is the minimum time after the callback function will run - waits for the events in the queue
// to finish)
//.............................................................................................

const s = new Date().getSeconds();

setTimeout(function () {
    // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
    console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
    if (new Date().getSeconds() - s >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }
}

// Promises = object that wraps an asynchronous operation and notifies when it’s done. This sounds
// exactly like callbacks, but the important differences are in the usage of Promises. Instead of
// providing a callback, a promise has its own methods which you call to tell the promise what will
// happen when it is successful or when it fails. The methods a promise provides are “then(…)” for
// when a successful result is available and “catch(…)” for when something went wrong.

// This is not a promise, but a function that returns a promise
someAsyncOperation(someParams)
    .then(function (result) {
        // Do something with the result
    })
    .catch(function (error) {
        // Handle error
    });

const axios = require('axios');
axios.get('http://www.somepage.com')
    .then(function (response) { // Reponse being the result of the first request
        // Returns another promise to the next .then(..) in the chain
        return axios.get('http://www.somepage.com/${response.someValue}');
    })
    .then(function response { // Reponse being the result of the second request
        // Handle response
    })
    .catch(function (error) {
        // Handle error.
    });