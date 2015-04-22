
$(document).ready(function() {


    $.get("./data/katomap.svg", null,
            function(data)
        {
        var svgNode = $("svg", data);
        var docNode = document.adoptNode(svgNode[0]);
        $("#mapc").html(docNode);
        },
        'xml')
    .done(function() {
            // $("#years").css("opacity", "1");
            $("#navi > div").slideDown(500, function() {
                // $("#years").css("display", "flex");
                resizeContent();
            });

            $("#b1865").click(function() {
            $("#l2014, #l1960, #l1910, #l1926").css("opacity", "0.0");
            $("#l1865").css("opacity", "1.0");
            $(".btt").removeClass("yearAcc");
            $("#b1865").addClass("yearAcc");
            return false;
            });

            $("#b1910").click(function() {
                $("#l2014, #l1960, #l1926, #l1865").css("opacity", "0.0");
                $("#l1910").css("opacity", "1.0");
                $(".btt").removeClass("yearAcc");
                $("#b1910").addClass("yearAcc");
                return false;
            });

            $("#b1926").click(function() {
                $("#l2014, #l1960, #l1910, #l1865").css("opacity", "0.0");
                $("#l1926").css("opacity", "1.0");
                $(".btt").removeClass("yearAcc");
                $("#b1926").addClass("yearAcc");
                return false;
            });

            $("#b1960").click(function() {
                $("#l2014, #l1926, #l1910, #l1865").css("opacity", "0.0");
                $("#l1960").css("opacity", "1.0");
                $(".btt").removeClass("yearAcc");
                $("#b1960").addClass("yearAcc");
                return false;
            });

            $("#b2014").click(function() {
                $("#l2026, #l1960, #l1910, #l1865").css("opacity", "0.0");
                $("#l2014").css("opacity", "1.0");
                $(".btt").removeClass("yearAcc");
                $("#b2014").addClass("yearAcc");
                return false;
            });


            resizeContent();
            $(window).resize(function() {
                resizeContent();
            });

            // alert("done");

          })
        .fail(function() {
            alert( "Niestety nie udało się załadować map :(" );
          });




});

function resizeContent() {
    $height = $("#navi").height();
    $("#mapc").css("margin-top", $height);
}
