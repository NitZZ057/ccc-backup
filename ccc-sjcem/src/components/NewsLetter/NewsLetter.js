import { HiMailOpen } from "react-icons/hi";
import { subscribe } from "../../api/subscribeNews";
//css
import "../../css/NewsLetter.css";
import { useRef, useState } from "react";
import Spinner from "../Spinner/Spinner";

const NewsLetter = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [spin, setSpin] = useState(false);
  const emailId = useRef("");

  const subscribeHandler = async (event) => {
    event.preventDefault();
    setSpin(true);
    const result = await subscribe(emailId.current.value.toString());
    if (result) {
      setSpin(false);
      setIsSubscribe(true);
    } else {
      setIsSubscribe(false);
    }
  };
  if (spin) {
    return <Spinner />;
  }

  if (isSubscribe) {
    return <div className="d-flex justify-content-center"><p style={{"fontWeight":"900"}}>Thank You For Subscribing</p></div>;
  }
  // if (!isSubscribe) {
  //   return <p>Error Something went wrong</p>;
  // }

  return (
    <div className="news-container">
      <div>
        <HiMailOpen className="maillogo" />
        <h1>STAY TUNED</h1>
        <p>
          Subscribe to our news letter and never miss our
          <span className="__cf_email__"> Latest news</span> and Events, etc
        </p>
        <form onSubmit={subscribeHandler}>
          <input
            type="email"
            required
            placeholder="Email"
            className="email-news"
            ref={emailId}
          />
          <button className="btn-news">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
