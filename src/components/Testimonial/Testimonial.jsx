import Image from "next/image";
import teamImage1 from "../../app/assets/image/codding1.jpg";
import teamImage2 from "../../app/assets/image/codding2.jpg";
import teamImage3 from "../../app/assets/image/codding3.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Md Ashik",
      role: "Project Manager",
      feedback:
        "This platform has completely transformed the way my team collaborates. The real-time updates and task tracking are game-changers!",
      image: teamImage1,
    },
    {
      name: "Md Razzak",
      role: "Software Engineer",
      feedback:
        "I love how easy it is to share files and communicate with my colleagues. It keeps everything organized and accessible.",
      image: teamImage2,
    },
    {
      name: "S M Shakil",
      role: "Designer",
      feedback:
        "The interface is clean, intuitive, and incredibly effective for teamwork. I highly recommend it for any remote teams!",
      image: teamImage3,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
        <p className="text-gray-600 mt-4 text-lg">
          See how teams are benefiting from our collaboration platform.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <p className="text-gray-600 mt-3">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
