import React from "react";
import { API_BASE } from "../config/api";

export default function Plans() {
  const user = JSON.parse(localStorage.getItem("user"));

  const plans = [
    {
      name: "Basic Reader",
      price: 299,
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
      price: 599,
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
      price: 999,
      color: "from-pink-400 to-pink-600",
      features: [
        "Unlimited eBook access",
        "Early access to new releases",
        "Request unlimited books",
        "Audiobook & offline mode (coming soon)",
      ],
    },
  ];

  // ✅ Subscribe handler
  const handleSubscribe = async (planName) => {
    if (!user) {
      alert("Please log in first!");
      window.location.href = "/login";
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/subscriptions/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id, planName }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Subscription failed");
        return;
      }

      // ✅ Update user data in localStorage
      const updatedUser = {
        ...user,
        subscription: data.subscription,
        isSubscribed: true,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert(`✅ You are now subscribed to ${planName}!`);
      window.location.reload(); // refresh to update button state
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  // ✅ Helper to check if user already subscribed to this plan
  const isSubscribedTo = (planName) => {
    if (!user || !user.subscription?.planName) return false;
    const sub = user.subscription;
    const valid = new Date(sub.endDate) > new Date();
    return valid && sub.planName === planName;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800">
          Choose Your Reading Plan 📖
        </h2>
        <p className="text-gray-600 mt-3">
          Subscribe to unlock your reading journey. Enjoy access to hundreds of
          books online — no downloads, no limits.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const subscribed = isSubscribedTo(plan.name);
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-transparent hover:border-indigo-500 transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${plan.color} text-white p-4 rounded-xl mb-6`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-lg mt-1">৳{plan.price}/month</p>
              </div>

              <ul className="mb-6 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    📘 <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {subscribed ? (
                <button
                  disabled
                  className="w-full py-2 rounded-xl bg-green-500 text-white font-semibold cursor-not-allowed"
                >
                  ✅ Subscribed
                </button>
              ) : (
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className="w-full py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all"
                >
                  Subscribe Now
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
