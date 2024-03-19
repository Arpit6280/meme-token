import React from "react";
import buy1 from "../../images/buy-step-1.png";
import buy2 from "../../images/buy-step-2.png";
import buy3 from "../../images/buy-step-3.png";
import buy4 from "../../images/buy-step-4.png";

function BuyToken() {
  return (
    <div className="mt-16 mb-8">
      <hr />
      <h1 className="text-white max-[374px]:text-[2.2rem] min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-8">
        BUY <span className="text-sky-500"> MEME</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 lg:px-24">
        <div className="bg-white shadow-lg shadow-slate-300  ease-in-out duration-500 hover:-translate-y-1 hover:shadow-yellow-200 my-4  mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto mb-4 lg:mb-6 justify-center md:justify-start">
              <img src={buy1} class="relative" alt="buy-step" />
            </div>
            <a
              href="/"
              className="text-slate-500 text-lg mt-3 inline-block  md:text-2xl sm:text-[30px] font-medium leading-[1.2]  "
            >
              Go to Buy page
            </a>
            <p class="text-slate-500 text-lg mt-3">
              Ready to invest in the next big thing? Head to our Buy page now
              and grab your share of the meme coin revolution. Don't miss out on
              the moon ride!
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-slate-300  ease-in-out duration-500 hover:-translate-y-1 hover:shadow-yellow-200 my-4   mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto mb-4 lg:mb-6 justify-center md:justify-start">
              <img src={buy2} class="relative" alt="buy-step" />
            </div>
            <a
              href="/"
              className="text-slate-500 text-lg mt-3 inline-block  md:text-2xl sm:text-[30px] font-medium leading-[1.2]  "
            >
              Connect your wallet
            </a>
            <p class="text-slate-500 text-lg mt-3">
              Connect your wallet to join the meme coin revolution! Seamlessly
              participate in the fun and wild ride of our community-driven
              token. Don't miss out!
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-slate-300  ease-in-out duration-500 hover:-translate-y-1 hover:shadow-yellow-200 my-4   mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto mb-4 lg:mb-6 justify-center md:justify-start">
              <img src={buy3} class="relative" alt="buy-step" />
            </div>
            <a
              href="/"
              className="text-slate-500 text-lg mt-3 inline-block  md:text-2xl sm:text-[30px] font-medium leading-[1.2]  "
            >
              Choose pair to swap
            </a>
            <p class="text-slate-500 text-lg mt-3">
              Choose the pairs to swap and join the meme coin frenzy! Pick your
              favorite meme characters, swap tokens, & ride the wave of crypto
              adventures!
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-slate-300  ease-in-out duration-500 hover:-translate-y-1 hover:shadow-yellow-200 my-4   mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto mb-4 lg:mb-6 justify-center md:justify-start">
              <img src={buy4} class="relative" alt="buy-step" />
            </div>
            <a
              href="/"
              className="text-slate-500 text-lg mt-3 inline-block  md:text-2xl sm:text-[30px] font-medium leading-[1.2]  "
            >
              Buy MMM token
            </a>
            <p class="text-slate-500 text-lg mt-3">
              Buy MMM token and join the meme revolution! Embrace the laughter,
              fun, and potential gains. Secure your spot in the meme coin world.
              Hurry up!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyToken;
