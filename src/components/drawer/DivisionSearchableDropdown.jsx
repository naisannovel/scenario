import React, { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { scenarioDataContext } from "../../App";
import divisionList from "../../data/division.json";

const DivisionSearchableDropdown = () => {
  const [{ division }, setScenarioData] = useContext(scenarioDataContext);

  const onChangeHandler = (event) => {
    setScenarioData((prevState) => ({
      ...prevState,
      division: { name: event.target.value },
    }));
  };

  const selectDivisionHandler = (selectedDivision) => {
    setScenarioData((prevState) => ({
      ...prevState,
      division: selectedDivision,
    }));
  };

  let displayFoundedDivision;

  if (division?.code === undefined && division?.name !== "") {
    const filterData = divisionList.division.filter((item) =>
      item.name
        .toString()
        .toLowerCase()
        .startsWith(division?.name.toString().toLowerCase())
    );

    filterData.length
      ? (displayFoundedDivision = filterData.map((item, index) => (
          <div
            onClick={() => selectDivisionHandler(item)}
            key={index}
            className="py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-pointer"
          >
            <p className="px-4"> {item?.name} </p>
          </div>
        )))
      : (displayFoundedDivision = (
          <div className="py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-not-allowed">
            <p className="px-4"> Not Found </p>
          </div>
        ));
  }

  return (
    <div className="mt-12">
      <h4 className="text-sm">Division</h4>
      <div className="w-full bg-blue-50 rounded-lg py-3 relative mt-2">
        <input
          type="text"
          onChange={(event) => onChangeHandler(event)}
          value={division?.name}
          className="w-full mx-4 focus:outline-none bg-transparent text-md placeholder:text-gray-500"
          placeholder="Type here"
        />
        <IoSearchOutline className="absolute top-0 right-0 bottom-0 my-auto mr-4 text-xl text-gray-400" />

        <div className="absolute top-full left-0 w-full text-sm z-50">
          {displayFoundedDivision}
        </div>
      </div>
    </div>
  );
};

export default DivisionSearchableDropdown;