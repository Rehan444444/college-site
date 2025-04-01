import React, { useEffect, useState, useRef } from "react";

const useCountAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const CollegeStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const studentCount = useCountAnimation(isVisible ? 25000 : 0);
  const graduationRate = useCountAnimation(isVisible ? 95 : 0);
  const employmentRate = useCountAnimation(isVisible ? 92 : 0);
  const facultyCount = useCountAnimation(isVisible ? 500 : 0);
  const researchCount = useCountAnimation(isVisible ? 150 : 0);
  const scholarshipAmount = useCountAnimation(isVisible ? 5 : 0);

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
          College Statistics
        </span>
        <h2 className="text-3xl font-bold text-[#1e2851] mt-4 mb-3">
          Our College Achievement Metrics
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We take pride in our academic excellence and the success of our students.
          Here are some key statistics that showcase our achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-lg bg-white shadow-sm transform transition-all duration-500 hover:scale-105">
          <div className="text-4xl font-bold text-[#1e2851] mb-2">
            {studentCount.toLocaleString()}+
          </div>
          <p className="text-gray-600">Active Students</p>
        </div>

        <div className="text-center p-6 rounded-lg bg-white shadow-sm transform transition-all duration-500 hover:scale-105">
          <div className="text-4xl font-bold text-[#1e2851] mb-2">
            {graduationRate}<span className="text-2xl">%</span>
          </div>
          <p className="text-gray-600">Graduation Rate</p>
        </div>

        <div className="text-center p-6 rounded-lg bg-white shadow-sm transform transition-all duration-500 hover:scale-105">
          <div className="text-4xl font-bold text-[#1e2851] mb-2">
            {employmentRate}<span className="text-2xl">%</span>
          </div>
          <p className="text-gray-600">Employment Rate</p>
        </div>

        <div className="text-center p-6 rounded-lg bg-white shadow-sm transform transition-all duration-500 hover:scale-105">
          <div className="text-4xl font-bold text-[#1e2851] mb-2">
            {facultyCount}+ 
          </div>
          <p className="text-gray-600">Expert Faculty</p>
        </div>

        <div className="text-center p-6 rounded-lg bg-white shadow-sm transform transition-all duration-500 hover:scale-105">
          <div className="text-4xl font-bold text-[#1e2851] mb-2">
            {researchCount}+
          </div>
          <p className="text-gray-600">Research Papers</p>
        </div>

        <div className="text-center p-6 rounded-lg bg-white shadow-sm transform transition-all duration-500 hover:scale-105">
          <div className="text-4xl font-bold text-[#1e2851] mb-2">
            <span className="text-2xl">$</span>{scholarshipAmount}M+
          </div>
          <p className="text-gray-600">Scholarship Fund</p>
        </div>
      </div>
    </section>
  );
};

export default CollegeStats;
