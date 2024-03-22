import React from "react";
import contact from "../../images/contact0.jpg";

function ContactUs() {
  return (
    <div className="mt-16">
      <div class="flex items-center justify-center min-h-screen bg-[#070c38]">
        <div class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div class="flex flex-col justify-center p-8 md:p-14">
            <span class="mb-3 text-4xl font-bold"> Contact Us </span>
            <span class="font-light text-gray-400 mb-8">
              Please enter your feedback/query
            </span>
            <form action="">
              <div class="py-4">
                <span class="mb-2 text-md">Name</span>
                <input
                  type="text"
                  class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="name"
                  id="name"
                />
              </div>
              <div class="py-4">
                <span class="mb-2 text-md">Email</span>
                <input
                  type="email"
                  class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="email"
                  id="email"
                />
              </div>
              <div class="py-4">
                <span class="mb-2 text-md">Message</span>
                <textarea
                  rows={5}
                  type="message"
                  name="message"
                  id="message"
                  class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>

              <button class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Submit
              </button>
            </form>
          </div>
          <div class="relative">
            <img
              src={contact}
              alt="img"
              class="w-[400px] h-full hidden rounded-r-2xl md:block object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
