import { useRef } from "react";
import "./css/manillas.css";
import manillasList from "./list/listManillas.jsx";
import "boxicons";
import { ManillaCard } from "./components/interactiveManilla.jsx";

export const Manillas = () => {
    const carruselRef = useRef(null);

    const scroll = (direccion) => {
        const container = carruselRef.current;
        const card = container.querySelector(".card");
        if (!card) return;

        const cardWidth = card.offsetWidth + 20;

        container.scrollBy({
            left: direccion === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="carousel-wrapper">
            <button className="carousel-btn left" onClick={() => scroll("left")}>
                <box-icon name="chevron-left" color="#666666e1" />
            </button>

            <div className="card-container carousel" ref={carruselRef}>
                {manillasList.map((manilla, index) => (
                    <ManillaCard key={index} manilla={manilla} />
                ))}
            </div>

            <button className="carousel-btn right" onClick={() => scroll("right")}>
                <box-icon name="chevron-right" color="#666666e1" />
            </button>
        </div>
    );
};
