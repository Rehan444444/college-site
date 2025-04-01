import React from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Studying at PTSN has been transformative. The professors are world-class, and the collaborative environment has helped me grow both academically and personally. The opportunities here are unmatched.",
    name: "Sarah Chen",
    title: "Computer Science, Class of 2024",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote:
      "The research opportunities at PTSN are incredible. I've been able to work alongside leading experts in my field and contribute to groundbreaking projects that have real-world impact.",
    name: "Michael Thompson",
    title: "Biomedical Engineering, PhD",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    quote:
      "The diverse community at PTSN has enriched my learning experience. I've made lifelong friends and connections that span the globe, all while receiving a world-class education.",
    name: "Emma Rodriguez",
    title: "International Relations, Class of 2023",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote:
      "The faculty's dedication to student success is remarkable. They've not only taught me the subject matter but also mentored me in my career path and personal development.",
    name: "David Kumar",
    title: "Physics, Masters Program",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function App() {
  return (
    <div className="min-h-64 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4  my-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1e2851]">Student Success Stories</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Hear directly from our students about their transformative experiences at PTSN
        </p>
      </div>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mt-12 w-full max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  rounded-xl shadow-xl p-8 text-center">
              <Quote className="h-10 w-10 text-blue-500 mx-auto mb-6" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
