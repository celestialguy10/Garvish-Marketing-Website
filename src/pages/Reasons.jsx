import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { LuBell } from "react-icons/lu";

const Reasons = () => {
  const divClassname =
    "flex flex-col items-center p-4 rounded-xl gap-3 border-2 border-stone-800 rounded-xl";
  const pClassname = "text-stone-600 font-sm mt-2 text-lg";
  const hClassname =
    "text-stone-800 text-xl font-medium flex flex-row text-center";
  const iconClassname = "text-blue-600  text-center h-8 w-8";

  return (
    <div className="flex flex-col justify-center p-4 mt-10 rounded-xl text-center max-w-[1200px] mx-auto  gap-10 ">
      <h2 className="uppercase text-stone-900 text-4xl font-bold text-center ">
        Why Choose Garvish Marketing?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        <div className={`${divClassname}`}>
          <FaCheckCircle className={`${iconClassname}`} />{" "}
          <h2 className={`${hClassname}`}>Team of Young and Inovative Minds</h2>
          <p className={`${pClassname}`}>
            Provides a proper blend of imaginative and logical thinking for
            handling any project with new mindset
          </p>
        </div>
        <div className={`${divClassname}`}>
          <FaCheckCircle className={`${iconClassname}`} />{" "}
          <h2 className={`${hClassname}`}>Client Involvement</h2>
          <p className={`${pClassname}`}>
            Helps in understanding of the client goals and thus ourgoals to
            achive them in timely manner
          </p>
        </div>
        <div className={`${divClassname}`}>
          <FaCheckCircle className={`${iconClassname}`} />{" "}
          <h2 className={`${hClassname}`}>Proper Feedback Mechanism</h2>
          <p className={`${pClassname}`}>
            Our weekly feedback system for every client ensures proper customer
            satisfaction
          </p>
        </div>
        <div className={`${divClassname}`}>
          <FaCheckCircle className={`${iconClassname}`} />{" "}
          <h2 className={`${hClassname}`}>Online Client Management System</h2>
          <p className={`${pClassname}`}>
            We offer our clent a online order management ssytem to monitor
            campaign progress as per client convenience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
