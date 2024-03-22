import React from "react";
import buy1 from "../../images/buy-step-1.png";
import buy2 from "../../images/buy-step-2.png";
import buy3 from "../../images/buy-step-3.png";
import buy4 from "../../images/buy-step-5.svg";
import Youtube from "./Youtube";

function BuyToken() {
  return (
    <div className="mt-16 mb-8">
      <hr />
      <h1 className="mt-8 text-white max-[374px]:text-[2rem] min-[375px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:8xl font-extrabold text-center mb-8">
        BUY URANUS <span className="text-sky-500"> TOKEN</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 lg:px-24">
        <div className="text-slate-300 border-[0.5px] border-white/[0.2] bg-gradient-to-r from-[#2e2e5c] to-[#262654]  ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7c7ce3] my-4 rounded-2xl hover:text-white   mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto  justify-center md:justify-center">
              <img src={buy1} class="relative" alt="buy-step" />
            </div>
            <p className=" font-bold  text-lg mt-3  inline-block  md:text-2xl sm:text-[30px] text-white leading-[1.2] text-center w-full ">
              Go to Buy page
            </p>
            <p class=" text-lg mt-3">
              Visit the designated page for buying Uranus Token on your
              preferred crypto exchange or platform.
            </p>
          </div>
        </div>
        <div className="text-slate-300 border-[0.5px] border-white/[0.2] bg-gradient-to-r from-[#2e2e5c] to-[#262654]  ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7c7ce3] my-4 rounded-2xl hover:text-white   mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto  justify-center md:justify-center">
              <img src={buy2} class="relative" alt="buy-step" />
            </div>
            <p className=" font-bold text-lg mt-3 inline-block  md:text-2xl sm:text-[30px] text-white leading-[1.2]  text-center w-full">
              Connect your wallet
            </p>
            <p class=" text-lg mt-3">
              Connect your wallet to join the uranus token revolution! and then
              enable the buying and selling of tokens securely. Don't miss out!
            </p>
          </div>
        </div>
        <div className="text-slate-300 border-[0.5px] border-white/[0.2] bg-gradient-to-r from-[#2e2e5c] to-[#262654]  ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7c7ce3] my-4 rounded-2xl hover:text-white   mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto  justify-center md:justify-center">
              <img src={buy3} class="relative" alt="buy-step" />
            </div>
            <p className=" font-bold text-lg mt-3 inline-block  md:text-2xl sm:text-[30px] text-white leading-[1.2]  text-center w-full">
              Choose pair to swap
            </p>
            <p class=" text-lg mt-3">
              Select the cryptocurrency pair you want to exchange for Uranus
              Token. Check the current exchange rate and liquidity of the chosen
              pair. Confirm the pair selection before proceeding.
            </p>
          </div>
        </div>
        <div className="text-slate-300 border-[0.5px] border-white/[0.2] bg-gradient-to-r from-[#2e2e5c] to-[#262654]  ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7c7ce3] my-4 rounded-2xl hover:text-white   mx-4">
          <div class="h-full px-[15px]  py-6  bg-card-bg rounded-xl md:rounded-[20px] ease-linear duration-300 hover:-translate-y-2 text-center md:text-start ">
            <div class="flex relative h-[60px] lg:h-[80px] xl:h-auto  justify-center md:justify-center">
              <img
                src={buy4}
                class="relative w-[60px] h-[60px]"
                alt="buy-step"
              />
            </div>
            <p className=" font-bold text-lg mt-3 inline-block  md:text-2xl sm:text-[30px] text-white leading-[1.2]  text-center w-full">
              Buy Uranus token
            </p>
            <p class=" text-lg mt-3">
              Enter the amount of cryptocurrency you want to exchange for Uranus
              token. Review the transaction details. Complete the purchase by
              confirming the transaction on your wallet.
            </p>
          </div>
        </div>
      </div>
      <Youtube />
    </div>
  );
}

export default BuyToken;
