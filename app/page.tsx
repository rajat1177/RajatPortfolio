
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";


export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <Hero/>
      <Grid/>
      <TechStack/>
      <RecentProjects/>
      <Testimonials/>
      <Footer/>
      
    </div>
   </main>
  );
}
