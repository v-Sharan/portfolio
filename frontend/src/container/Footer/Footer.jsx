import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { useForm } from "react-hook-form";
import "./Footer.scss";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlePost = (data) => {
    setLoading(true);

    client
      .create({
        _type: "contact",
        ...data,
      })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    reset({ name: "", email: "", message: "" });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:vsharansago@gmail.com" className="p-text">
            vsharansago@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 9597243534" className="p-text">
            +91 9597243534
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          onSubmit={handleSubmit(handlePost)}
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors?.name?.message && (
            <p className="p-text_error">{errors?.name?.message}</p>
          )}
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors?.email?.message && (
            <p className="p-text_error">{errors?.email?.message}</p>
          )}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
            />
          </div>
          {errors?.message?.message && (
            <p className="p-text_error">{errors?.message?.message}</p>
          )}
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
