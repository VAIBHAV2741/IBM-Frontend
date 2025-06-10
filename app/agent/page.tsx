"use client"
import React, { useState } from "react";
import { Mic, MicOff } from "lucide-react";

const VoiceAgent = () => {
  const [listening, setListening] = useState(false);

  const toggleMic = () => {
    setListening(!listening);
    // trigger speech recognition here if you have it
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md h-[80vh] bg-white shadow-xl rounded-xl flex flex-col justify-between p-4 relative">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-4">CallAgent AI</p>
          <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
            <div className="bg-blue-600 text-white px-4 py-3 rounded-md w-fit max-w-xs">
              I understand your concern. Let me help you resolve this issue right away.
            </div>
            <div className="bg-gray-200 text-gray-800 px-4 py-3 rounded-md w-fit max-w-xs self-end ml-auto">
              Thank you! That was exactly what I needed.
            </div>
            <p className="text-xs text-gray-500 italic mt-2">• AI is typing...</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <input
            type="text"
            placeholder="Type or speak..."
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 mr-3 text-sm"
          />
          <button
            onClick={toggleMic}
            className={`p-3 rounded-full ${
              listening ? "bg-red-600" : "bg-blue-600"
            } text-white transition duration-200`}
          >
            {listening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;
