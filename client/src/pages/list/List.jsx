import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

function List(props) {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);

  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);
  const [max, setMax] = useState(undefined);
  const [min, setMin] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination </label>
              <input
                type="text"
                placeholder={destination}
                onChange={e => setDestination(e.target.value)}
              />
            </div>
            <div className="listSearchItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={e => setMin(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={e => setMax(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map(item => {
                  return <SearchItem item={item} key={item._id} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
