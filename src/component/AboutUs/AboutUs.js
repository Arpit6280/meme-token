import React from "react";
import u1 from "../../images/uranus1.jpeg";
function AboutUs() {
  return (
    <div className="py-4 px-10 mt-16 bg-black text-white">
      <h1 className="text-center text-6xl font-bold ">ABOUT US</h1>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full md:w-[45%] :w-2/5 pt-10">
          <img src={u1} alt="" />
        </div>
        <div className="w-full md:w-[55%] :w-3/5 pt-10 xl:pt-14">
          <p className="leading-8 md:leading-tight lg:leading-8">
            Uranus, the ruler of Aquarius, starts 2024 in retrograde, going
            direct on Saturday, January 27, then retrogrades again on Sunday,
            September 1. This suggests ongoing evolution in your home life and
            personal growth. Uranus champions individuality, social justice, and
            authenticity. During its retrograde, focus on living by your values
            and perhaps engage more actively in humanitarian efforts. In 2024,
            the location of the Sun on the March equinox is in the constellation
            of Pisces but also on the border of Aquarius. So, we are slowly
            moving into a new age, from Pisces to Aquarius. Aquarius is ruled by
            Uranus, the planet that governs innovation, technology, and
            surprising events. Uranus perfectly mirrors Aquarius' distinctive
            attitude, complementing the nontraditional nature of these visionary
            air signs.
          </p>
          <p className="leading-8 hidden xl:block">
            We used to have a monetary system backed by gold, yet in this
            digital age it’s truly about that comedy gold. It’s how we make you
            and your friends laugh, and the shiniest meme tokens with hearts of
            gold, help you swallow that crypto pill. So swallow whole, with
            these holy vibes, cause this worlds ill. Currency itself is a shared
            belief system, its value is defined based on how we value it. Gold
            worked great for this until 1971 when the US decided to stop being
            limited by a gold reserve. At this time, the biggest shit coin was
            born. Thus, an ultimate source of power was formed. The ability to
            literally print money
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
