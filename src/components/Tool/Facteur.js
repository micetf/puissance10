import React from "react";
import { facteurs } from "./config.js";

function Facteur({ facteur, onChange }) {
    function handleChange(e) {
        e.preventDefault();
        onChange(e.target.value);
    }
    const renderOption = ({ value, label }) => {
        return (
            <option key={label} value={value}>
                {label}
            </option>
        );
    };
    return (
        <div className="row">
            <div className="w-50 m-auto">
                <select
                    className="form-select bg-danger text-center fs-1"
                    onChange={handleChange}
                    value={facteur}
                >
                    <optgroup label="Multiplications">
                        {facteurs.multiplicatifs.map(renderOption)}
                    </optgroup>
                    <optgroup label="Divisions">
                        {facteurs.diviseurs.map(renderOption)}
                    </optgroup>
                </select>
            </div>
        </div>
    );
}

export default Facteur;
