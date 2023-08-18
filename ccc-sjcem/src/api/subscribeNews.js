import axios from "axios";

export const subscribe = async (email) => {
  try {
    const postUrl = `${process.env.REACT_APP_BACKEND_URL}/api/subscribe/subscribe-news-letter`;
    // console.log(email);
    const { data } = await axios.post(postUrl, { email });
    if (data) {
      return true;
    }
  } catch (err) {
    return false;
  }
};
