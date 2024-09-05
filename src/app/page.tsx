export default function Home() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,#3d5a80,#293241)]">
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full flex justify-center py-4 z-20">
        <img src="/images/logo.png" alt="Logo" className="h-12" />{" "}
        {/* Adjust height as needed */}
      </div>

      {/* Dividing line */}
      <div className="absolute top-16 left-0 w-full border-t border-gray-300"></div>

      {/* Navigation Links */}
      <nav className="absolute top-16 left-0 w-full p-4 flex justify-between items-center text-white z-20">
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Solutions
          </a>
          <a href="#" className="hover:text-gray-300">
            Pricing
          </a>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="hover:text-gray-300">
            Demo
          </a>
        </div>
      </nav>

      {/* Hero Section with Headline */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center text-white">
        <h1 className="text-6xl font-extrabold mb-4">
          Revolutionize Conference Engagement
        </h1>
        <p className="text-lg mb-8 max-w-3xl">
          Prometheus Labs provides cutting-edge ticketing and engagement
          solutions that empower event organizers to create interactive,
          data-driven, and unforgettable experiences.
        </p>
        <a
          href="#features"
          className="px-8 py-4 border border-white text-white font-semibold uppercase hover:bg-white hover:text-gray-800 transition"
        >
          Learn More
        </a>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 bg-gray-900 text-white py-16 px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Prometheus Labs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <img
              src="/images/ticketing.svg"
              alt="Ticketing"
              className="h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Seamless Ticketing</h3>
            <p className="text-center max-w-xs">
              Our platform offers fully customizable, blockchain-powered
              ticketing solutions that make entry secure and easy.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/engagement.svg"
              alt="Engagement"
              className="h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Engagement Gamified</h3>
            <p className="text-center max-w-xs">
              Boost attendee engagement with tokenized rewards, quizzes, and
              interactive challenges throughout the event.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/analytics.svg"
              alt="Analytics"
              className="h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
            <p className="text-center max-w-xs">
              Get actionable insights from real-time event data to measure
              success and improve future events.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">
          &copy; 2024 Prometheus Labs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
