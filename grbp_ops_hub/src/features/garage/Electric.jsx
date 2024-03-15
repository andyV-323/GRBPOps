import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBattery, faPercent } from '@fortawesome/free-solid-svg-icons';

const Electric = ({ vehicle }) => {
  const [distance, setDistance] = useState(0); // State to store the distance
  const [powerConsumed, setPowerConsumed] = useState(null);
  const [remainingCharge, setRemainingCharge] = useState('');

  useEffect(() => {
    if (distance === 0) {
      calculateCharge();
    }
  });
  const calculateCharge = () => {
    const consumed = distance * vehicle.batteryCharge; // Calculate energy consumed based on distance
    const remainingCharge = vehicle.battery - consumed;
    setPowerConsumed(consumed);
    setRemainingCharge(remainingCharge > 0 ? remainingCharge : 0);
  };

  const handleDecrement = () => {
    if (distance > 0) {
      setDistance(distance - 1);
    }
  };
  const recharge = () => {
    setDistance(0);
  };

  const handleIncrement = () => {
    setDistance(distance + 1);
  };

  // Calculate remainingCharge as a percentage
  const remainingChargePercentage = Math.round(
    (remainingCharge / vehicle.battery) * 100
  );

  return (
    <div className="fuel-calculator">
      <h2>Calculator</h2>
      <div className="inc-dec-btn">
        <label style={{ fontSize: '15px' }}>Enter distance (in-game km):</label>

        <form className="max-w-xs mx-auto">
          <label
            htmlFor="quantity-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                className="w-3 h-3 text-gray-900"
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
              className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
              placeholder="999"
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={handleIncrement}
              data-input-counter-increment="quantity-input"
              className="bg-gray-100 hover:bg-cyan-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 "
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
        onClick={calculateCharge}
      >
        Calculate
      </button>
      <button
        style={{ fontSize: '15px' }}
        className="bg-white hover:bg-cyan-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={recharge}
      >
        recharge
      </button>

      {powerConsumed !== null && (
        <>
          <div
            className="gauge-back"
            style={{
              marginTop: '20px',
              width: '100%',
              backgroundColor: '#eee',
              height: '20px',
            }}
          >
            <div
              className="gauge-front"
              style={{
                width: `${remainingChargePercentage}%`,
                backgroundColor:
                  remainingChargePercentage > 50
                    ? 'green'
                    : remainingChargePercentage > 20
                    ? 'yellow'
                    : 'red',

                height: '100%',
                transition:
                  'width 1.8s ease-out, background-color 0.5s ease-out',
              }}
            ></div>
          </div>
          <p>
            {remainingChargePercentage}
            <FontAwesomeIcon icon={faPercent} />{' '}
            <FontAwesomeIcon icon={faCarBattery} />
          </p>
        </>
      )}
    </div>
  );
};

export default Electric;
