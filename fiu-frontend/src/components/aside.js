export default function Aside() {
  return (
    <aside className="w-full flex justify-center">
      <div className="w-full max-w-3xl px-2 xs:px-3 sm:px-4 md:px-6 flex flex-col gap-6 py-6 sm:py-10">
        {/* Latest News Section */}
        <section className="bg-white rounded-lg shadow px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-5 sm:py-6">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 mb-2 xs:mb-3 sm:mb-4">
            Latest News
          </h2>
          <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
            <li className="border-l-4 border-yellow-400 pl-2 xs:pl-3 sm:pl-4">
              <h3 className="font-semibold text-sm xs:text-base sm:text-lg text-gray-800">
                New Research Grant Awarded!
              </h3>
              <p className="text-gray-700 text-xs xs:text-sm">
                We are excited to announce that the lab has received a major grant from the National Science Foundation to further our pioneering work in micro-mechanics.
                <span className="block mt-1 text-[10px] xs:text-xs text-gray-500">March 22, 2024</span>
              </p>
            </li>
            <li className="border-l-4 border-yellow-400 pl-2 xs:pl-3 sm:pl-4">
              <h3 className="font-semibold text-sm xs:text-base sm:text-lg text-gray-800">
                Upcoming Seminar: Advances in Granular Materials
              </h3>
              <p className="text-gray-700 text-xs xs:text-sm">
                Join us on April 10th for a seminar with Dr. Seung Jae Lee discussing recent developments and their impact on industrial processes.
                <span className="block mt-1 text-[10px] xs:text-xs text-gray-500">April 10, 2024</span>
              </p>
            </li>
            <li className="border-l-4 border-yellow-400 pl-2 xs:pl-3 sm:pl-4">
              <h3 className="font-semibold text-sm xs:text-base sm:text-lg text-gray-800">
                Lab Members Featured in FIU News
              </h3>
              <p className="text-gray-700 text-xs xs:text-sm">
                Our team and their innovative research were highlighted in a recent FIU News article for contributing to advancements in granular science.
                <span className="block mt-1 text-[10px] xs:text-xs text-gray-500">March 5, 2024</span>
              </p>
            </li>
          </ul>
        </section>
        {/* Archive Section */}
        <section className="bg-yellow-50 rounded-lg shadow px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-5 sm:py-6 mt-2">
          <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800 mb-1 xs:mb-2">
            Archive
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm xs:text-base">
            <li>
              <a href="#news-2023" className="hover:underline">2023 News Highlights</a>
            </li>
            <li>
              <a href="#news-2022" className="hover:underline">2022 Events & Achievements</a>
            </li>
            <li>
              <a href="#news-2021" className="hover:underline">2021 Announcements</a>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
}