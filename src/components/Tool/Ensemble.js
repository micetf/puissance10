import React from "react";

function Ensemble({ children, actif, onClick }) {
    function handleClick(e) {
        e.preventDefault();
        onClick(children);
    }
    return (
        <div className="col d-grid gap-2">
            <button
                className={`btn btn-lg fs-4 btn-${
                    actif ? "primary" : "outline-secondary"
                }`}
                value="entier"
                onClick={handleClick}
            >
                Un nombre {children}
            </button>
        </div>
    );
}

export default Ensemble;
