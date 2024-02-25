import Lottie from "lottie-react";
import linkedin from "../assets/socialmedia/linkedin/data.json";
import twitter from "../assets/socialmedia/twitter/data.json";
// import whatsapp from "../assets/socialmedia/whatsapp/data.json";

const SocialMedia = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      <div id="linkedin">
        <a href="https://www.linkedin.com/in/mani-teja-305b77287/" target="blank">
          <Lottie className="w-28 h-28" animationData={linkedin} />
        </a>
      </div>
      <div id="twitter">
        <a href="https://twitter.com/maniteja2601" target="blank">
          <Lottie className="w-28 h-28" animationData={twitter} />
        </a>
   </div>
     {/* <div id="whatsapp">
        <a href="https://wa.me/+919550420415" target="blank">
          <Lottie className="w-28 h-28" animationData={whatsapp} />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
