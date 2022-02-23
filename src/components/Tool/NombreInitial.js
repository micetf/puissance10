import React from "react";
import { formatNombre } from "../../utils/index.js";

function NombreInitial({ nombre }) {
    return (
        <div className="row my-4">
            <div className="col d-grid gap-2">
                <div
                    className="badge bg-secondary border border-dark border-3"
                    style={{ fontSize: "5rem" }}
                >
                    {formatNombre(nombre)}
                </div>
            </div>
        </div>
    );
}

export default NombreInitial;
