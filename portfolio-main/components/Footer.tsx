import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const handleIconClick = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    // w-full pb-10 mb-[100px] md:mb-5 
    <footer className="w-full pb-10 pt-20 " id="contact">
      {/* background grid */}
      <div className="absolute left-0 w-full-bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      {/* heading, copyright and the icons */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Ready to elevate your <span className="text-purple">digital presence</span> with a fresh perspective? 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m passionate about tech and innovation and excited to help bring your ideas to life. Let&apos;s connect!
        </p>
        <a href="mailto:nandakumarblj@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © <span className="text-purple">2024 Nanda Kumar Balaji</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => handleIconClick(info.url)}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
