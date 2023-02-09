$(function () {
  console.log("Oops, a-Spaghett!");

  // $("#draggable").draggable();

  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#resetGame").click(function () {
    location.reload()
  });

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {

    var game_msg = "";

    if (new_count <= 80) {
      game_msg = "Drag Spaghett's face over Boromir's";
    } else if (new_count <= 156) {
      game_msg = "almost there...try to center it up";
    } else {
      game_msg = "YOU'VE BEEN SPOOKED! ;)";
      $("img").attr(
        "src",
        "https://ih1.redbubble.net/image.238979094.2214/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});
