import React from "react";

const Plans = () => {
  const plans = [
    {
      name: "Basic Reader",
      price: "৳299/month",
      color: "from-blue-400 to-blue-600",
      features: [
        "Read up to 100 eBooks online",
        "Standard reading mode",
        "No downloads — read-only access",
        "Email support",
      ],
    },
    {
      name: "Premium Reader",
      price: "৳599/month",
      color: "from-purple-400 to-purple-600",
      features: [
        "Read up to 300 eBooks online",
        "Priority reading speed",
        "Request 1 new book per month",
        "Ad-free reading experience",
      ],
    },
    {
      name: "Elite Reader",
      price: "৳999/month",
      color: "from-pink-400 to-pink-600",
      features: [
        "Unlimited eBook access",
        "Early access to new releases",
        "Request unlimited books",
        "Audiobook & offline mode (coming soon)",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800">Choose Your Reading Plan 📖</h2>
        <p className="text-gray-600 mt-3">
          Subscribe to unlock your reading journey. Enjoy access to hundreds of books online — no downloads, no limits.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl p-8 border-t-8 border-transparent hover:border-indigo-500 transform transition-all hover:-translate-y-2 hover:shadow-2xl`}
          >
            <div className={`bg-gradient-to-r ${plan.color} text-white p-4 rounded-xl mb-6`}>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-lg mt-1">{plan.price}</p>
            </div>

            <ul className="mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  📘 <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
