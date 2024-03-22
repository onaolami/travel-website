import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-5 justify-center mt-10">
        <div>
          <h2 className="text-3xl mb-4">Jadoo.</h2>
          <p>
            Book your trip in minute,get full
            <br />
            Control for much longer
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Company</h2>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Contact</h2>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p> Affilates</p>
        </div>

        <div>
          <h2 className="text-2xl mb-4">More</h2>
          <p> Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>

        <div>
          <div className="flex justify-center gap-4">
            <div className=" flex items-center justify-center w-[41px] h-[41px] rounded-full bg-white shadow-md object-contain">
              <FaFacebookF className="m-[auto] object-contain " />
            </div>

            <div className=" flex items-center justify-center bg-white shadow-md rounded-full w-[41px] h-[41px] ig-btn">
              <IoLogoInstagram className="" />
            </div>

            <div className=" flex items-center justify-center bg-white shadow-md w-[41px] h-[41px] rounded-full">
              <FaTwitter className="" />
            </div>
          </div>
          <p className=" text-center mt-6">Discover our app</p>
          <div className="flex gap-3">
            <img src="/Images/GooglePlay.svg" />
            <img src="/Images/PlayStore.svg" />
          </div>
        </div>
      </div>
      <p className="text-center mt-12 mb-5"> All rights reserved@jadoo.co</p>
    </div>
  );
};

export default Footer;
