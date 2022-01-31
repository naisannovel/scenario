import React, { useContext, useState, useEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { scenarioDataContext } from "../../App";
import popularPlaces from "../../data/popularPlaces.json";

const DynamicInput = () => {
  const [{ district, places }, setScenarioData] = useContext(scenarioDataContext);

  const [placesOfSelectedDistrict, setPlacesOfSelectedDistrict] = useState([]);
  const [indexNum, setIndexNum] = useState(null);
  const [filteredPlacesUsingInputValue, setFilteredPlacesUsingInputValue] = useState([]);

  const onChangeHandler = (event, index) => {
    const newAry = [...places];
    newAry[index] = event.target.value;
    setIndexNum(index);
    setScenarioData(prevState => ({ ...prevState, places: newAry }));

    if (newAry[index].length) {
      const filteredPlaces = placesOfSelectedDistrict.filter((item) => item?.name.toString().toLowerCase().startsWith(newAry[index].toString().toLowerCase()));
      setFilteredPlacesUsingInputValue([...filteredPlaces]);
    } else {
      setFilteredPlacesUsingInputValue([]);
    }
  };

  const incrementInputField = () => {
    const newAry = [...places];
    const removeEmptyInputField = newAry.filter(item => item !== "");
    setScenarioData(prevState => ({ ...prevState, places: [...removeEmptyInputField, ""]}));
  };

  const removeInput = (item, index) => {
    const remainInput = places.filter((item, i) => i !== index);
    setScenarioData(prevState => ({ ...prevState, places: remainInput }));
  };

  const selectedPlacesHandler = (item) => {
    const newAry = [...places];
    newAry[indexNum] = item?.name;
    const filterUniqPlace = [...new Set(newAry)];
    setScenarioData(prevState => ({ ...prevState, places: filterUniqPlace }));
    setFilteredPlacesUsingInputValue([]);
  };

  useEffect(() => {
    setScenarioData(prevState => ({ ...prevState, places: [""] }));
    const filteredPopularPlacesByDistrict = popularPlaces.popularPlaces.filter(item => item.parent_code === district.code);
    setPlacesOfSelectedDistrict([...filteredPopularPlacesByDistrict]);
  }, [district]);

  const displayPlaceItems = filteredPlacesUsingInputValue.length ? (
    filteredPlacesUsingInputValue.map(item => (
      <div
        onClick={() => selectedPlacesHandler(item)}
        key={item?.id}
        className="py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-pointer"
      >
        <p className="px-4"> {item?.name} </p>
      </div>
    ))
  ) : (
    <div className="py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-pointer">
      <p className="px-4"> Not Found </p>
    </div>
  );


  return (
    <div className="mt-6">
      <h4 className="text-sm">Popular Place</h4>

      {places.map((item, index) => (
        <div
          className="mt-3 mb-3 flex items-center justify-between"
          key={index}
        >
          <div className="relative w-4/5">
            <input
              type="text"
              onChange={(event) => onChangeHandler(event, index)}
              value={item}
              className="w-full border border-blue-200 rounded-lg py-3 px-4 focus:outline-none bg-transparent text-md placeholder:text-gray-500"
              placeholder={`Popular Place ${index + 1}`}
            />

            <div className="absolute top-full left-0 w-full text-sm z-50">
              { filteredPlacesUsingInputValue.length !== 0 && indexNum === index && displayPlaceItems }
            </div>
            
          </div>

          {places.length > 1 && (
            <div
              onClick={() => removeInput(item, index)}
              className="h-12 w-12 flex items-center justify-center rounded-full border hover:bg-red-600 hover:text-white"
            >
              <IoRemoveOutline className="w-6 h-6" />
            </div>
          )}

        </div>
      ))}

      <button
        onClick={incrementInputField}
        className="w-4/5 border-dashed border-2 border-blue-200 rounded-lg py-3 px-4 font-medium text-gray-500 focus:outline-none bg-transparent text-md placeholder:text-gray-500 disabled:opacity-60"
        disabled={!places[places.length - 1].length}
      >
        + add a place
      </button>
    </div>
  );
};

export default DynamicInput;