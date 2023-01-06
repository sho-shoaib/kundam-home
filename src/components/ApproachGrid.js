import React from "react";
import adherence from "../images/approachIcons/adherence.png";
import engineer from "../images/approachIcons/engineer.png";
import inventory from "../images/approachIcons/inventory.png";
import location from "../images/approachIcons/location.png";
import solution from "../images/approachIcons/solution.png";
import technical from "../images/approachIcons/technical.png";

const approachArr = [
  { icon: solution, name: "SOLUTION PROVIDER" },
  { icon: engineer, name: "VALUE ENGINEERING" },
  { icon: inventory, name: "INVENTORY MANAGEMENT" },
  { icon: adherence, name: "ADHERENCE OF FORECASTING" },
  { icon: technical, name: "ON SITE TECHNICAL SUPPORT" },
  { icon: location, name: "MULTI-LOCATION WAREHOUSING" },
];

const ApproachGrid = () => {
  return (
    <div className='w-full grid grid-cols-6 gap-4'>
      {approachArr.map((item, i) => {
        const { icon, name } = item;
        return (
          <div className='flex flex-col items-center gap-2'>
            <img src={icon} alt={`${name} Icon`} className='w-16 md:w-24' />
            <p
              className='font-semibold text-sm sm:text-lg'
              style={{ maxWidth: "200px" }}
            >
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ApproachGrid;
