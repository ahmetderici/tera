'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Glow Backgrounds */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute -bottom-40 right-[-300px] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 -z-10" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Tera</div>
        <div className="hidden md:flex gap-6 text-gray-400">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a
          href="#demo"
          className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Request a Demo
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-24 lg:py-36 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
        >
          Automate FIE Reports with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl"
        >
          Tera helps Texas schools generate legally compliant FIE evaluations in hours — not days.
          Trusted by diagnosticians. Powered by AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#demo"
            className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 transition"
          >
            Request a Demo
          </a>
          <a
            href="#how"
            className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how" className="mt-32 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">How Tera Works</h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Upload Data</h3>
            <p className="text-gray-400">Securely upload evaluations & assessments.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Generate FIE</h3>
            <p className="text-gray-400">AI drafts TEA-aligned FIE reports tailored to each case.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Review & Share</h3>
            <p className="text-gray-400">Professionals review, finalize, and distribute the reports.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="mt-32 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Why Choose Tera?</h2>
        <div className="grid md:grid-cols-2 gap-16 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Save Time</h3>
            <p className="text-gray-400">Reduce FIE writing time from days to hours.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Stay Compliant</h3>
            <p className="text-gray-400">Reports follow Texas legal standards for special education.</p>
          </div>
        </div>
      </section>

      {/* What is FIE */}
      <section id="about" className="mt-32 max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">What is an FIE?</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          A Full Individual and Initial Evaluation (FIE) is a federally mandated assessment for special education eligibility.
          Tera transforms the complex process into a streamlined, AI-assisted experience.
        </p>
      </section>

      {/* Trusted Section */}
      <section className="mt-32 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Trusted by Texas Educators</h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">TEA Aligned</h3>
            <p className="text-gray-400">Built with TEA guidance in mind.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
            <p className="text-gray-400">Data encrypted at rest and in transit.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Built with Experts</h3>
            <p className="text-gray-400">Co-designed with Texas neuropsychologists and diagnosticians.</p>
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section id="demo" className="mt-32 max-w-xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Request a Demo</h2>
        <form
          action="https://formspree.io/f/xvgrgpzp"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 rounded bg-gray-900 text-white border border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="School Email"
            required
            className="p-3 rounded bg-gray-900 text-white border border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            rows={4}
            required
            className="p-3 rounded bg-gray-900 text-white border border-gray-600"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded hover:scale-105 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-32 text-center text-sm text-gray-500 py-8" id="contact">
        © 2025 Tera. All rights reserved.
      </footer>
    </main>
  );
}
