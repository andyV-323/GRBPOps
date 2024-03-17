import { useState } from 'react';
import MissionGenerator from '../missions/MissionGenerator';
import NonGeographicalMap from '../maps/nonGeographicalMap';
import SpeechSynthesis from '../speech/SpeechSynthesis';
import VehicleSim from '../garage/VehicleSim';
import Armory from '../armory/Armory';

const MissionControl = () => {
  const [showMap, setShowMap] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [randomSelection, setRandomSelection] = useState([]);
  const [mapBounds, setMapBounds] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const [mapWasClosed, setMapWasClosed] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
    setMapWasClosed(false); // Reset mapWasClosed when showing the map
  };

  const handleCloseMap = () => {
    setShowMap(false);
    setMapWasClosed(true); // Set mapWasClosed to true when the map is closed
  };

  const handleGenerateOps = (data) => {
    setSelectedProvince(data.selectedProvince);
    setRandomSelection(data.randomSelection);
    setMapBounds(data.bounds);
    setImgURL(data.imgURL || '');
    handleShowMap();
  };

  return (
    <div className="dashboard">
      <section>
        <section className="mission-speech">
          <dl>
            <dd>
              <MissionGenerator onGenerateOps={handleGenerateOps} />
              <SpeechSynthesis />
            </dd>
          </dl>
          <dl>
            <dd>
              <Armory />
            </dd>
          </dl>
          <dl>
            <dd>
              <VehicleSim />
            </dd>
          </dl>
          <section className="map-dash">
            {mapWasClosed && !showMap && (
              <button
                className="bg-gray-100   hover:bg-cyan-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
                onClick={handleShowMap}
              >
                Show Map
              </button>
            )}
            {showMap && (
              <NonGeographicalMap
                onClose={handleCloseMap}
                bounds={mapBounds}
                selectedProvince={selectedProvince}
                locationsInProvince={randomSelection}
                imgURL={imgURL}
              />
            )}
          </section>
        </section>
      </section>
    </div>
  );
};

export default MissionControl;
