import devices from "../assets/device.svg";

const Dashboard = () => {
  return (
    <div
      className="flex justify-between  2xl:text-left xl:ml-[-8%] font-barlow  lg:mt-[-13.5rem]
      lg:flex-row lg:gap-0 md:flex-col-reverse md:mt-[-18rem] md:gap-20
    max-sm:flex-col-reverse max-sm:mt-[-24rem] ">
      <div className=" space-y-[1.9rem] md:m-auto ">
        <div className="flex gap-3.5">
          <div
            className=" text-[0.9375rem] font-[700]
          tracking-[0.0625rem] w-[3rem] h-[1.5625rem] bg-[#242942] rounded-[0.78125rem]">
            <p className="uppercase text-white text-center ">new</p>
          </div>
          <p className="text-[#242942] text-[0.9375rem] font-[400] tracking-[0.3125rem]">
            MONOGRAPH DASHBOARD
          </p>
        </div>
        <p
          className=" xl:w-[32rem] text-[#242942] xl:text-[4rem] font-[700] leading-[4rem] 
          md:w-[30rem] md:text-[3.3rem] md:leading-[3.3rem]
        max-sm:w-[19.4375rem] max-sm:text-[2.5rem] max-sm:leading-[2.5rem]">
          POWERFUL INSIGHTS INTO YOUR TEAM
        </p>
        <p className="w-[14rem] opacity-[0.75] text-[#242942] text-[1.125rem] font-[400] leading-[1.625rem]">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex  gap-6">
          <div
            className="w-[11.5rem] h-[3rem] bg-[#FF5E5E] rounded-[0.3125rem] 
            max-sm:w-[9.5625rem] max-sm:h-[2.5rem]">
            <p
              className="text-[#FFF] text-center py-3 text-[1rem] font-[700] 
            tracking-[0.06669rem]
            max-sm:tracking-[0.05831rem]
            max-sm:p-2 max-sm:text-[0.875rem] ">
              SCHEDULE A DEMO
            </p>
          </div>
          <div
            className="text-[#242942] font-[400] opacity-[0.5] my-auto text-[1.125rem]
            tracking-[0.3125rem] lg:tracking-[0.2rem] max-sm:text-[0.875rem] max-sm:tracking-[0.15625rem]">
            TO SEE A PREVIEW
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="w-[40.25rem] h-[28.4375rem] md:ml-[5.4rem] lg:ml-0 "
          src={devices}
          alt=""
        />
      </div>
    </div>
  );
};

export default Dashboard;
