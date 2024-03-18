import { useState } from 'react';
import { GARAGE } from '../../config/garage';
import Aircraft from './Aircraft';
import Fuel from './Fuel';
import Electric from './Electric';

const FuelSim = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');

  // Function to determine which component to render based on the selected vehicle's type
  const renderSimulator = () => {
    const vehicle = GARAGE.find((v) => v.name === selectedVehicle);
    if (!vehicle) return null;

    //path matches all vehicles in our GARAGE file
    const imagePath = vehicle.imgUrl.startsWith('/')
      ? vehicle.imgUrl
      : `./img/imgGarage/${vehicle.imgUrl}`;

    return (
      <>
        <img
          src={imagePath}
          alt={vehicle.name}
          style={{ maxWidth: '100%', height: '500px' }}
        />
        {(vehicle.type === 'Civilian' ||
          vehicle.type === 'Motorbike' ||
          vehicle.type === 'Tank' ||
          vehicle.type === 'Military' ||
          vehicle.type === 'Heavy') && <Fuel vehicle={vehicle} />}
        {vehicle.type === 'Electric' && <Electric vehicle={vehicle} />}
        {vehicle.type === 'Aircraft' && <Aircraft vehicle={vehicle} />}
      </>
    );
  };

  return (
    <div className="vehicle-select">
      <h4>Select a Vehicle</h4>
      <select
        onChange={(e) => setSelectedVehicle(e.target.value)}
        value={selectedVehicle}
      >
        <option value="">Select your option</option>
        {GARAGE.map((vehicle) => (
          <option key={vehicle.name} value={vehicle.name}>
            {vehicle.name}
          </option>
        ))}
      </select>

      {renderSimulator()}
    </div>
  );
};

export default FuelSim;
