import { useState } from "react";

export const PedidoModal = ({
    visible,
    onClose,
    producto,
    color,
    cantidad,
    tallas = []
}) => {
    const [talla, setTalla] = useState("");
    const [cantidadPedido, setCantidadPedido] = useState(cantidad || 1);

    if (!visible) return null;

    const numeroWhatsApp = "3167906618";

    const mensajeWhatsApp = `Buen día, quisiera realizar un pedido:

Producto: ${producto}
Color: ${color}
${talla ? `Talla: ${talla}` : ""}
Cantidad: ${cantidadPedido}`;

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        mensajeWhatsApp
    )}`;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Realizar pedido</h3>

                <p>
                    <strong>Producto:</strong> {producto}
                </p>
                <p>
                    <strong>Color:</strong> {color}
                </p>

                {tallas.length > 0 && (
                    <label>
                        Talla:
                        <select
                            value={talla}
                            onChange={(e) => setTalla(e.target.value)}
                        >
                            <option value="">Selecciona una talla</option>
                            {tallas.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </label>
                )}

                {!cantidad && (
                    <label>
                        Cantidad:
                        <input
                            className="input-cantidad"
                            min="1"
                            max="99"
                            type="number"
                            value={cantidadPedido}
                            onChange={(e) => setCantidadPedido(e.target.value)}
                        />
                    </label>
                )}

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
                            disabled={tallas.length > 0 && !talla}
                        >
                            Realizar pedido
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
