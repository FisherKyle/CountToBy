$(document).ready(function() {
  $("form#countBy").submit(function(event) {
    event.preventDefault();

    var countToNumber = parseInt($("#countToInput").val());
    var countByNumber = parseInt($("#countByInput").val());

    $("ul").html("");

    if (countByNumber <= 0 || countToNumber <= 0) {
      alert("Please refrain from attempting to count to or by negative numbers. Stay posi.")
      clearThis(countByNumber);
      clearThis(countToNumber);
    };

    for (var currentValue = countByNumber; currentValue <= countToNumber; currentValue += countByNumber) {
      $("ul").append("<li>" + currentValue + "</li>");
    };

    if (countByNumber > countToNumber) {
      alert("You are attempting to count by a number that is larger than the number that will be counted to. Try again!");
    };

    if (isNaN(currentValue)) {
      alert("Your input held no numerical value. Please, try again.");
    };
  });
});









































    // var groceryList = ["word1", "word2", "word3", "word4", "word5", "word6"];
    // var organizedList = groceryList.map(function(groceryItem) {
    //   var newWords = $("#" + groceryItem).val();
    //   return newWords;
    // });
    // var sortDisplay = function() {
    //   $("form#sorter").hide();
    //   $("sorted-list").html("");
    //   organizedList.sort().forEach(function(item) {
    //     $("#sorted-list").append("<li>" + item + "</li>");
    //   });
    // }
    // sortDisplay();
