export const facteurs = {
    multiplicatifs: [
        { value: "fois1000", label: "x 1 000" },
        { value: "fois100", label: "x 100" },
        { value: "fois10", label: "x 10" },
        { value: "fois1", label: "x 1" },
    ],
    diviseurs: [
        { value: "sur1", label: ": 1" },
        { value: "sur10", label: ": 10" },
        { value: "sur100", label: ": 100" },
        { value: "sur1000", label: ": 1 000" },
    ],
};
export const facteursByValue = {
    fois1000: (n) => n * 1000,
    fois100: (n) => n * 100,
    fois10: (n) => n * 10,
    fois1: (n) => n,
    sur1000: (n) => n / 1000,
    sur100: (n) => n / 100,
    sur10: (n) => n / 10,
    sur1: (n) => n,
};
