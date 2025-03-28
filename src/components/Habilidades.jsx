import React from "react";
import './Habilidades.css';
const Habilidades =({ img, titulo, skills}) => {
    return(
        <div className="col-skills col-sm-12 col-md-6">
            <img src={img} alt="" className="card-img" />
            <div className="card-cont">
                <h2 className="titulo">{titulo}</h2>
                <div className="habilidades">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Habilidades;