import { useState } from "react";

export const PedidoModal = ({
    visible,
    onClose,
    manilla,
    colorSeleccionado
}) => {
    const [talla, setTalla] = useState("");

    if (!visible) return null;

    const numeroWhatsApp = "3167906618";

    const mensajeWhatsApp = `Buen dia, Quisiera realizar un pedido de:

Producto: ${manilla.titulo}
Color: ${colorSeleccionado}
Talla: ${talla}

A esta direccion: `;

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        mensajeWhatsApp
    )}`;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Realizar pedido</h3>

                <p>
                    <strong>Producto: </strong> {manilla.titulo}
                </p>
                <p>
                    <strong>Color: </strong> {colorSeleccionado}
                </p>

                <label>
                    Talla:
                    <select
                        value={talla}
                        onChange={(e) => setTalla(e.target.value)}
                    >
                        <option value="">Selecciona una talla</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </label>

                <div className="modal-actions">
                    <button className="btn-cancel" onClick={onClose}>
                        Cancelar
                    </button>

                    <a
                        href={linkWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="btn-confirm"
                            disabled={!talla}
                        >
                            Realizar pedido
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
