import { useState } from "react";
import lamejs from "lamejs";

const CompressAudio = () => {

    const [selectedAudio, setSelectedAudio] = useState(null);
  const [processAudio, setProcessAudio] = useState(null);

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    setSelectedAudio(file);
    // setSelectedImage(null);
  };

  const compressAudio = (audioBuffer) => {
    const mp3Encoder = new lamejs.Mp3Encoder(1, audioBuffer.sampleRate, 32);
    const samples = audioBuffer.getChannelData(0);
    const sampleBlockSize = 1152;
    const mp3Data = [];

    for (let i = 0; i < samples.length; i += sampleBlockSize) {
      const sampleChunk = samples.subarray(i, i + sampleBlockSize);
      const mp3buf = mp3Encoder.encodeBuffer(sampleChunk);
      if (mp3buf.length > 0) {
        mp3Data.push(mp3buf);
      }
    }

    const mp3buf = mp3Encoder.flush();
    if (mp3buf.length > 0) {
      mp3Data.push(mp3buf);
    }

    const mergedMp3Data = new Uint8Array(
      mp3Data.reduce((acc, val) => acc + val.length, 0)
    );
    let offset = 0;
    for (let i = 0; i < mp3Data.length; i++) {
      mergedMp3Data.set(mp3Data[i], offset);
      offset += mp3Data[i].length;
    }

    const blob = new Blob([mergedMp3Data], { type: "audio/mp3" });
    return blob;
  };

  const handleAudioCompression = async () => {
    if (selectedAudio) {
      try {
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const reader = new FileReader();
        reader.onload = async (event) => {
          const arrayBuffer = event.target.result;
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
          const compressedAudioBlob = compressAudio(audioBuffer);
          setProcessAudio(compressedAudioBlob);
        };
        reader.readAsArrayBuffer(selectedAudio);
      } catch (error) {
        console.log(error);
      }
    }
  };

 

  const handleDownloadAudio = () => {
    const url = URL.createObjectURL(processAudio);
    const link = document.createElement("a");
    link.href = url;
    link.download = "compressed_audio.mp3";
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-6 lg:mt-20">
            <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold tracking-wide">
                Compress Audio Files
            </h1>
            <label htmlFor="file-upload" className="cursor-pointer mt-8 my-2 py-4 px-4 w-1/2 lg:w-1/6 border rounded-lg shadow text-2xl hover:bg-neutral-300 transition duration-300 text-center">
                Select Image Files
            </label>
            <input id="file-upload" className="hidden" type="file" accept="audio/*" onChange={handleAudioUpload} />
            {selectedAudio && (
                <audio controls>
                <source src={URL.createObjectURL(selectedAudio)} type="audio/mp3" />
              </audio>
            )}
            <button onClick={handleAudioCompression} className="cursor-pointer my-2 py-2 px-4 w-1/2 lg:w-1/6 border rounded-lg shadow text-2xl bg-purple-500 hover:bg-neutral-300 transition duration-300 text-white">
            Compress </button>
                {processAudio && (
                    <div className="text-center">
                            <audio controls>
                                <source
                                    src={URL.createObjectURL(processAudio)}
                                    type="audio/mp3"
                                    alt="Result" className="mx-auto"
                                />
                            </audio>
                            <button onClick={handleDownloadAudio} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
                            Download </button>
                    </div>
                )}
  </div>
  )
}

export default CompressAudio