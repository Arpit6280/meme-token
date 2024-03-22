import React from "react";
import p1 from "../../images/partner1.png";
import p2 from "../../images/partner2.png";
import p3 from "../../images/partner3.png";
import p4 from "../../images/partner4.png";
import p5 from "../../images/partner5.png";

function Partner() {
  return (
    <div className="mt-12">
      {/* <marquee behavior="" direction=""> */}
      <div className="flex justify-evenly moving-text">
        <div className="">
          <img src={p1} alt="partner" className="w-20 h-20" />{" "}
        </div>
        <div className="">
          <img src={p2} alt="partner" className="w-20 h-20" />
        </div>
        <div className="">
          <img src={p3} alt="partner" className="w-20 h-20" />
        </div>
        {/* <div className="">
          <img src={p4} alt="partner" className="w-20 h-20" />
        </div> */}
        <div className="">
          <img src={p5} alt="partner" className="w-20 h-20" />
        </div>
      </div>
      {/* </marquee> */}
    </div>
  );
}

export default Partner;
