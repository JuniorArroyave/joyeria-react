import { useState } from "react";

export const CadenaCard = ({ cadena }) => {
    const [colorSeleccionado, setColorSeleccionado] = useState(
        cadena.colores[0]
    );

    return (
        <div className="card">
            <img
                src={`${cadena.imagenBase}-${colorSeleccionado}.jpg`}
                alt={`${cadena.titulo} color ${colorSeleccionado}`}
                className="card-image"
            />

            <div className="card-content">
                <h2 className="card-title">{cadena.titulo}</h2>
                <p className="card-description">{cadena.descripcion}</p>

                <div className="card-colors">
                    <span>Colores disponibles:</span>
                    <div className="colors">
                        {cadena.colores.map((color, i) => (
                            <span
                                key={i}
                                className={`color ${color} ${
                                    color === colorSeleccionado ? "active" : ""
                                }`}
                                onClick={() => setColorSeleccionado(color)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <button className="card-button">Hacer Pedido</button>
            </div>
        </div>
    );
};
