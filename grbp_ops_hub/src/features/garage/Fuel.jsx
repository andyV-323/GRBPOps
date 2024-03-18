import { useEffect, useState } from 'react';

const Fuel = ({ vehicle }) => {
  const [distance, setDistance] = useState(0);
  const [fuelConsumed, setFuelConsumed] = useState(null);
  const [remainingFuel, setRemainingFuel] = useState(''); // Initialize with full tank size

  useEffect(() => {
    if (distance === 0) {
      calculateFuelConsumption();
    }
  });
  const calculateFuelConsumption = () => {
    const consumed = distance * vehicle.efficiency;
    const remaining = vehicle.fuelCapacity - consumed;
    setFuelConsumed(consumed);
    setRemainingFuel(remaining > 0 ? remaining : 0); // Ensure remaining fuel doesn't go negative
  };

  const handleDecrement = () => {
    if (distance > 0) {
      setDistance(distance - 1);
    }
  };

  const handleIncrement = () => {
    setDistance(distance + 1);
  };

  const Refuel = () => {
    setDistance(0);
  };

  // Calculate remaining fuel as a percentage of the total fuel tank size for the gauge
  const remainingFuelPercentage = Math.round(
    (remainingFuel / vehicle.fuelCapacity) * 100
  );
  const gaugeWidth = 100;
  const indicatorPosition = (remainingFuelPercentage / 100) * gaugeWidth;

  return (
    <div className="simulator">
      <h4>Calculator</h4>
      <div className="inc-dec-btn">
        <label>Enter distance (in-game km):</label>

        <form className="max-w-xs mx-auto">
          <label
            htmlFor="quantity-input"
            className="block mb-2 text-sm font-medium text-gray-900 "
          ></label>
          <div className="relative flex items-center max-w-[10rem]">
            <button
              type="button"
              id="decrement-button"
              onClick={handleDecrement}
              data-input-counter-decrement="quantity-input"
              className="bg-gray-100 hover:bg-cyan-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              value={distance}
              data-input-counter
              aria-describedby="helper-text-explanation"
              className="bg-black-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5  "
              placeholder="999"
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={handleIncrement}
              data-input-counter-increment="quantity-input"
              className="bg-gray-100 hover:bg-cyan-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 "
          ></p>
        </form>
      </div>
      <button
        style={{ fontSize: '15px' }}
        className="bg-white hover:bg-cyan-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={calculateFuelConsumption}
      >
        Calculate
      </button>
      <button
        style={{ fontSize: '15px' }}
        className="bg-white hover:bg-cyan-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={Refuel}
      >
        Refuel
      </button>

      {fuelConsumed !== null && (
        <div>
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
                    checked={setDistance === 0}
                    readOnly
                  />

                  <div
                    className="toggle-container-inner-ticks-indicator"
                    style={{ marginLeft: `${indicatorPosition}px` }}
                  ></div>
                </div>
              </div>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};
export default Fuel;
