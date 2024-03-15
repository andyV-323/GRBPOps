import { useState, useEffect } from 'react';

const SpeechSynthesis = ({ text }) => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [pitch, setPitch] = useState(0); // Initialize pitch to 0
  const [rate, setRate] = useState(1);
  const [inputText, setInputText] = useState(text); // Initialize with text prop

  //takes text as prop from user input or imported Json file
  useEffect(() => {
    setInputText(text);
  }, [text]);

  const synth = window.speechSynthesis;

  //More language options can be added here ['en-us'] = english USA
  useEffect(() => {
    const populateVoiceList = () => {
      const voiceOptions = synth
        .getVoices()
        .filter((voice) =>
          ['en-US'].some((prefix) => voice.lang.startsWith(prefix))
        );

      setVoices(voiceOptions);

      // Set default voice to Evan (en-US) if it exists
      const evanVoice = voiceOptions.find(
        (voice) => voice.name === 'Evan' && voice.lang === 'en-US'
      );
      if (evanVoice) {
        setSelectedVoice(evanVoice.name);
      }
    };

    populateVoiceList();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoiceList;
    }
  }, [synth]);

  const speak = () => {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (inputText !== '') {
      const utterThis = new SpeechSynthesisUtterance(inputText);
      utterThis.voice = voices.find((voice) => voice.name === selectedVoice);
      utterThis.pitch = pitch;
      utterThis.rate = rate;

      synth.speak(utterThis);
    }
  };

  const stopTTS = () => {
    synth.cancel();
  };

  const clearTXT = () => {
    setInputText('');
  };

  return (
    <div>
      <label htmlFor="voice">Voice</label>
      <select
        id="voice"
        value={selectedVoice}
        color="white"
        onChange={(e) => setSelectedVoice(e.target.value)}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {`${voice.name} (${voice.lang})`}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="rate">Rate</label>
      <input
        type="range"
        min="0.5"
        max="2"
        value={rate}
        step="0.1"
        id="rate"
        onChange={(e) => setRate(e.target.value)}
      />
      <span>{rate}</span>
      <br />
      <label htmlFor="pitch">Pitch</label>
      <input
        type="range"
        min="0"
        max="2"
        value={pitch}
        step="0.1"
        id="pitch"
        onChange={(e) => setPitch(e.target.value)}
      />
      <span>{pitch}</span>
      <br />
      <div>
        <button
          type="play"
          className="bg-gray-100 
         
          hover:bg-cyan-200 border 
          border-gray-300 
          rounded-l-lg 
          p-3 
          h-11 
          focus:ring-gray-100 
         
          focus:ring-2 
          focus:outline-none"
          onClick={speak}
        >
          PLAY
        </button>
        <button
          className="bg-gray-100 
         
          hover:bg-cyan-200 
          border 
          border-gray-300 
          rounded-l-lg p-3 h-11 
          focus:ring-gray-100 
        
          focus:ring-2 
          focus:outline-none"
          onClick={stopTTS}
        >
          STOP
        </button>
        <button
          className="bg-gray-100 
        
          hover:bg-cyan-200 
          border border-gray-300 
          rounded-l-lg 
          p-3 
          h-11 
          focus:ring-gray-100
          
           focus:ring-2 
           focus:outline-none"
          onClick={clearTXT}
        >
          CLEAR
        </button>
      </div>
      <br />
      <textarea
        placeholder="Enter a custom mission description or paste Chatgpt response here. When importing a community mission, it will automatically populate text here. Press play to listen to the briefing."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ resize: 'none', height: '300px', width: '500px' }}
      />
    </div>
  );
};

export default SpeechSynthesis;
