import { useState } from "react";

export const ManillaCard = ({ manilla }) => {
    const [colorSeleccionado, setColorSeleccionado] = useState(
        manilla.colores[0]
    );

    return (
        <div className="card">
            <img
                src={`../img/manilla-color-${colorSeleccionado}.jpg`}
                alt={`${manilla.titulo} color ${colorSeleccionado}`}
                className="card-image"
            />

            <div className="card-content">
                <h2 className="card-title">{manilla.titulo}</h2>
                <p className="card-description">{manilla.descripcion}</p>

                <div className="card-colors">
                    <span>Colores disponibles:</span>
                    <div className="colors">
                        {manilla.colores.map((color, i) => (
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
