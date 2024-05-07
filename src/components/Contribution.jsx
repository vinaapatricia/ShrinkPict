
import { ContributionOptions } from "../constants";


const Contribution = () => {
  


  return (
  
    <div id="Contribute" className="mt-40">
      <div className="flex flex-wrap justify-center">
        {ContributionOptions.map((option, index) => (
          <div key={index} className="w-full p-2">
            <div className="text-center p-10 bg-gradient-to-r from-purple-700 to-blue-800 text-white  justify-center rounded-xl">
              <p className="text-4xl mb-8  font-bold">
                {option.title}
                  
              </p>
              <p className="mb-8">
              </p>
              <ul>
                {option.description.map((feature, index) => (
                  <li key={index} className="mt-8 flex justify-center items-center">
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/vinaapatricia"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl text-black bg-white hover:bg-neutral-200 rounded-lg transition duration-200"
              >
                Wanna Contribute?
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Contribution;
