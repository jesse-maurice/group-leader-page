import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="flex flex-row w-full gap-4 place-content-end place-items-end ">
        <div className="flex flex-col content-center w-[245px] h-[290px] float-left p-5 rounded-t-3xl bg-[#665a3c] bg-opacity-80 text-[#faf5e9] font-medium border-[1px] border-[#ffffff]">
          <h2 className="px-5 mb-1 leading-tight text-center ">Start and grow your Group.</h2>
          <hr></hr>
          <p className="mt-1 mb-5 text-sm ">
            Initiate and cultivate a thriving community of bulk buyers.
          </p>
        </div>
        <div className=" w-[245px] h-[300px] px-3 py-3 rounded-t-3xl bg-[#665a3c] font-medium bg-opacity-80 text-[#faf5e9] border-[1px] border-[#ffffff]">
          <h2 className="px-4 mb-1 leading-tight text-center ">
            Aggregate Demand and make orders
          </h2>
          <hr></hr>
          <p className="mt-1 mb-2 text-sm ">
            Coordinate and organize group purchase, leveraging the buying power
            to negotiate better deals, discounts, or group rates from
            suppliers..
          </p>
        </div>
        <div className=" w-[245px] h-[310px] mt-4 py-3 px-3 font-medium rounded-t-3xl bg-[#665a3c] bg-opacity-80 text-[#faf5e9] border-[1px] border-[#ffffff]">
          <h2 className="px-4 mb-1 leading-tight text-center ">
            Receive orders and share to group members
          </h2>
          <hr></hr>
          <p className="mt-1 mb-2 text-sm ">
            Provide cost savings and availability to the group members by
            pooling resources and making bulk purchases together.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer