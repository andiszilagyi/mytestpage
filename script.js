/* global data */
// The data variable is available globally
// Its shape is:
// [
//    {
//       ...
//       ups: 123,
//       ...
//    },
//    ...
// ]

var chartElement = document.getElementById("myChart").getContext('2d');

// Create an array of labels for the data, ex. '< 1000'
var labels = ["less than 1000", "less than 10000", "less than 100000", "more than 100000"];

// Create an object or array to store the counted upvotes
// NB! In an array, the order of items must match the order of labels
var upvotes = {
  thousand: 0,
  tenThousand: 0,
  hundredThousand: 0,
  moreThanHundredThousand: 0
};

// Loop through the variable data, available from the data.js file
// for (???) {
//   check if the amount of upvotes is within the group we want to count
//   if it is, increment the count in that group
for (var i = 0; i < data.length; i = i + 1) {
  var ups = data[i].data.ups;
  if (ups < 1000) {
    upvotes.thousand = upvotes.thousand + 1;
  } else if (ups < 10000) {
    upvotes.tenThousand = upvotes.tenThousand + 1;
  } else if (ups < 100000) {
    upvotes.hundredThousand = upvotes.hundredThousand + 1;
  } else {
    upvotes.moreThanHundredThousand = upvotes.moreThanHundredThousand + 1;
  }
}

var dataset = {
  label: 'Upvotes',
  backgroundColor: ["#3e9511", "#8e5e22","#ab3433","#e8c344"], // Feel free to change these colours
  // Replace the empty data array with either the array you've already populated
  // Or create a new array using the object values that you counted into
  data: [upvotes.thousand, upvotes.tenThousand, upvotes.hundredThousand, upvotes.moreThanHundredThousand]
};

new Chart(chartElement, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [dataset]
    },
    options: {
      title: {
        display: true,
        text: 'Amount of upvotes for a picture'
      }
    }
});
