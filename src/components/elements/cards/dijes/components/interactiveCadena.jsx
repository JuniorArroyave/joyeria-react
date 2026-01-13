import { useState } from "react";

export const DijesCard = ({ dijes }) => {
    const [colorSeleccionado, setColorSeleccionado] = useState(
        dijes.colores[0]
    );

    return (
        <div className="card">
            <img
                src={`${dijes.imagenBase}-${colorSeleccionado}.jpg`}
                alt={`${dijes.titulo} color ${colorSeleccionado}`}
                className="card-image"
            />

            <div className="card-content">
                <h2 className="card-title">{dijes.titulo}</h2>
                <p className="card-description">{dijes.descripcion}</p>

                <div className="card-colors">
                    <span>Colores disponibles:</span>
                    <div className="colors">
                        {dijes.colores.map((color, i) => (
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
