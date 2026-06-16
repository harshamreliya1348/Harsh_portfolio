import {
  FaEnvelope,
  FaPaperPlane,
  FaPenAlt,
  FaPencilRuler,
  FaPlane,
  FaPlaneSlash,
} from "react-icons/fa";
import { FaPen, FaPencil, FaPlaneUp, FaUser } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact_form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const form = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xt3qdme",
        "template_gkr32rl",
        form.current,
        "KGFivZqXlH9YPEc0C",
      )
      .then(() => {
        alert("Message sent successfully !");
      })
      .catch(() => {
        alert("Failed to send Message");
      });
    e.target.reset();
    setName("");
    setEmail("");
    setSubject("");
    setDescription("");
  };
  return (
    <div className="w-full flex justify-center mt-10 ">
      <form
        ref={form}
        onSubmit={(e) => {
          formHandler(e);
        }}
        className={`md:w-2/3 items-start w-full border rounded px-4 py-8 md:p-10 ${props.borderColor} ${props.Shadow} ${props.textColor}`}
      >
        <h2 className="font-extrabold text-2xl mb-2">Send Me a Message</h2>

        <div
          className={`flex items-center  focus-within:border-blue-700 gap-3 mt-5 md:w-2/3 h-8 w-full border px-2 py-5 rounded ${props.borderColor}  `}
        >
          <FaUser />
          <input
            name="user_name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Your Name"
            className="outline-none w-full font-bold "
          ></input>
        </div>
        <div
          className={`flex items-center gap-3 mt-5 focus-within:border-blue-700  md:w-2/3 h-8 w-full border px-2 py-5 rounded ${props.borderColor}  `}
        >
          <FaEnvelope />
          <input
            name="user_email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="Your Email"
            className="outline-none w-full font-bold"
          ></input>
        </div>
        <div
          className={`flex items-center gap-3 mt-5 focus-within:border-blue-700 md:w-2/3 h-8 w-full border px-2 py-5 rounded ${props.borderColor}  `}
        >
          <FaTag />
          <input
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            type="text"
            placeholder="Subject"
            className="outline-none w-full font-bold"
          ></input>
        </div>
        <div
          className={`flex gap-3 mt-5 md:w-2/3 h-auto focus-within:border-blue-700 w-full border px-2 py-5 rounded ${props.borderColor}  `}
        >
          <FaPencil className="mt-1" />
          <textarea
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={10}
            placeholder="Your Massage"
            className="outline-none w-full font-bold"
          ></textarea>
        </div>
        <button className="flex mt-5 gap-4 items-center justify-center md:w-2/3 w-full font-bold text-white border border-purple-500/30 cursor-pointer active:scale-95 rounded p-2 bg-linear-to-r from-purple-600 via-violet-600 to-pink-600 shadow-lg shadow-purple-500/25">
          <FaPaperPlane />
          Send Massage
        </button>
      </form>
    </div>
  );
};

export default Contact_form;
