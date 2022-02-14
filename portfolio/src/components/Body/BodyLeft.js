import './Body.css'
import concept from './../../assets/concept.png'
import design from './../../assets/design.png'
import coding from './../../assets/coding.png'

const BodyLeft = () => {
  return (
    <div className="elementsLeft">
      <div className="skillStack">
          <div className="conception">
          <img className="icon" src={concept}></img>
            <h1> Konzeption </h1>
            <p> Accesebility, Personas, User-Journey Mapping</p>
            <p> Durch meinen Studiengang und meiner Bachelorarbeit konnte ich mich intensiv in dieses Themengebiet einarbeiten und weiß, wie alle Stakeholder glücklich werden.</p>
          </div>
          <div className="design">
            <img className="icon" src={design}></img>
            <h1> Design </h1>
            <p> Adobe Creative Cloud, Figma, Bootstrap</p>
            <p> Von der Gestaltung einer Webseite bis zur Videoproduktion: In allen Bereichen habe ich Erfahrungen gesammelt und liebe die Pixel-perfekte Arbeitsweise.</p>
          </div>
          <div className="design">
          <img className="icon" src={coding}></img>
            <h1> Entwicklung </h1>
            <p> JavaScript, TypeScript, PHP, Java uvm.</p>
            <p> Nicht nur die gestaltete Oberfläche muss ein gutes Design haben! Genau so wichtig ist die gute und durchdachte Gestaltung des Algorithmus. Auf clean coding lege ich besonderen Wert.</p>
          </div>
      </div>
    </div>
  );
};

export default BodyLeft;