$(document).ready(function() {
  $("form#countBy").submit(function(event) {
    event.preventDefault();

    var countToNumber = parseInt($("#numberOne").val());
    var countByNumber = parseInt($("#numberTwo").val());

    $("ul").html("");

    for (var index = countByNumber; index <= countToNumber; index += countByNumber) {
      $("ul").append("<li>" + index + "</li>");
      // $("#resultOutput").text(index ",")
    };

    if (countByNumber > countToNumber) {
      alert("You are attempting to count by a number that is larger than the number that will be counted to.");
    };

    if (isNaN(index)) {
      alert("Please enter a number and try again!");
    };



    console.log(countByNumber)
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
