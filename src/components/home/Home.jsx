import React from "react";

import style from "./Home.module.css";
import emailjs from "emailjs-com";
const Home = () => {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm("inter-nation", "template_7b26q3e", e.target, "03An34cZPNAjAMdK4")
      .then(
        (result) => {
          window.location.reload(); 
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section id="home">
      <div className={`container-lg ${style["home-container"]}`}>
        <div className={style["home-form"]}>
          <h2>Birinchi darsga yoziling!</h2>
          <p>So'rov qoldiring va menejerimiz siz bilan bog'lanadi</p>
          {/* <form action="mailto:shohrux-rustamov@mail.ru" method="post">
            <input type="text" placeholder="Ismingiz" name="Name" />
            <input
              placeholder="Telefon raqamingiz"
              id="main_phone"
              className="style_mask_input__y6wgM"
              type="text"
              //   value="+998 (__) ___-__-__"
              name="number"
            ></input>
            <input
              className={style.firstLesson}
              type="submit"
              name="submit"
              value="Ro'yxatdan o'tish"
              onclick={sendEmail()}
            />
          </form> */}
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            {/* <label>Name</label> */}
            <input type="text" name="Name" placeholder="Ismingiz"/>
            {/* <label>Email</label> */}
            {/* <input type="ema" name="from_email" /> */}
            {/* <label>Subject</label> */}
            <input type="text" name="number" placeholder="Telefon raqamingiz" />
            {/* <label>Message</label>
            <textarea name="html_message" /> */}
            <input className={style.firstLesson} type="submit" value="Ro'yxatdan o'tish" />
          </form>

          {/* <button onClick={messageAdmin}>Ro'yxatdan o'tish</button> */}
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Home;
