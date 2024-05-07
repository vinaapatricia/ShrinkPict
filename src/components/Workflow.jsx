import { CheckCircle2 } from "lucide-react";
import WorkFlowImg from "../assets/WorkFlow.jpg";
import { checklistItems } from "../constants";


const Workflow = () => {
  return (
    <div id="Workflow" className="mt-20">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide">
      How to ditch the bulky files?
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2 w-full lg:w-1/2">
          <img src={WorkFlowImg} alt="Illustration" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-purple-700 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
