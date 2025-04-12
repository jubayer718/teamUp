import Image from "next/image";
import image1 from "../../app/assets/image/codding4.jpeg";
import image2 from "../../app/assets/image/codding5.jpg";
import image3 from "../../app/assets/image/codding6.jpg";

const SuccessStoriesSection = () => {
  const successStories = [
    {
      company: "Tech Innovators",
      story:
        "With this collaboration tool, our team productivity increased by 40%. Task management and real-time updates transformed our workflow!",
      image: image1,
    },
    {
      company: "Creative Studios",
      story:
        "Managing multiple projects became effortless. The chat and file-sharing features helped us streamline our creative process!",
      image: image2,
    },
    {
      company: "Marketing Gurus",
      story:
        "Collaboration across departments has never been smoother. This tool keeps everyone aligned and informed at all times.",
      image: image3,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover how teams around the world are using our collaboration tool
          to succeed.
        </p>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            >
              <Image
                src={story.image}
                alt={story.company}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                {story.company}
              </h3>
              <p className="text-gray-600 mt-3">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
