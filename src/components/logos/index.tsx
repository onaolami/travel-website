const Logos = () => {
  return (
    <div className="flex items-center justify-center gap-[55px] mb-9">
      <div>
        <img
          className=" grayscale h-[130px] w-[130px] object-contain"
          src="/Images/axon.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          className=" grayscale object-contain h-[110px] w-[172.86px]"
          src="/Images/jetstar.png"
          alt=""
        />
      </div>

      <div className="h-[85px] w-[241px]  rounded shadow-md">
        <img
          className="h-full w-[155px] object-contain  m-[auto]"
          src="/Images/expedia.png"
          alt=""
        />
      </div>
      <div>
        <img
          className=" grayscale h-[32px] w-[162px] object-contain "
          src="/Images/qantas.png"
          alt=""
        />
      </div>
      <div>
        <img
          className=" grayscale object-contain h-[21px] w-[94px]"
          src="/Images/italia.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Logos;
