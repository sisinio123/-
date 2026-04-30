/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { ProductHighlights } from './components/ProductHighlights';
import { Transformation } from './components/Transformation';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA';

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-text selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <ProductHighlights />
      <Transformation />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
