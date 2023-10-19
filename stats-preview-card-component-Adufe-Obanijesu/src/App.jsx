function App() {
  return (
    <main className="md:h-screen w-screen flex items-center justify-center bg-slate-900 px-6 md:px-0 py-12 md:py-0">
      <div className="bg-slate-800 rounded-lg shadow-xl md:w-3/4 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="md:py-12 py-6 lg:px-12 px-6 order-last md:order-first">
            <h2 className="md:text-4xl text-3xl font-bold text-white text-center md:text-start">
              Get <span className="text-purple-500">insights</span> that help
              your business grow.
            </h2>

            <p className="text-gray-400 mt-8 font-medium text-center md:text-start">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="flex md:block justify-center">
                <div>
                  <h3 className="text-white text-3xl font-bold text-center md:text-start">
                    10k+
                  </h3>
                  <p className="text-gray-500 text-center md:text-start text-sm font-medium uppercase mt-1">
                    companies
                  </p>
                </div>
              </div>

              <div className="flex md:block justify-center">
                <div>
                  <h3 className="text-white text-3xl font-bold text-center md:text-start">
                    314
                  </h3>
                  <p className="text-gray-500 text-center md:text-start text-sm font-medium uppercase mt-1">
                    templates
                  </p>
                </div>
              </div>

              <div className="flex md:block justify-center">
                <div>
                  <h3 className="text-white text-3xl font-bold text-center md:text-start">
                    12M+
                  </h3>
                  <p className="text-gray-500 text-center md:text-start text-sm font-medium uppercase mt-1">
                    queries
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-60 md:h-full">
            <img
              src="/image-header-desktop.jpg"
              alt="background"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-purple-700 opacity-70"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
