import { IoIosSend } from "react-icons/io";
import styles from "./styles.module.css";
import { MdEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div>
      <div className="border rounded-[20px] bg-[#DFD7F9] bg-opacity-20 rounded-tl-[129px] p-6  w-10/12 mx-auto relative">
        <div className=" send">
          <IoIosSend className="w-[34px] h-[34px] text-white" />
        </div>
        <h2 className="text-center mt-9 text-3xl mb-8">
          Subscribe to get information,latest news and other <br /> interesting
          offers about Jadoo
        </h2>

        <div className="flex gap-6 justify-center items-center mt-14 mb-10 bg">
          <div className="flex gap-3 bg-white rounded-[10px] items-center  py-3 px-6 w-[421px] border">
            <MdEmail />
            <input
              className="w-full bg-transparent outline-none "
              placeholder="Your email"
            />
          </div>

          <div>
            <button className="p-[20px] w-[180px]  text-white rounded-[10px] bg-[#FF946D]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
