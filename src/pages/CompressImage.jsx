import imageCompression from "browser-image-compression";
import { useState } from "react";

const CompressImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [processImage, setProcessImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        // setProcessAudio(null);
    };

    const handleImageResize = async () => {
        if (selectedImage) {
            try {
                const options = {
                    maxSizeMB: 50,
                    maxWidthOrHeight: 300,
                    useWebWorker: true,
                };
                const compressedImage = await imageCompression(selectedImage, options);
                setProcessImage(compressedImage);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleDownloadImage = () => {
        const url = URL.createObjectURL(processImage);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resized_image.jpg";
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-6 lg:mt-20">
            <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold tracking-wide">
                Compress Image Files
            </h1>
            <label htmlFor="file-upload" className="cursor-pointer mt-8 my-2 py-4 px-4 w-1/2 lg:w-1/6 border rounded-lg shadow text-2xl hover:bg-neutral-300 transition duration-300 text-center">
                Select Image Files
            </label>
            <input id="file-upload" className="hidden" type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && (
                <p className="text-green-500 my-2">Image has been uploaded.</p>
            )}
            <button onClick={handleImageResize} className="cursor-pointer my-2 py-2 px-4 w-1/2 lg:w-1/6 border rounded-lg shadow text-2xl bg-purple-500 hover:bg-neutral-300 transition duration-300 text-white">
                Resize
            </button>
            {processImage && (
                <div className="text-center">
                    <img src={URL.createObjectURL(processImage)} alt="Result" className="mx-auto"/>
                    <button onClick={handleDownloadImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
                        Download
                    </button>
                </div>
            )}
        </div>
    )
}

export default CompressImage;
