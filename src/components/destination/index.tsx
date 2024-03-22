import { IoIosSend } from "react-icons/io";
const Destination = () => {
  return (
    <div>
      <p className="text-center">Selling</p>
      <h2 className="text-center text-3xl">Top Destinations</h2>

      <div className="grid grid-cols-3 mb-3 justify-center gap-14 m-12">
        <div className="border rounded-[24px] overflow-hidden h-[457px] shadow-2xl">
          <img
            className="w-full aspect-square block object-cover"
            src="/Images/building.png"
            alt=""
          />
          <div className="p-5">
            <div className="flex  justify-between">
              <p className="text-center mb-3">Rome,Italy</p>
              <p>$5,42k</p>
            </div>
            <div className="flex items-center gap-2">
              <IoIosSend className="" />
              <p>10 Days Trip</p>
            </div>
          </div>
        </div>

        <div className="border rounded-[24px] overflow-hidden shadow-2xl">
          <img
            className="w-full aspect-square block object-cover"
            src="/Images/tower.jpeg"
            alt=""
          />
          <div className="p-5">
            <div className="flex justify-between">
              <p className="mb-3">London,UK</p>
              <p>$4.2k</p>
            </div>

            <div className="flex items-center gap-2">
              <IoIosSend className="" />
              <p>12 Days Trip</p>
            </div>
          </div>
        </div>

        <div className="border rounded-[24px] overflow-hidden shadow-2xl">
          <img
            className="w-full aspect-square block object-cover"
            src="/Images/church.png"
            alt=""
          />
          <div className="p-5">
            <div className="flex justify-between">
              <p>Full Europe</p>
              <p className="mb-3">$15k</p>
            </div>
            <div className="flex items-center gap-2">
              <IoIosSend />
              <p>28 days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
