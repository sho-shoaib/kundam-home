import React from "react";
import adherence from "../images/approachIcons/adherence.gif";
import engineer from "../images/approachIcons/engineer.gif";
import inventory from "../images/approachIcons/inventory.gif";
import location from "../images/approachIcons/location.gif";
import solution from "../images/approachIcons/solution.gif";
import technical from "../images/approachIcons/technical.gif";

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
    <div className='w-full grid grid-cols-3 gap-y-4'>
      {approachArr.map((item, i) => {
        const { icon, name } = item;
        return (
          <div className='flex flex-col items-center gap-2'>
            <img src={icon} alt={`${name} Icon`} className='w-24' />
            <p className='font-semibold' style={{ maxWidth: "200px" }}>
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ApproachGrid;
