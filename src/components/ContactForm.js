import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mnqekjvz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-200">Name</label>
        <input type="text" name="name" id="name" required className="mt-1 block w-full p-2 rounded bg-slate-800 text-white border border-slate-600"/>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
        <input type="email" name="email" id="email" required className="mt-1 block w-full p-2 rounded bg-slate-800 text-white border border-slate-600"/>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-200">Message</label>
        <textarea name="message" id="message" required rows={5} className="mt-1 block w-full p-2 rounded bg-slate-800 text-white border border-slate-600"></textarea>
      </div>
      <button type="submit" disabled={status === "sending"} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-md">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && <p className="text-green-400 mt-2">Message sent!</p>}
      {status === "error" && <p className="text-red-400 mt-2">Error sending message. Please try again.</p>}
    </form>
  );
}
