export const nombre2string = function(n) {
    return n >= 1000
        ? n.toString().replace(/(\d*)(\d{3})/g, "$1 $2")
        : n.toString();
};
export const formatNombre = function(nombre) {
    return new Intl.NumberFormat("fr-FR", { maximumSignificantDigits: 6 })
        .format(nombre)
        .toString()
        .replace(/\./g, ",");
};

export const getNombre = function(ensemble) {
    switch (ensemble) {
        case "entier":
            return Math.floor(Math.random() * 100);
        default:
            return Math.floor(Math.random() * 2000) / 100;
    }
};
