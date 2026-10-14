import React from "react";

import hero from "../../pic/Home/hero.png";
import hero_L from "../../pic/Home/hero_left.png";

import "../../style/Hero/hero_img_linear.scss";
import "../../style/Home_hero.scss";

const Hero_bk_img = () => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src={hero}
            className="w-full object-cover linear-img absolute inset-0 z-0"
          />

          <div className="flex items-center justify-around relative z-10  h-200">
            <div className="mx-10">
              <h1
                className="text-[64px] font-black text-[var(--color-border)] mb-10 
                                Hero-L-h1 opacity-0 -translate-x-10"
              >
                溫暖醇香
                <br />
                <span>喵癒 每一刻時光</span>
              </h1>

              <h2
                className="text-[24px] mb-30 
                                Hero-L-h2 opacity-0 -translate-x-10  "
              >
                在復古的爵士樂與現磨咖啡香中，尋回生活的詩意。
                <br />
                這不只是一間咖啡廳，更是一場關於貓靈感與慢生活的優雅邂逅。
              </h2>

              <h2
                className="text-[24px] text-[var(--color-border)] 
                                Hero-L-h2p opacity-0 -translate-x-10"
              >
                {" "}
                --Scroll to explore
              </h2>
            </div>

            <div className="relative w-fit ">
              <img
                src={hero_L}
                className="h-[543px] 
                                Hero-R-pic opacity-0 translate-x-10"
              />
              <div
                className="absolute left-0 bottom-0 
                                 -translate-x-1/4 translate-y-1/2 flex flex-col bg-[var(--color-background)] border-[var(--color-border)] border-2 rounded-xl px-4 py-2 
                                 Hero-R-div opacity-0 translate-x-10"
              >
                <h3
                  className="text-[24px] text-[var(--color-border)] Hero-B-h3 
                                    opacity-0"
                >
                  生物能監控
                </h3>
                <p className="text-[16px] Hero-B-p opacity-0">
                  內建「呼嚕頻率」紓壓模組，
                  <br />
                  全天候執行壓力測試，確保環境心流穩定。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_bk_img;
