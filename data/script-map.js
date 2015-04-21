
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

            $.get("./data/nav.html", null,
            function(data)
                {
                var ulNode = $("#years", data);
                var docUlNode = document.adoptNode(ulNode[0]);
                $("#navi").html(ulNode);
                }, 'xml')
            .fail(function() {alert("Problem z załadowaniem nawigacji :(")})
            .done(function() {

                

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

                // alert("done");
            });
          })
        .fail(function() {
            alert( "Niestety nie udało się załadować map :(" );
          });




});

