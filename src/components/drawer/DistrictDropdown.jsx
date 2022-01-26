import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import districtData from '../../data/district.json';

const DistrictDropdown = ({ divisionData, setData }) => {


  let displayDistrict;

  if(divisionData.code !== undefined){
    const districtList = districtData.district.filter(item => item.parent_code === divisionData?.code);
    displayDistrict = districtList.map(item => <option value={ item?.code }> { item?.name } </option> )
  }

  const changeHandler = event =>{
    console.log(event.target.value);
  }

// console.log(divisionData);
  return (
    <div className="mt-6">
      <label className='text-sm'>District</label>

      <div className="relative py-3 bg-blue-50 rounded-lg w-full mt-2">
        <select onChange={(event)=> changeHandler(event)} name="district" id="district"  className='w-full h-full bg-blue-50 rounded-lg px-4 focus:outline-none appearance-none'>
            <option disabled={true} selected>select district</option>
            { displayDistrict }
        </select>
        <IoChevronDownOutline className="absolute top-0 right-0 bottom-0 my-auto mr-4 text-2xl text-gray-400" />
      </div>
    </div>
  );
};

export default DistrictDropdown;
