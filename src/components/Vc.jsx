import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function Vc() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* VC Desk Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-16">
        {/* Left Column - Image */}
        <div className="relative w-full md:w-1/3">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://ptsnsuniversity.ac.in/website/Images/VCPTSNSU.jpg"
              alt="Vice Chancellor"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Column - Animated Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start off-screen
          whileInView={{ opacity: 1, x: 0 }} // Slide into view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // Ensures it triggers when 20% visible
          className="w-full md:w-2/3"
        >
          <div className=" backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h2 className="text-4xl font-bold text-[#1e2851]   mb-3">VC Desk</h2>
            <p className="text-gray-600 border-t-1 border-amber-500">
            A warm and affectionate welcome to all the students who aspire to be a part of the intellectual fraternity at Pandit S N Shukla University of Shahdol, Madhya Pradesh. Last few years the University has attained many milestones and is emerging as an institution of quality learning with integrated academic programmes.
            </p>
            <p className="text-gray-600 my-6">
              Our vision is to establish ourselves as a leading university for academic excellence
              and innovation. We are committed to research development that meets industry needs.
            </p>
            <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-900 font-semibold">Sincerely,</p>
                <p className="text-gray-900 text-xl font-bold">Prof. John Doe</p>
                <p className="text-gray-600">Vice Chancellor</p>
              </div>
            <button className="group mt-8 inline-flex items-center px-8 py-4 rounded-full bg-red-600 hover:bg-amber-600 text-white shadow-lg">
              Read More
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Vc;
