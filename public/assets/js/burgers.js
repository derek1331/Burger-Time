// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoure").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoure = $(this).data("newdevoure");

    var newDevouredState = {
      devoured: newDevoure
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed sleep to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#addburger [name=burger]").val().trim()
      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
