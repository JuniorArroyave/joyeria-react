import { useState } from "react";
import { PedidoModal } from "../../../../Modal/pedidoModal.jsx";

export const AreteCard = ({ arete }) => {
    const [colorSeleccionado, setColorSeleccionado] = useState(
        arete.colores[0]
    );

    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <>
            <div className="card">
                <img
                    src={`${arete.imagenBase}-${colorSeleccionado}.jpg`}
                    alt={`${arete.titulo} color ${colorSeleccionado}`}
                    className="card-image"
                />

                <div className="card-content">
                    <h2 className="card-title">{arete.titulo}</h2>
                    <p className="card-description">{arete.descripcion}</p>

                    <div className="card-colors">
                        <span>Colores disponibles:</span>
                        <div className="colors">
                            {arete.colores.map((color, i) => (
                                <span
                                    key={i}
                                    className={`color ${color} ${color === colorSeleccionado ? "active" : ""
                                        }`}
                                    onClick={() => setColorSeleccionado(color)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    <button
                        className="card-button"
                        onClick={() => setMostrarModal(true)}
                    >
                        Hacer Pedido
                    </button>

                </div>
            </div>

            <PedidoModal
    visible={mostrarModal}
    onClose={() => setMostrarModal(false)}
    producto={arete.titulo}
    color={colorSeleccionado}
    tallas={["S", "M", "L"]}
/>

        </>
    );
};
