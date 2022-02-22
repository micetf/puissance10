$(document).ready(function() {
    var nombre2string = function(n) {
        return n >= 1000
            ? n.toString().replace(/(\d*)(\d{3})/g, "$1 $2")
            : n.toString();
    };

    var point2virgule = function() {
        $("#nombre").text(nombre2string($("#nombre").text()).replace(".", ","));
        $("#resultat").text(
            nombre2string($("#resultat").text()).replace(".", ",")
        );
    };
    var maj = function(op, puissance) {
        $("#nombre").text(
            $("#nombre")
                .text()
                .toString()
                .replace(",", ".")
        );
        op == "X"
            ? $("#resultat").text(
                  Math.round(
                      parseFloat($("#nombre").text()) * 1000 * puissance
                  ) / 1000
              )
            : $("#resultat").text(
                  Math.round(parseFloat($("#nombre").text()) * 100000) /
                      (100000 * puissance)
              );
        $("#resultat").text($("#resultat").text());
        point2virgule();
    };

    $("#facteur select").change(function() {
        switch (
            $(this)
                .find("option:selected")
                .val()
        ) {
            case "mille":
                maj("X", 1000);
                break;
            case "cent":
                maj("X", 100);
                break;
            case "dix":
                maj("X", 10);
                break;
            case "un":
                maj("X", 1);
                break;
            case "dixieme":
                maj(":", 10);
                break;
            case "centieme":
                maj(":", 100);
                break;
            case "millieme":
                maj(":", 1000);
                break;
        }
    });

    $("#decimal").click(function() {
        $("#nombre").text(Math.round(Math.random() * 2000) / 100);
        $("#facteur select").change();
        $(this).addClass("choix");
        $("#entier").removeClass("choix");
    });
    $("#entier").click(function() {
        $("#nombre").text(Math.round(Math.random() * 99));
        $("#facteur select").change();
        $(this).addClass("choix");
        $("#decimal").removeClass("choix");
    });

    $("#facteur select option").removeAttr("selected");
    $("#facteur select option[value=un]:first").attr("selected", "selected");
    $("#facteur select").change();
});
