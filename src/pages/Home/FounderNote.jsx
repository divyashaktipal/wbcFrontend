export default function FounderNote() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#F8F0FF] via-white to-[#F8F0FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#B24592]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#6A0DAD]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Founder Image */}
        <div className="group relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/70 backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-105">
          <img
            src="./Aacharya-anima.jpeg"
            alt="Founder of Women Business Circle"
            className="w-full h-full object-cover rounded-full transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#B24592]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#B24592] to-[#F15F79] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
        </div>

        {/* Text */}
        <div className="w-full md:w-2/3">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A0DAD] mb-6  md:text-left">
              Founder’s Note
            </h2> */}

          <div className="bg-purple-50/60 p-6 md:p-8 rounded-xl border-l-4 border-[#6A0DAD] shadow-sm">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
              “When I founded the
              <span className="font-semibold text-[#6A0DAD]">
                {" "}
                Women Business Circle
              </span>
              , I envisioned a space where women could transform creativity into
              purpose and purpose into prosperity.”
            </p>

            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              “Empowered women empower communities — and that’s our everyday
              mission.”
            </p>

            <h3 className="text-xl font-semibold text-[#6A0DAD] mt-4">
              — Acharya Anima Goswami
            </h3>
            <p className="text-gray-600 text-base">
              Founder, Women Business Circle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
