import "../../css/Modal.css";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import { registerUser } from "../../api/add";

const VerifyModal = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const initPayement = (data) => {
    const options = {
      key: process.env.REACT_APP_RAZOR_PAY_KEY,
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      description: "Test Transacrtion",
      handler: async (response) => {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        try {
          const regTeamdata = {
            team_Name: props.teamdata.team_Name,
            team_Size: props.teamdata.team_Size,
            team_Leader: props.teamdata.team_Leader,
            dept: props.teamdata.dept,
            email1: props.teamdata.email1,
            email2: props.teamdata.email2,
            contact1: props.teamdata.contact1,
            contact2: props.teamdata.contact2,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };
          const verifyUrl = `${process.env.REACT_APP_BACKEND_URL}/api/payment/verify`;
          const { data } = await axios.post(verifyUrl, response);
          if (data) {
            const regdata = registerUser(regTeamdata);
            if (regdata) {
              console.log("User Added Succssfully");
            }
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#e74c3c",
      },
    };
    const rzp1 = window.Razorpay(options);

    rzp1.open();
  };
  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const payUrl = `${process.env.REACT_APP_BACKEND_URL}/api/payment/order`;
      const { data } = await axios.post(payUrl, {
        amount: props.teamdata.team_Size * 100,
      });
      if (data) {
        setIsLoading(false);
      }
      initPayement(data.data);
    } catch (error) {
      console.log(error);
    }

    // handlePayment();
    // console.log(await registerUser(member3, member4));
  };

  return (
    <div className="modalx">
      {isLoading && <Spinner />}
      <div className="d-flex justify-content-between align-items-center top flex-wrap">
        <div onClick={props.closeModalHandler} className="backButton">
          <FaArrowLeft />
        </div>
        <h3 id="myModalLabel">Please Verify Your Details Before Payment</h3>
      </div>
      <div className="middle flex-wrap">
        <h1>Detail List</h1>
        <p>{props.teamdata.team_Name}</p>
        <p>{props.teamdata.team_Size}</p>
        <p>{props.teamdata.team_Leader}</p>
        <p>{props.teamdata.dept}</p>
        <p>{props.teamdata.email1}</p>
        <p>{props.teamdata.email2}</p>
        <p>{props.teamdata.contact1}</p>
        <p>{props.teamdata.contact2}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center bottom flex-wrap">
        <p style={{ color: "wheat" }}>{props.teamdata.team_Size * 100}</p>
        <button className="pay-button" onClick={handlePayment}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default VerifyModal;
