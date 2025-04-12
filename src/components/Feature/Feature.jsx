import { FaBell, FaComments, FaFileAlt, FaTasks } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaComments className="text-blue-600 text-4xl" />,
      title: "Real-Time Chat",
      description:
        "Communicate instantly with your team and stay aligned on tasks.",
    },
    {
      icon: <FaTasks className="text-green-600 text-4xl" />,
      title: "Task Management",
      description:
        "Create, assign, and track tasks with ease to boost productivity.",
    },
    {
      icon: <FaFileAlt className="text-purple-600 text-4xl" />,
      title: "File Sharing",
      description: "Securely upload and share important files with your team.",
    },
    {
      icon: <FaBell className="text-red-600 text-4xl" />,
      title: "Real-Time Notifications",
      description: "Stay updated with instant alerts for messages and tasks.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose Our Platform?
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Our collaboration tool is designed to improve efficiency and teamwork.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
