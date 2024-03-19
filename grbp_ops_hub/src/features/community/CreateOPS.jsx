import { useState } from 'react';
import { PROVINCES } from '../../config/provinces';

const CreateOPS = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [text, setText] = useState('');

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedLocations([]);
  };

  const handleLocationChange = (event, locationName) => {
    if (event.target.checked) {
      setSelectedLocations((prevLocations) => [...prevLocations, locationName]);
    } else {
      setSelectedLocations((prevLocations) =>
        prevLocations.filter((name) => name !== locationName)
      );
    }
  };

  const exportToJson = () => {
    const provinceData = PROVINCES[selectedProvince];
    const data = {
      province: selectedProvince,
      imgURL: provinceData.imgURL,
      coordinates: {
        center: provinceData.coordinates.center,
        bounds: provinceData.coordinates.bounds,
      },
      locations: provinceData.locations.filter((location) =>
        selectedLocations.includes(location.name)
      ),
      text,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `${selectedProvince}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="create-operation">
      <select value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">Select Province</option>
        {Object.keys(PROVINCES).map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>
      <div>
        {selectedProvince &&
          PROVINCES[selectedProvince].locations.map((location) => (
            <div key={location.name}>
              <input
                type="checkbox"
                checked={selectedLocations.includes(location.name)}
                onChange={(e) => handleLocationChange(e, location.name)}
              />{' '}
              {location.name}
            </div>
          ))}
      </div>
      <textarea
        className="text-createOP"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="text"
      />
      <button
        className="bg-gray-100  hover:bg-cyan-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        onClick={exportToJson}
        fontSize="medium"
      >
        Export
      </button>
    </div>
  );
};

export default CreateOPS;
