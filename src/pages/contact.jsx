import { useState } from "react";

function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  function getEmailSection() {
    if (isEmailVisible) {
      return <h5>Top.Fun.USA@gmail.com</h5>;
    } else {
      return <label>Click the button below</label>;
    }
  }

  function handleClick() {
    console.log("It works!!!");
    setIsEmailVisible(true);
  }

  function hideEmail() {
    console.log("It works 2!");
    setIsEmailVisible(false);
  }

  return (
    <div className="contact">
      <h1>Top Fun USA</h1>
      {getEmailSection()}
      <br />
      <button onClick={handleClick} className="btn btn-sm btn-primary">
        Show Email
      </button>
      <button onClick={hideEmail} className="btn btn-sm btn-danger">
        Hide Email
      </button>
    </div>
  );
}

export default Contact;
