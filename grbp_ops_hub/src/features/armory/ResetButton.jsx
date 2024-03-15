import { useEquipment } from './EquipmentContext';

export const ResetButton = () => {
  const { resetQuantities } = useEquipment();

  return (
    <button
      onClick={resetQuantities}
      className="bg-white hover:bg-cyan-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      Reset
    </button>
  );
};
