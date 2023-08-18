import { useState, useRef } from "react";
import { MdAdd, MdClose } from "react-icons/md";

import Layout from "../Layout";

import VerifyModal from "../Modals/VerifyModal";

const RegisterHackethon = () => {
  const [verification, setVerification] = useState(false);
  const [formComponents, setFormComponets] = useState([]);

  // const [teamdata, setTeamData] = useState({});

  let team_name = useRef("");

  let leader_name = useRef("");
  let leader_email = useRef("");
  let leader_phone = useRef("");
  let leader_course = useRef("");
  let leader_year = useRef("");

  const registerHandler = async (event) => {
    event.preventDefault();
    console.log(event.current.InputLeaderName.value)
    // setTeamData(data);
    // setVerification(true);
  };

  const closeModalHandler = () => {
    setVerification(false);
  };

  const addFormHandler = () => {
    setFormComponets([...formComponents, ""]);
  };

  const removeFormHandler = (index) => {
    const list = [...formComponents];
    list.splice(index, 1);
    setFormComponets(list);
  };

  return (
    <Layout>
      <div>
        <div className="backgroundTop">
          <h1 className="text-center mb-5 p-5">Register Hackethon</h1>
          {verification && (
            <VerifyModal
              title="Success"
              message="Product Added Successfully"
              navLink="products"
              // teamdata={teamdata}
              closeModalHandler={closeModalHandler}
            />
          )}
          <div>
            <form onSubmit={registerHandler}>
              <div className="">
                <div className="">
                  {/* Team Leader */}
                  <div className="form-card">
                    <div className="mb-3">
                      <h2>Team Name</h2>
                      <input
                        type="text"
                        className="form-inputs"
                        id="InputTeamName"
                        aria-describedby="emailHelp"
                        placeholder="Team Name"
                        required
                        ref={team_name}
                      />
                    </div>
                    <div className="mt-5">
                      <h2>Team Leader</h2>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-inputs"
                          id="InputLeaderName"
                          placeholder="Full Name"
                          required
                          ref={leader_name}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-inputs"
                          id="InputLeaderEmail"
                          placeholder="Email"
                          required
                          ref={leader_email}
                        />
                      </div>
                      <div className="mb-3 d-flex flex-wrap">
                        <input
                          maxLength="10"
                          type="number"
                          className="form-inputs"
                          id="InputLeaderPhoneNo"
                          placeholder="Phone No"
                          required
                          ref={leader_phone}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-inputs"
                          id="InputLeaderCourse"
                          placeholder="Course"
                          required
                          ref={leader_course}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-inputs"
                          id="InputLeaderYear"
                          placeholder="Year"
                          required
                          ref={leader_year}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Member 1 */}
                  <div className="form-card">
                    <div>
                      <div>
                        <h2>Member 1</h2>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-inputs"
                            id="InputLeaderName"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-inputs"
                            id="InputLeaderEmail"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            maxLength="10"
                            type="phone"
                            className="form-inputs"
                            id="InputLeaderPhoneNo"
                            placeholder="Phone No"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-inputs"
                            id="InputLeaderCourse"
                            placeholder="Course"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-inputs"
                            id="InputLeaderYear"
                            placeholder="Year"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {formComponents.map((item, index) => (
                    <div className="form-card" key={index}>
                      <div>
                        <div>
                          <div className="d-flex justify-content-between align-content-center">
                            <h2>Member {index + 2}</h2>

                            <button
                              onClick={removeFormHandler}
                              className="closeButton"
                              value={index}
                            >
                              <MdClose />
                            </button>
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-inputs"
                              id="InputLeaderName"
                              placeholder="Full Name"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-inputs"
                              id="InputLeaderEmail"
                              placeholder="Email"
                            />
                          </div>
                          <div className="mb-3 d-flex flex-wrap">
                            <input
                              maxLength="10"
                              type="phone"
                              className="form-inputs"
                              id="InputLeaderPhoneNo"
                              placeholder="Phone No"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-inputs"
                              id="InputLeaderCourse"
                              placeholder="Course"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-inputs"
                              id="InputLeaderYear"
                              placeholder="Year"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {formComponents.length < 2 && (
                    <button className="addBtn" onClick={addFormHandler}>
                      <MdAdd />
                    </button>
                  )}
                </div>

                {/* <Link to="/events/verifyandpayment" params={{ data: teamdata }}> */}

                {/* </Link> */}
              </div>
              <button type="submit">Verify and Pay</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterHackethon;
