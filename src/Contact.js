import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user,isAuthenticated } = useAuth0();
  return (
    <>
      <div className="contactmanager">
        <h2>Feel Free to contact us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58104.734367298435!2d74.8276393163412!3d24.466535444640456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396673b5f006885d%3A0xb5a0e69ee203fc5d!2sPlus%20Point%20Coaching%20Classes!5e0!3m2!1sen!2sin!4v1680372462039!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="formcontainer">
          <div className="contact_form">
            <form action="" method="post">
              <input
                type="text"
                placeholder="username"
                name="username"
                value={isAuthenticated?user.name:""}
                required
                autoComplete="off"
              />
              <input
                type="email"
                placeholder="useremail"
                name="email"
                value={isAuthenticated?user.email:""}
                required
                autoComplete="off"
              />
              <textarea
                placeholder="Enter your message"
                name="text"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" className="bttn1" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
