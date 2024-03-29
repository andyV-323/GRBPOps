import { useEquipment } from './EquipmentContext';

export const GadgetsSelector = ({ item }) => {
  const { equipment, updateQuantity } = useEquipment();

  const handleIncrement = () => {
    updateQuantity(item, (equipment[item] || 0) + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    updateQuantity(item, Math.max(0, (equipment[item] || 0) - 1)); // Prevents negative values
  };

  return (
    <div className="max-w-xs mx-auto">
      <label
        htmlFor={`${item}-quantity-input`}
        className="block mb-2  font-medium text-white-900 "
      >
        {item}:
      </label>
      <div className="relative inline-flex items-center max-w-xxs max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <button
          type="button"
          onClick={handleDecrement}
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
          id={`${item}-quantity-input`}
          value={equipment[item] || 0}
          onChange={(e) => updateQuantity(item, parseInt(e.target.value) || 0)}
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
          required
        />
        <button
          type="button"
          onClick={handleIncrement}
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
        id={`${item}-helper-text-explanation`}
        className="mt-4 text-sm text-gray-500 "
      ></p>
    </div>
  );
};
