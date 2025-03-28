import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Habilidades from "./components/Habilidades";
import VisualizarCv from './components/VisualizarCv'


function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-nyb col-md-12">
            <h1 className="nombre">
              Felipe <br></br> Galindo
            </h1>
            <p>Desarrollador junior, con buena disposicion para aprender.</p>
            <VisualizarCv />
          </div>
        </div>
      </div>
      <div className="container-fluid-sobreMi">
        <div className="row">
          <div className="col-foto col-sm-12 col-md-4">
            <img className="foto" src="/foto.jpg" alt="" />
          </div>
          <div className="col-descripcion col-sm-12 col-md-8">
            <h1>SOBRE MI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              dolorum odio et, molestias fugiat sequi numquam explicabo eos
              excepturi, id aperiam facilis accusamus consequuntur itaque ex
              sapiente porro illo possimus. Reprehenderit necessitatibus ad
              voluptatum est porro provident deserunt maxime exercitationem in
              blanditiis similique culpa, quis atque facere corporis velit ipsam
              voluptatibus possimus accusamus, labore a. Autem recusandae ipsum
              placeat eaque! Repudiandae necessitatibus, velit tenetur dolores
              enim quasi, hic ducimus animi quod neque debitis tempora nulla
              fugit eum nemo voluptatum quisquam incidunt doloremque illum
              eligendi. Cumque velit non laboriosam accusamus maxime.
            </p>
          </div>
          <Habilidades
            img="/cod.png"
            titulo="Frontend"
            skills={["Html", "Css", "Javascript"]}
          />
          <Habilidades
            img="/prog.png"
            titulo="Backend"
            skills={["Python", "Mysql"]}
          />

          <Habilidades
            img="/herr.png"
            titulo="Herramientas"
            skills={["Figma", "Boopstrap", "React", "Django"]}
          />

          <Habilidades img="/eng.png" titulo="Idiomas" skills={["Ingles B2"]} />
        </div>
      </div>
    </>
  );
}

export default App;
