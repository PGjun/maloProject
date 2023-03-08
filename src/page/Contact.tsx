import React from "react";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSendEmail = (e: any) => {
    e.preventDefault();
    window.open(
      `mailto:pgj127@gmail.com?subject=Email from ${email}&body=${content}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="w-1/2">
        <label className="block font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border border-gray-300 rounded py-2 px-3 mb-4 leading-tight focus:outline-none focus:ring focus:border-blue-300"
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block font-bold mb-2" htmlFor="content">
          Email content
        </label>
        <textarea
          className="w-full border border-gray-300 rounded py-2 px-3 mb-4 leading-tight focus:outline-none focus:ring focus:border-blue-300"
          id="content"
          placeholder="Enter your email content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendEmail}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
