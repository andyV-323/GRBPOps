import { useEquipment } from './EquipmentContext';

export const WeightCalculator = ({ equipmentList }) => {
  const { equipment, unit } = useEquipment();

  const calculateTotalWeight = () => {
    return Object.keys(equipment).reduce((total, item) => {
      const quantity = equipment[item];
      const weight = equipmentList[item] ? equipmentList[item][unit] : 0;
      return total + weight * quantity;
    }, 0);
  };

  return (
    <div style={{ fontSize: '20px' }}>
      Total Weight: {calculateTotalWeight().toFixed(2)} {unit}
    </div>
  );
};
