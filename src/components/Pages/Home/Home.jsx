import { Anillos } from "../../elements/cards/anillos/Anillos"
import { Aretes } from "../../elements/cards/aretes/Aretes"
import { Cadenas } from "../../elements/cards/cadenas/Cadenas"
import { Dijes } from "../../elements/cards/dijes/Dijes"
import { Manillas } from "../../elements/cards/manillas/Manillas"
import { useState } from "react"
import "./css/home.css"


export const Home = () => {

    const [categoriaActiva, setCategoriaActiva] = useState("manillas");

    return (
        <div>

            <div className="botones-home-wrapper">
                <div className="botones-home">
                    <input
                        className="btn-home"
                        type="button"
                        value="Pulseras Tejidas"
                        onClick={() => setCategoriaActiva("manillas")}
                    />
                    <input
                        className="btn-home"
                        type="button"
                        value="Cadenas"
                        onClick={() => setCategoriaActiva("cadenas")}
                    />
                    <input
                        className="btn-home"
                        type="button"
                        value="Aretes"
                        onClick={() => setCategoriaActiva("aretes")}
                    />
                    <input
                        className="btn-home"
                        type="button"
                        value="Anillos"
                        onClick={() => setCategoriaActiva("anillos")}
                    />
                    <input
                        className="btn-home"
                        type="button"
                        value="Dijes"
                        onClick={() => setCategoriaActiva("dijes")}
                    />
                </div>
            </div>



            <div>
                {categoriaActiva === "manillas" && (
                    <>
                        <h3>Pulseras Tejidas <span>(Braided Bracelet)</span></h3>
                        <Manillas />
                    </>
                )}

                {categoriaActiva === "cadenas" && (
                    <>
                        <h3>Cadenas <span>(Chains)</span></h3>
                        <Cadenas />
                    </>
                )}

                {categoriaActiva === "aretes" && (
                    <>
                        <h3>Aretes <span>(Earrings)</span></h3>
                        <Aretes />
                    </>
                )}

                {categoriaActiva === "anillos" && (
                    <>
                        <h3>Anillos <span>(Rings)</span></h3>
                        <Anillos />
                    </>
                )}

                {categoriaActiva === "dijes" && (
                    <>
                        <h3>Dijes <span>(Dijes)</span></h3>
                        <Dijes />
                    </>
                )}
            </div>
        </div>
    )
}