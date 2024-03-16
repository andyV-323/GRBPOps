import { useState } from 'react';
import NonGeographicalMap from '../maps/nonGeographicalMap';
import SpeechSynthesisComponent from '../speech/SpeechSynthesis';

const ImportOPS = () => {
  const [uploadedData, setUploadedData] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        setUploadedData(data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        alert(
          "There was an error processing your file. Make sure it's a valid JSON."
        );
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="import-operation">
      <input type="file" onChange={handleFileUpload} accept=".json" />
      {uploadedData && (
        <>
          <SpeechSynthesisComponent text={uploadedData.text} />

          {showMap && (
            <NonGeographicalMap
              onClose={handleCloseMap}
              bounds={uploadedData.coordinates.bounds}
              selectedProvince={uploadedData.province}
              locationsInProvince={uploadedData.locations}
              imgURL={uploadedData.imgURL}
            />
          )}
          {!showMap && (
            <button
              className="bg-gray-100 hover:bg-cyan-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
              onClick={handleShowMap}
            >
              Show Map
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ImportOPS;
