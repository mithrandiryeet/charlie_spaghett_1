$(function () {
    console.log("oops, a-spaghett");
  
    // $("#draggable").draggable();
  
    counts = 0;
  
    $("#resetGame").click(function () {
      console.log("clicked button");
      counts = 0;
  
      $("span.count").text(counts);
      $("#gameOutput").text("");
  
      $("#draggable").fadeOut(20).animate({ left: 0 }).fadeIn(20);
    });
  
    $("#draggable").draggable({
      containment: "#spag-row",
      drag: function () {
        counts++;
        updateCounterStatus(counts);
      },
    });
  
    function updateCounterStatus(new_count) {
  
      var game_msg = "";
  
      if (new_count < 174) {
        game_msg = "'I thought it was someone's kid..' (keep going)";
      } else if (new_count == 174) {
        game_msg = "YOU DID NOT GET SPOOKED, GOOD JOB!";
      } else {
        game_msg = "GOT YA!";
        $("img").attr(
          "src",
          "https://ih1.redbubble.net/image.4377507143.6656/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
        );
      }
  
      console.table("updating count soon", new_count);
  
      $("#gameOutput").text(game_msg);
      $("span.count").text(new_count);
    }
  });