import styles from "./styles.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex flex-row mt-[48.7px] justify-between mx-[10%]">
      <img className="" src="/Images/jado.svg" alt="" />
      <div className="flex items-center gap-10">
        <h2 className="">Destinations</h2>
        <h2>Hostels</h2>
        <h2>Flights</h2>
        <h2>Bookings</h2>
        <h2>Login</h2>
        <div className="border-[1px] rounded-[5px]">
          <button className="  px-[22px] py-[9px] rounded-[5px] ">
            Sign up
          </button>
        </div>
        <div className="flex flex-row">
          <p>EN</p>
          <RiArrowDropDownLine className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
