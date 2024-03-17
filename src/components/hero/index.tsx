import { CiPlay1 } from "react-icons/ci";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <div className="flex mx-[10%]">
      <div className="mt-[150px]">
        <h3 className="mb-[30px]">BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1 className="mb-[30px]">
          Travel,enjoy
          <br />
          and live a new
          <br />
          and full life
        </h1>

        <p className="mb-[30px]">
          Built a Wicket longer admire do barton vanity itself do in it
          Preferred to sportsmen it engross listening.
          <br />
          Park gate sell they west hard for the.
        </p>
        <div className="flex gap-5">
          <div className="border-[1px]  rounded-[10px]">
            <button className="py-[18px] rounded-[10px] px-[26px] bg-[#F1A501]">
              Find out more
            </button>
          </div>
          <div className="h-[52px] w-[52px] rounded-full bg-[#DF6951]">
            <CiPlay1 className={styles.play} />
          </div>

          <p className="mt-3">Play Demo</p>
        </div>
      </div>

      <div>
        <img src="/Images/pic.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
