import { useState } from 'react';
import { PROVINCES } from '../../config/provinces';
import { CODENAMES } from '../../config/codenames';

function MissionGenerator({ onGenerateOps }) {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [numberOfLocations, setNumberOfLocations] = useState(1);
  const [randomSelection, setRandomSelection] = useState([]);
  const [codename, setCodename] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const provinces = Object.keys(PROVINCES);
  const codenameArray = Object.values(CODENAMES);

  //Province selection and number of locations
  const generateOps = async () => {
    setErrMsg(' ');

    if (!selectedProvince || !numberOfLocations <= 0) {
      setErrMsg('You must choose a province and enter 1 or more locations.');
      const provinceData = PROVINCES[selectedProvince];
      let locationsInProvince = [...provinceData.locations];
      const ops = [];

      //Randomizing Missions
      for (let i = locationsInProvince.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [locationsInProvince[i], locationsInProvince[j]] = [
          locationsInProvince[j],
          locationsInProvince[i],
        ];
      }
      for (
        let i = 0;
        i < Math.min(numberOfLocations, locationsInProvince.length);
        i++
      ) {
        ops.push(locationsInProvince[i]);
      }

      // Create a single random codename for all operations if not set yet
      if (!codename || codename) {
        const generatedCodename =
          codenameArray[Math.floor(Math.random() * codenameArray.length)];
        setCodename(generatedCodename);
      }

      // Set bounds and coordinates for the selected province
      const bounds = provinceData.coordinates.bounds;
      const coordinates = ops.map((location) => location.coordinates);
      const imgURL = provinceData.imgURL;
      const biome = provinceData.biome;

      // Pass the generated data to the parent component

      onGenerateOps({
        codename,
        selectedProvince,
        bounds,
        coordinates,
        randomSelection: ops,
        imgURL,
        biome,
      });

      // Update state in a synchronous manner
      setRandomSelection(ops);
      setIsGenerated(true);
    }
  };

  // Function to handle incrementing the number of locations
  const handleIncrement = () => {
    setNumberOfLocations((prevCount) => prevCount + 1);
  };

  // Function to handle decrementing the number of locations
  const handleDecrement = () => {
    setNumberOfLocations((prevCount) => Math.max(0, prevCount - 1)); // Prevent negative values
  };

  //Generate a prompt with details from chose province and locations
  //includes name, description, and biome information
  const generatePrompt = () => {
    const locationDetailsString = randomSelection
      .map((location) => {
        let details = location.name;
        if (location.description) {
          details += ` - ${location.description}`;
        }
        return details;
      })
      .join(', ');
    const selectedProvinceData = PROVINCES[selectedProvince];
    const biome = selectedProvinceData ? selectedProvinceData.biome : '';

    //ChatGPT Prompt
    return (
      `You are now a MILSIM gaming operation writer. 
    I will give you a template and instructions below, 
    please generate a realistic military operation with military lingo throughout and
    respect all instructions, especially the order (SITUATION AND MISSION first, 
    CONCEPT OF OPERATION second, OBJECTIVES third, LOADOUT fourth). 
    Throughout all the text refer to the team in the first person ('we') and don't split the team.\n\n` +
      `OPERATION: ${codename}\n\n` +
      `SITUATION AND MISSION:\n` +
      `We have identified key locations for our operation: ${locationDetailsString}. 
    Each location has its own set of objectives that are crucial for the mission's success.\n\n` +
      `Our mission takes place in a ${biome} biome.\n\n` +
      `CONCEPT OF OPERATION:\n` +
      `Our team will deploy from HQ via helicopter, land vehicle, or boat/raft (you decide) 
    and don't use the vehicles name just say helicopter, land vehicle, etc.\n\n` +
      `OBJECTIVES:\n` +
      `Objectives will be briefed on-site and are expected to involve different types of mission types 
    depending on the location description and biome. mission types to choose from depending on biome 
    and location description: Undercover/Covert,Direct Action/Raid,Reconnaissance/Surveillance,Urban 
    Sniper/Counter-Sniper, High-Value Target Extraction,Sabotage/Demolition, Cyber Warfare/Signal, 
    Jungle Warfare,Mountain Warfare, Desert Patrol, Arctic Warfare,Maritime Security/Boarding,Urban 
    Evacuation,Search and Rescue (SAR). \n\n` +
      `LOADOUT:\n` +
      `suggest loadout for the type of mission, objective and biome, suggest type of gear, do not include 
    real Gun names just say Assault rifle, sniper rifle, Sub machine gun, pistol, grenade launcher, designated 
    marksman rifle, shotgun,  or  light machine gun. Determine the weight of our loadout by these rules: 
    1. Undercover/Covert Operations Weight Limit: Up to 20.5 pounds(9.3 kg) 
    Description: Ideal for missions requiring a civilian appearance. Operators 
    carry concealed weapons, minimal personal defense items, compact 
    surveillance tools, and possibly lightweight concealable body armor.
    <br />
    2. Direct Action/Raid Weight Limit: Up to 60 pounds (27.2 kg) 
    Description: For full combat readiness. Includes body armor, helmets,
     primary and secondary weapons, grenades, breaching tools, and tactical 
    backpacks with extra supplies. <br />
    3. Reconnaissance/Surveillance Weight Limit: Up to 35 pounds (15.9 kg) 
    Description: Focuses on stealth with light body armor, silenced weapons, 
    surveillance devices, and minimal sustenance supplies for extended 
    observation.
    <br />
    4. Urban Sniper/Counter-Sniper Weight Limit: Up to 45 pounds (20.4
    kg) Description: Equipped with precision rifles, sidearms, urban
    camouflage, minimal rations, and lightweight ballistic vests,
    prioritizing engagement capabilities and some mobility. <br />
    5. High-Value Target Extraction Weight Limit: Up to 50 pounds
    (22.7 kg) Description: Combines combat gear with flex cuffs,
    compact breaching tools, and medical supplies for detainee
    handling and extraction. <br />
    6. Sabotage/Demolition Weight Limit: Up to 55 pounds (24.9 kg)
    Description: Includes standard combat gear plus demolition
    equipment like explosives and tools for bypassing obstacles.
    <br />
    7. Cyber Warfare/Signal Intelligence Weight Limit: Up to 40 pounds
    (18.1 kg) Description: Features personal defense equipment and
    specialized electronic devices for hacking and signal
    interception.
    <br />
    8. Jungle Warfare Weight Limit: Up to 45 pounds (20.4 kg)
    Description: Optimized for survival and mobility in dense
    vegetation, including lightweight armor, survival tools, and
    waterproof gear. <br />
    9. Mountain Warfare Weight Limit: Up to 50 pounds (22.7 kg)
    Description: Geared for operations in rugged terrain, with
    climbing equipment, cold-weather clothing, and compact,
    high-caliber firearms. <br />
    10. Desert Patrol Weight Limit: Up to 45 pounds (20.4 kg)
    Description: Adapted for extreme heat and sand, including
    hydration systems, sun protection gear, and lightweight,
    breathable body armor. <br />
    11. Arctic Warfare Weight Limit: Up to 60 pounds (27.2 kg)
    Description: Equipped for cold environments with insulated
    clothing, snow camouflage, heating packs, and specialized snow
    mobility equipment. <br />
    12. Maritime Security/Boarding Operations Weight Limit: Up to 40
    pounds (18.1 kg) Description: For operations at sea, including
    flotation devices, corrosion-resistant weapons, water-proof bags,
    and boarding tools. <br />
    13. Urban Evacuation Weight Limit: Up to 50 pounds (22.7 kg)
    Description: Prepared for extracting non-combatants from hostile
    urban environments, including crowd control devices, first aid
    kits, and non-lethal weapons.
    <br />
    14. Search and Rescue (SAR) Weight Limit: Up to 55 pounds (24.9
    kg) Description: SAR missions require medical supplies, extraction
    tools, signaling devices, and survival gear for rescuer and
    victim. `
    );
  };
  //Copies prompt to clipboard so users can paste prompt in chatgpt
  const copyPromptToClipboard = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(prompt).then(
      () => {
        alert('Prompt copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy prompt to clipboard: ', err);
      }
    );
  };
  return (
    <div className="mission-generator">
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
      <h1 style={{ fontSize: '30px' }}>RGJP's Mission Generator</h1>
      <label>
        Select a Province:
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
        >
          <option value="">Select Province</option>
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label
        htmlFor="locations-quantity-input"
        className="block mb-2 text-sm font-large text-white-900 "
      >
        Number of Locations:
      </label>
      <div className="relative inline-flex; items-center max-w-[8rem]">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-100  hover:bg-cyan-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        >
          {/* Decrement Icon */}
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
          type="number"
          id="locations-quantity-input"
          value={numberOfLocations}
          onChange={(e) => setNumberOfLocations(parseInt(e.target.value) || 0)}
          className="bg-black-50 border-x-0 border-gray-300 h-11 text-center text-cyan-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
          required
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-100 hover:bg-cyan-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        >
          {/* Increment Icon */}
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
        id="locations-helper-text-explanation"
        className="mt-2 text-sm text-gray-500 "
      ></p>
      <br />
      <button
        className="
        bg-white 
        hover:bg-cyan-200 
        text-gray-800 
        font-semibold 
        py-2 
        px-4 border 
        border-gray-400 
        rounded shadow"
        onClick={generateOps}
        style={{ fontSize: '15px' }}
      >
        Generate
      </button>

      {isGenerated && (
        <button
          className="
        bg-white 
        hover:bg-cyan-200 
        text-gray-800 
        font-semibold 
        py-2 
        px-4 border border-gray-400 rounded shadow"
          onClick={copyPromptToClipboard}
          style={{ marginLeft: '10px', fontSize: '15px' }}
        >
          Copy ChatGPT Prompt
        </button>
      )}
      {randomSelection.length > 0 && (
        <div>
          <p style={{ color: 'cyan' }}>Codename: {codename}</p>
          <p style={{ color: 'cyan' }}>Province: {selectedProvince}</p>
        </div>
      )}
    </div>
  );
}

export default MissionGenerator;
