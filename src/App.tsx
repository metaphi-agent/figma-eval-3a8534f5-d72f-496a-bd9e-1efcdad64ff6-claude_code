import Header from './components/blocks/Header';
import Hero from './components/blocks/Hero';
import Services from './components/blocks/Services';
import Destinations from './components/blocks/Destinations';
import BookTrip from './components/blocks/BookTrip';
import Testimonials from './components/blocks/Testimonials';
import Partners from './components/blocks/Partners';
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
        <BookTrip />
        <Testimonials />
        <Partners />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
