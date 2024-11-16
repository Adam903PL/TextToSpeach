import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToTextApp: React.FC = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [isListening, setIsListening] = useState<boolean>(false);

 
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'pl-PL' });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Speech to Text</h1>
      <p>{listening ? 'Nasłuchiwanie...' : 'Kliknij przycisk, aby rozpocząć.'}</p>
      
      <div>
        <textarea
          value={transcript}
          onChange={() => {}}
          rows={10}
          cols={50}
          placeholder="Tutaj pojawi się rozpoznany tekst..."
        />
      </div>

      <br />

      <button onClick={startListening} disabled={isListening}>
        Rozpocznij nasłuchiwanie
      </button>

      <button onClick={stopListening} disabled={!isListening}>
        Zatrzymaj nasłuchiwanie
      </button>

      <br />
      
      <button onClick={resetTranscript}>
        Wyczyść tekst
      </button>
    </div>
  );
};

export default SpeechToTextApp;
