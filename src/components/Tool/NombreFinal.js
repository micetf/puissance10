import React from "react";
import { formatNombre } from "../../utils/index.js";
import { facteursByValue } from "./config.js";

function NombreFinal({ nombre, facteur }) {
    const nombreFinal = facteursByValue[facteur](parseFloat(nombre));
    return (
        <div className="row my-4">
            <div className="col d-grid gap-2">
                <div
                    className="badge bg-secondary  border border-dark border-3"
                    style={{ fontSize: "5rem" }}
                >
                    {formatNombre(nombreFinal)}
                </div>
            </div>
        </div>
    );
}

export default NombreFinal;
