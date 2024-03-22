import { BiSelection } from "react-icons/bi";
import { MdWater } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

const Trip = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="">
        <p className=" mb-1">Easy and fast</p>
        <h1>
          Book Your Next Trip <br />
          In 3 Easy Steps
        </h1>
        <div className="mt-8">
          <div className="flex gap-5 mb-7">
            <div className="w-[47px] h-[48px] rounded-[13px] bg-[#F0BB1F]">
              <BiSelection className="h-[22px] w-[22px] text-white mx-[auto] my-[15px]" />
            </div>
            <div className="">
              <h2>Choose Destination</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-7">
            <div className="w-[47px] h-[48px] rounded-[13px] bg-[#F15A2B]">
              <MdWater className="text-white w-[22.05px] h-[17.86px] my-[15px] mx-[auto] " />
            </div>
            <div>
              <h2>Make Payment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-[47px] h-[48px] rounded-[13px] bg-[#006380]">
              <FaTaxi className="text-[#ffffff] h-[17.86px] w-[22.05px] my-[15px] mx-[auto]" />
            </div>
            <div>
              <h2>Reach Airport on Selected Date</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img  src="/Images/image.png" />
      </div>
    </div>
  );
};

export default Trip;
