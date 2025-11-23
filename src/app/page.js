import AllCategories from "@/Components/All-Categories/AllCategories";
import HomeHero from "@/Components/Hero/HomeHero";
import NewTechnology from "@/Components/New-Technology/NewTechnology";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <NewTechnology />
      <AllCategories />
      <Testimonial />
    </div>
  );
}
