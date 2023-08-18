import ImageSudhanshu from "../../assests/ImageSudhanshu.jpg";
import ImageSaurabh from "../../assests/ImageSaurabhThakur.jpg";
import ImageAmit from "../../assests/ImageAmit.png";
import ImageGaurav from "../../assests/ImageGaurav.jpg";
import ImageBhakti from "../../assests/ImageBhakti.jpg";
import ImageSweta from "../../assests/ImageShweta.jpg";
import ImagePranay from "../../assests/ImagePranay.jpeg";
import ImageAman from "../../assests/ImageAman.jpeg";
import ImageSneha from "../../assests/ImageSneha.jpg";
import ImagePritiMiss from "../../assests/ImagePritiMiss.jpg"
import { ImEarth } from "react-icons/im";

const CoreTeam = () => {
  return (
    <div>
      <div className="teamTitle">
        
      <h2 className="headTitle p-5">Faculty co-ordinator</h2>
      <div className="teamMembersContainer">
          {/* Prit miss */}
          <div className="card">
            <div className="content">
              <div className="front">
                <img src={ImagePritiMiss} className="profile" alt=" Priti Rumao" />
                <h2 style={{ marginTop: "10px" }}> Priti Rumao</h2>
              </div>
              <div className="back from-bottom">
                <h2> Priti Rumao</h2>
                <h3>Faculty co-ordinator</h3>
            
              </div>
            </div>
          </div>
          </div>
        <h2 className="headTitle p-5">Core Team Members</h2>
        {/* Maybe some text */}
        <div className="teamMembersContainer">
          {/* Sudhanshu */}
          <div className="card">
            <div className="content">
              <div className="front">
                <img
                  src={ImageSudhanshu}
                  className="profile"
                  alt="Sudhanshu Diwedi"
                />
                <h2 style={{ marginTop: "10px" }}>Sudhanshu Diwedi</h2>
              </div>
              <div className="back from-bottom">
                <h2>Sudhanshu Diwedi</h2>
                <h3>President</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sudhanshu-kumar-dwivedi-696bbb1b6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/__sudhanshu_0007/?igshid=YmMyMTA2M2Y%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* Saurabh Thakur */}
          <div className="card">
            <div className="content">
              <div className="front">
                <img src={ImageSaurabh} className="profile" alt="Saurabh" />
                <h2 style={{ marginTop: "10px" }}>Saurabh Thakur</h2>
              </div>
              <div className="back from-bottom">
                <h2>Saurabh Thakur</h2>
                <h3>Vice president</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://saurabhthakur.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImEarth style={{ color: "white", fontSize: "30px" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/saurabh-thakur-36aa93160/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/__saurabh_thakur__?r=nametag"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/*Amit Patel */}
          <div className="card">
            <div className="content">
              <div className="front">
                <img src={ImageAmit} className="profile" alt="Amit Patel" />
                <h2 style={{ marginTop: "10px" }}>Amit Patel</h2>
              </div>
              <div className="back from-bottom tempJust">
                <h2>Amit Patel</h2>
                <h3>Secretary</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://github.com/Amit-sys-m"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/amit-patel-9bb978177/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teamMembersContainer">
          {/* Gaurav Tiwari */}
          <div className="card">
            <div className="content">
              <div className="front">
                <img
                  src={ImageGaurav}
                  className="profile"
                  alt="Gaurav Tiwari"
                />
                <h2 style={{ marginTop: "10px" }}>Gaurav Tiwari</h2>
              </div>
              <div className="back from-bottom">
                <h2>Gaurav Tiwari</h2>
                <h3>Technical Head</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://github.com/gtiwari912/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gauravtiwaricoder/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/gaurav_tiwari_7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* Bhakti Bailurkar*/}
          <div className="card">
            <div className="content">
              <div className="front">
                <img
                  src={ImageBhakti}
                  className="profile"
                  alt="Bhakti Bailurkar"
                />
                <h2 style={{ marginTop: "10px" }}>Bhakti Bailurkar</h2>
              </div>
              <div className="back from-bottom">
                <h2>Bhakti Bailurkar</h2>
                <h3>Design Head</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://github.com/BhaktidB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/in/bhakti-bailurkar-0a89b01b0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/*Shweta Mali*/}
          <div className="card">
            <div className="content">
              <div className="front">
                <img src={ImageSweta} className="profile" alt="Shweta Mali" />
                <h2 style={{ marginTop: "10px" }}>Shweta Mali</h2>
              </div>
              <div className="back from-bottom tempJust">
                <h2>Shweta Mali</h2>
                <h3>Orientation Head</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href=" https://www.linkedin.com/in/shweta-mali-280141246"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shwetamali1209?r=nametag"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* Pranay Pandare */}
          <div className="card">
            <div className="content">
              <div className="front">
                <img
                  src={ImagePranay}
                  className="profile"
                  alt="Pranay Pandare"
                />
                <h2 style={{ marginTop: "10px" }}>Pranay Pandare</h2>
              </div>
              <div className="back from-bottom tempJust">
                <h2>Pranay Pandare</h2>
                <h3>Sponsorship Head</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pranay-pandare-846413221/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/pranay_pandare?igshid=YmMyMTA2M2Y="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teamMembersContainer">
          {/* Aman Lohani */}
          <div className="card">
            <div className="content">
              <div className="front">
                <img src={ImageAman} className="profile" alt="Aman Lohani" />
                <h2 style={{ marginTop: "10px" }}>Aman Lohani</h2>
              </div>
              <div className="back from-bottom">
                <h2>Aman Lohani</h2>
                <h3>PR Head</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://github.com/AmanLohani"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aman-lohani"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/amanlohani298?igshid=YmMyMTA2M2Y="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* Sneha*/}
          <div className="card">
            <div className="content">
              <div className="front">
                <img src={ImageSneha} className="profile" alt="Sneha Uniyal" />
                <h2 style={{ marginTop: "10px" }}>Sneha Uniyal</h2>
              </div>
              <div className="back from-bottom">
                <h2>Sneha Uniyal</h2>
                <h3>Documentation Head</h3>
                <div className="card-social-icon center">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sneha-uniyal-2215081b4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-white icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/_snehauniyal_?igshid=YmMyMTA2M2Y="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white icons" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default CoreTeam;
