$(function () {
    console.log("Oops, a-Spaghett!");

    // $("#draggable").draggable();

    /* var $drag_counter = $("#event-drag"), */

    counts = 0;

    /* $("#resetGame").click(function () {
    location.reload()
  }); */

    $("#resetGame").click(function () {
        console.log("clicked button");
        counts = 0;

        $("span.count").text(counts);
        $("#gameOutput").text("");

        $("#draggable")
            .fadeOut(25)
            .animate({left: 0})
            .fadeIn(15);
    });

    $("#draggable").draggable({
        containment: "#mir",
        drag: function () {
            counts++;
            updateCounterStatus(counts);
        }
    });

    /* $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  }); */

    function updateCounterStatus(new_count) {

        var game_msg = "";

        if (new_count <= 80) {
            game_msg = "Drag Spaghett's face over Boromir's";
        } else if (new_count <= 156) {
            game_msg = "almost there...try to center it up";
        } else {
            game_msg = "YOU'VE BEEN SPOOKED! ;)";
            $("img").attr(
                "src",
                "https://ih1.redbubble.net/image.238979094.2214/st,small,507x507-pad,600x600,f8" +
                        "f8f8.u2.jpg"
            );
        }

        console.table("updating count soon...", new_count);

        $("#gameOutput").text(game_msg);
        $("span.count".text(new_count);
    }
});
