import Header from './components/blocks/Header';
import Hero from './components/blocks/Hero';
import Services from './components/blocks/Services';
import Destinations from './components/blocks/Destinations';
import BookingSteps from './components/blocks/BookingSteps';
import Testimonials from './components/blocks/Testimonials';
import Logos from './components/blocks/Logos';
import Subscribe from './components/blocks/Subscribe';
import Footer from './components/blocks/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        <Logos />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
