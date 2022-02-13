import "./Portfolio.css";
import angular from "../../assets/angular.png";
import kego from "../../assets/kego_screen.png";
import tm_screen from "../../assets/tm_screen.PNG";
import bm_screen from "../../assets/bm_screen.PNG";
import nanah_screen from "../../assets/nanah_screen.png";
import motrama_screen from "../../assets/motrama_screen.png";
import wakeapp from "../../assets/wakeapp.jpg";
import git from "../../assets/git.jpg";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Portfolio = () => {
  return (
    <div className="portfolioMain">
      <div className="cards">
        <div className="kego">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={kego} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>kego.de</MDBCardTitle>
              <MDBCardText>
                JavaScript, React.js, Bootstrap, REST, GitHub
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: '#1B1B1B' }} href='https://www.google.de'>Go To Website</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="tm">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={tm_screen} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>TechManager</MDBCardTitle>
              <MDBCardText>
              JavaScript, Vue, Firebase, i18n, Android Studio, xcode, BitBucket, Jira
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: '#1B1B1B' }} href='https://www.wertgarantie.de/techmanager'>Go To Website</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="bm">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={bm_screen} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>BikeManager</MDBCardTitle>
              <MDBCardText>
              JavaScript, Vue, Firebase, i18n, Android Studio, xcode, BitBucket, Jira
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: '#1B1B1B' }} href='https://www.wertgarantie.de/bikemanager'>Go To Website</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="nanah">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={nanah_screen} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>naNah</MDBCardTitle>
              <MDBCardText>
               JavaScript, Angular, Capacitor, Webpack, Three.js, Android Studio, xcode, Jira, BitBucket
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: '#1B1B1B' }} href='https://www.1klang.mobi/stories/nanah-app-fur-hannover'>Go To Website</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="motrama">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={motrama_screen} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Motorama Hannover</MDBCardTitle>
              <MDBCardText>
              Wordpress, MySQL, PHP, CSS
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: '#1B1B1B' }} href='https://www.motorama-hannover.de'>Go To Website</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="qt">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={git} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Qt Image Editor</MDBCardTitle>
              <MDBCardText>
                C++, Qt
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: '#1B1B1B' }} href='https://github.com/bjkerim/cg2Projekt'>Go To Repo</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="WakeApp">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={wakeapp} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>WakeApp</MDBCardTitle>
              <MDBCardText>
                Android Studio, Java, MySQL
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: '#1B1B1B' }} href='https://github.com/kerimio/wakeapp'>Go To Repo</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="motorama">
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={angular} fluid alt="..." />
              <a>
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
