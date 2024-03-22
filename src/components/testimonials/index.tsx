import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const Testimonials = () => {
  return (
    <div className="flex w-10/12 mx-auto gap-14 items-center mb-14">
      <div className="flex-1">
        <p>TESTIMONIALS</p>
        <h2 className="text-3xl mb-16">
          What People Say <br /> about Us.
        </h2>
        <div className="flex gap-3 mt-5">
          <div className="w-[8px] h-[8px] rounded-full bg-[#39425D]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#E5E5E5]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#E5E5E5]"></div>
        </div>
      </div>

      <div className="relative">
        <div className="w-[68px] h-[68px] absolute -top-10 -left-10">
          <img className="rounded-full" src="/Images/profile.png" alt="" />
        </div>
        <div className="shadow-lg w-[437px] m-[auto] p-6">
          <p>
            "On the Windows talking painted pasture yet its
            <br /> express parties use. Sure last he same as <br /> knew next.
            of believed or diverted no."
          </p>
          <h3>Mike Taylor</h3>
          <p>Lahore,Pakistan</p>
        </div>
      </div>
      <div className=" flex flex-col gap-8">
        <GoChevronUp />
        <GoChevronDown />
      </div>
    </div>
  );
};

export default Testimonials;
