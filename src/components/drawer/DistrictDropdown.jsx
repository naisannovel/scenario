import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const DistrictDropdown = () => {
  return (
    <div className="mt-6">
      <label className='text-sm'>District</label>

      <div className="relative py-3 bg-blue-50 rounded-lg w-full mt-2">
        <select name="district" id="district"  className='w-full h-full bg-blue-50 rounded-lg px-4 focus:outline-none appearance-none'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <IoChevronDownOutline className="absolute top-0 right-0 bottom-0 my-auto mr-4 text-2xl text-gray-400" />
      </div>
    </div>
  );
};

export default DistrictDropdown;
