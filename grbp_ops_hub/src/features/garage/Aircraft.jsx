import { useState, useEffect } from 'react';

const Aircraft = ({ vehicle }) => {
  const [remainingTime, setRemainingTime] = useState(vehicle.timer);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            setIsActive(false);
            return 0;
          }
        });
      }, 1000);
    } else if (!isActive && remainingTime !== vehicle.timer) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, remainingTime, vehicle.timer]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleRefuel = () => {
    setIsActive(false);
    setRemainingTime(vehicle.timer);
  };

  const timeRemainingPercentage = Math.max(
    0,
    Math.min(100, (remainingTime / vehicle.timer) * 100)
  );
  const gaugeWidth = 100; // Adjust this to match your actual gauge width
  const indicatorPosition = Math.max(
    0,
    Math.min(gaugeWidth, (timeRemainingPercentage / 100) * gaugeWidth)
  );

  return (
    <div className="simulator">
      <h4>Aircraft Fuel Simulator</h4>
      <h4>Press Start to begin</h4>
      <div className="sim-btns">
        <button
          style={{ fontSize: '15px' }}
          className="bg-white hover:bg-cyan-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleStart}
          disabled={isActive}
        >
          Start
        </button>
        <button
          style={{ fontSize: '15px' }}
          className="bg-white hover:bg-cyan-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleStop}
          disabled={!isActive}
        >
          Stop
        </button>
        <button
          style={{ fontSize: '15px' }}
          className="bg-white hover:bg-cyan-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleRefuel}
        >
          Refuel
        </button>
        {remainingTime === 0 && <div>Aircraft has run out of fuel!</div>}
      </div>
      <label htmlFor="indicator-check" className="label">
        <div className="toggle-container">
          <div className="toggle-container-inner">
            <div className="toggle-container-inner-ticks">
              <div className="toggle-container-inner-ticks-cover"></div>
              <div className="toggle-container-inner-ticks-container">
                <div className="tick big e">E</div>
                <div className="tick"></div>
                <div className="tick"></div>
                <div className="tick"></div>
                <div className="tick"></div>
                <div className="tick big m">
                  <small>1</small>/<small>2</small>
                </div>
                <div className="tick"></div>
                <div className="tick"></div>
                <div className="tick"></div>
                <div className="tick"></div>
                <div className="tick big f">F</div>
              </div>

              <input
                type="checkbox"
                id="indicator-check"
                checked={true}
                readOnly
              ></input>

              <div
                className="toggle-container-inner-ticks-indicator"
                style={{ marginLeft: `${indicatorPosition}px` }}
              ></div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Aircraft;
