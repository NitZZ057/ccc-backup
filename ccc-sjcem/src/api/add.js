import axios from "axios";
export const registerUser = async (teamdata) => {
  try {
    // create a new Parse Object instance
    const {
      team_Name,
      team_Size,
      team_Leader,
      dept,
      email1,
      email2,
      contact1,
      contact2,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = teamdata;
    const regurl = `${process.env.REACT_APP_BACKEND_URL}/api/register/team-register-hackethon`;

    const { data } = await axios.post(regurl, {
      team_Name,
      team_Size,
      team_Leader,
      dept,
      email1,
      email2,
      contact1,
      contact2,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    if (data) {
      return true;
    }
  } catch (error) {
    console.log("Error saving new Teams: ", error);
    return false;
  }
};
