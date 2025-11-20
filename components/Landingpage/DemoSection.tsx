"use client";

export default function DemoSection() {
  const items = [
    {
      title: "Explore",
      subtitle: "Customized Walkthrough",
      desc: "Explore how ALDS Green fits your exact business processes.",
    },
    {
      title: "Learn",
      subtitle: "Deep Dive Into Modules",
      desc: "CRM, Projects, Inventory, HRM, Finance, Task Automation & more.",
    },
    {
      title: "Scale",
      subtitle: "ROI & Optimization Insights",
      desc: "Learn how to automate operations & scale faster.",
    },
  ];

  return (
    <section className="py-16 w-full  px-4 md:px-10 xl:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          What you’ll get in the demo
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          What’s Included in Your Personalized Demo
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md  relative overflow-hidden"
          >
            {/* Gradient background top-right */}
            <div
              className="absolute top-0 -right-8 w-32 h-32
  bg-[radial-gradient(circle_at_10%_80%,transparent_0%,rgba(40,200,120,0.45)_10%,rgba(255,255,150,0.55)_50%,rgba(150,255,180,0.75)_60%,rgba(178,255,210,0.85)_100%)]
  blur-xl opacity-90 rounded-[60%_40%_70%_30%]"
            />

            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <div className="mt-14">
              <p className="mt-6 text-sm font-semibold text-gray-700">
                {item.subtitle}
              </p>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
