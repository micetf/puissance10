import { useState } from "react";
import { getNombre } from "../../utils/index.js";
import Ensemble from "./Ensemble.js";
import Facteur from "./Facteur.js";
import NombreFinal from "./NombreFinal.js";
import NombreInitial from "./NombreInitial.js";

function Tool() {
    const [ensemble, setEnsemble] = useState("entier");
    const [nombre, setNombre] = useState(getNombre(ensemble));
    const [facteur, setFacteur] = useState("fois10");

    function handleChange(facteur) {
        setFacteur(facteur);
    }
    function handleClick(ensemble) {
        setEnsemble(ensemble);
        setNombre(getNombre(ensemble));
    }
    return (
        <div className="container">
            <div className="row">
                <Ensemble actif={ensemble === "entier"} onClick={handleClick}>
                    entier
                </Ensemble>
                <Ensemble actif={ensemble === "decimal"} onClick={handleClick}>
                    decimal
                </Ensemble>
            </div>
            <NombreInitial nombre={nombre} />
            <Facteur facteur={facteur} onChange={handleChange} />
            <NombreFinal nombre={nombre} facteur={facteur} />
        </div>
    );
}

export default Tool;
