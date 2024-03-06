import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function ContactComponent(props) {
  const form = useRef();
  const [showResults, setShowResults] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_fb5q0wa", "template_e8qkrf1", form.current, {
        publicKey: "110SG-Q3J7GQyYiv2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowResults(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  setTimeout(() => {
    setShowResults(false);
  }, 3000);

  const Results = () => (
    <div>
      <p>Email sent successfully!</p>
    </div>
  );
  return (
    <>
      <form action="" onSubmit={sendEmail} ref={form}>
        <div className="formWord">
          <h2>Say Hello!</h2>
          <span>Full Name</span>
          <br />
          <input className="input100" type="text" name="fullName" required />
          <br />
          <span>Phone Number</span>
          <br />
          <input className="input100" type="text" name="phone" required />
          <br />
          <span>Enter Email</span>
          <br />
          <input className="input100" type="text" name="email" required />
          <br />
        </div>
        <div className="formWord">
          <span>Message</span>
          <br />
          <textarea name="message" required></textarea>
          <br />
          <button>SUBMIT</button>

          <div className="row">{showResults ? <Results /> : null}</div>
        </div>
      </form>
    </>
  );
}

export default ContactComponent;
