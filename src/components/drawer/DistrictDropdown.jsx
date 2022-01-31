import React, { useContext, useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { scenarioDataContext } from "../../App";
import districtData from "../../data/district.json";

const DistrictDropdown = () => {
  const [{ division }, setScenarioData] = useContext(scenarioDataContext);

  const [filteredDistrictListByDivision, setFilteredDistrictListByDivision] = useState([]);

  let displayDistrict;

  if (division.code !== undefined) {
    displayDistrict = filteredDistrictListByDivision.map((item) => (
      <option value={item?.code} key={item?.id}> {item?.name} </option>
    ));
  }

  const changeHandler = event => {
    const selectedDistrict = districtData.district.filter(item => item.code === parseInt(event.target.value));
    setScenarioData((prevState) => ({
      ...prevState,
      district: selectedDistrict[0],
    }));
  };

  useEffect(()=>{
    setScenarioData((prevState) => ({ ...prevState, district: {} }));
    const districtList = districtData.district.filter(item => item.parent_code === division?.code);
    setFilteredDistrictListByDivision([...districtList])
  },[division])
  
  return (
    <div className="mt-6">
      <h4 className="text-sm">District</h4>
      <div className="relative py-3 bg-blue-50 rounded-lg w-full mt-2">
        <select
          onChange={(event) => changeHandler(event)}
          className="w-full h-full bg-blue-50 rounded-lg px-4 focus:outline-none appearance-none"
        >
          <option className="text-gray-500" defaultValue={""}>select district</option>
          {displayDistrict}
        </select>
        <IoChevronDownOutline className="absolute top-0 right-0 bottom-0 my-auto mr-4 text-2xl text-gray-400" />
      </div>
    </div>
  );
};

export default DistrictDropdown;