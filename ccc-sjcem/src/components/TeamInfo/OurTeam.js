import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../css/OurTeam.scss";

//Images
import TechTeam from "../../assests/inaguration/tech.jpeg";
import DocumentTeam from "../../assests/inaguration/documentation.jpeg";
import DesignAndPRTeam from "../../assests/inaguration/pranddesgin.jpeg";
import SponserShipTeam from "../../assests/inaguration/sponsership.jpeg";
import OrientationTeam from "../../assests/inaguration/orientation.jpeg";
import cccFull from  "../../assests/inaguration/cccfull.jpeg";


const data = [
  {
    id: 1,
    name: "Techincal Team",
    image: TechTeam,
  },
  {
    id: 2,
    name: "Documentation Team",
    image: DocumentTeam,
  },
  {
    id: 3,
    name: "Design and PR Team",
    image: DesignAndPRTeam,
  },
  {
    id: 4,
    name: "Sponsership Team",
    image: SponserShipTeam,
  },
  {
    id: 5,
    name: "Orientation Team",
    image: OrientationTeam,
  },
  {
    id: 6,
    name: "Our Team",
    image: cccFull,
  },
];

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  return (
    <div>
      <div>
        <h2 className="headTitle p-5">Our Team</h2>
      </div>
      <div class="group_section">
        {data.map((team) => (
          <div class="group_card" key={team.id}>
            <h1>{team.name}</h1>
            <img src={team.image} alt="ccc_tech" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
