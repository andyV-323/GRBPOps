import { createContext, useContext, useState } from 'react';
import { EQUIPMENT } from '../../config/equipment';
import { GUNS } from '../../config/guns';
import { GEAR } from '../../config/gear';
import { SPECIALITEMS } from '../../config/specialItems';
import { EXPLOSIVES } from '../../config/explosives';

const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const initialQuantities = [
    Object.keys(EQUIPMENT),
    ...Object.keys(GUNS),

    ...Object.keys(GEAR),
    ...Object.keys(SPECIALITEMS),
    ...Object.keys(EXPLOSIVES),
  ].reduce(
    (acc, item) => ({
      ...acc,
      [item]: 0, // Initialize each item with a quantity of 0
    }),
    {}
  );
  const [equipment, setEquipment] = useState({});

  const [unit, setUnit] = useState('lbs'); // default unit

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'lbs' ? 'kg' : 'lbs'));
  };

  const updateQuantity = (item, quantity) => {
    setEquipment((prevEquipment) => ({
      ...prevEquipment,
      [item]: quantity,
    }));
  };
  const resetQuantities = () => {
    setEquipment({ ...initialQuantities }); // Resets all quantities to zero
  };
  return (
    <EquipmentContext.Provider
      value={{
        equipment,
        unit,
        toggleUnit,
        updateQuantity,
        resetQuantities,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
};

export const useEquipment = () => useContext(EquipmentContext);
