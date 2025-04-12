import ClientSection from '../../components/Feature/ClientSection/ClientSection';
import FeaturesSection from '../../components/Feature/Feature';
import HeroSection from '../../components/Hero/Hero';
import Work from '../../components/HowItWork/Work';
import SuccessStoriesSection from '../../components/SuccessStories/SuccessStories';
import TestimonialSection from '../../components/Testimonial/Testimonial';
// import HeroSection from '../../components/HeroSection';


const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <HeroSection />
      {/* client section */}
      <ClientSection></ClientSection>
      {/* feature section */}
      <FeaturesSection></FeaturesSection>
      {/* testimonial section */}
      <TestimonialSection></TestimonialSection>
      {/* successHistorySection */}
      <SuccessStoriesSection></SuccessStoriesSection>
    

      

      {/* How It work Section */}
     <Work/>

    </div>
  );
};

export default HomePage;