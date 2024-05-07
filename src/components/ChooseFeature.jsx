import { useNavigate } from "react-router-dom"

const ChooseFeature = () => {
    const navigate = useNavigate()

  return (
    <div id="ChooseFeature" className="mt-20">
        <h2 className="text-xl sm:text-2xl lg:text-3xl mb-8 text-center mt-6 tracking-wide">
        Let`s Begin Here
        </h2>
        <div className="flex justify-center ">  
            <button onClick={() => navigate('/CompressImage')} className="flex items-center justify-center w-full  p-8 sm:w-1/2 md:w-1/3 lg:w-1/4  bg-purple-500 border text-white font-semibold rounded-xl shadow-md hover:bg-neutral-100 transition duration-300 hover:text-black"> 
                <p className="text-xl font-medium">Image</p>
            </button>
            <button onClick={() => navigate('/CompressAudio')} className="ml-2 flex items-center justify-center w-full p-8  sm:w-1/2 md:w-1/3 lg:w-1/4 bg-purple-500 border text-white font-semibold rounded-xl shadow-md hover:bg-neutral-100 transition duration-300 hover:text-black"> 
                <p className="text-xl font-medium">Audio</p>
            </button>
        </div>
  </div>
  )
}

export default ChooseFeature