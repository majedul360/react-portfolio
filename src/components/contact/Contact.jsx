import "./contact.scss";
import { useState, useRef } from "react/cjs/react.development";
const Contact = () => {
  const email = useRef();
  const message = useRef();
  const [isSuccessfulMessage, setIsSuccessfulMessage] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    email.current.value && message.current.value
      ? setIsSuccessfulMessage("Thanks, I'll reply ASAP!")
      : setIsSuccessfulMessage("Please fill up email and message field!");

    email.current.value = "";
    message.current.value = "";
  };
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="box">
          <img src="images/shake.svg" alt="" />
        </div>
        <div className="box">
          <h3>contact</h3>
          <form action="" onSubmit={formHandler}>
            <input type="email" placeholder="email" ref={email} />
            <textarea
              cols="30"
              rows="5"
              placeholder="enter your message"
              ref={message}
            ></textarea>
            <button type="summit">send message</button>
          </form>
          <p>{isSuccessfulMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
