import React from "react";
import './Boton.css';

const VisualizarCv = () => {
    const handleVisualizar = () => {
        window.open( '/Cv.pdf', '_blank');
    };

    return(
        <button className="Boton" onClick={handleVisualizar}>
            Visualizar Cv
            <img src="/ojo.png" alt="ojo" style={{height: '22px', width: '22px'
            }} />
        </button>
        

    );

};

export default VisualizarCv;