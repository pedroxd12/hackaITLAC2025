import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Agenda from '@/components/Agenda';
import Prizes from '@/components/Prizes';
import Rules from '@/components/Rules';
import Sponsors from '@/components/Sponsors';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Header />
      <Hero />
      <About />
      <Tracks />
      <Agenda />
      <Prizes />
      <Rules />
      <Sponsors />
      <Location />
      <Footer />
    </main>
  );
}