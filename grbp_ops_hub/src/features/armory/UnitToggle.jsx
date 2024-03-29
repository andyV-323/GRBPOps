import { useEquipment } from './EquipmentContext';

export const UnitToggle = () => {
  const { unit, toggleUnit } = useEquipment();

  const isChecked = unit === 'kg';
  const handleChange = () => {
    toggleUnit();
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleChange}
        readOnly
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>

      <span
        className="ml-3 text-sm font-medium text White-900 "
        style={{ fontSize: '15px' }}
      >
        {unit === 'lbs' ? 'LBS' : 'KG'}
      </span>
    </label>
  );
};
