import { Check, Star } from "lucide-react";
import Link from "next/link";

// 8000 sqm x 300
//480 - 800

const tiers = [
  {
    name: "Basic",
    Promo: "1.75M",
    price: "2.5M",
    squareMeter: "250SQM",
    features: [
      "Central Security System",
      "24hr Power Management System",
      "Walk Park",
      "Business Hub",
    ],
    color: "bg-primary",
    buttonColor: "bg-[#1C1C1C] hover:bg-neutral-focus",
    recommend: true,
  },
  {
    name: "Standard",
    Promo: "3.5M",
    price: "5M",
    squareMeter: "500SQM",
    features: [
      "Eco friendly system",
      "Gated Community",
      "Central security",
      "24hrs power",
      "Walk Park",
      "Park / recreational centers",
      "24hrs CCTV Center ",
    ],
    color: "bg-secondary",
    buttonColor: "bg-[#1C1C1C] hover:bg-neutral-focus",
    recommended: true,
  },
  {
    name: "Business",
    Promo: "7M",
    price: "10M",
    squareMeter: "1000SQM",
    features: [
      "Central security",
      "Commercial Area",
      "24hrs security",
      "Swimming pool",
      "24hrs power management",
      "Business hub",
      "Internal road network management",
      "24hrs CCTV",
      "Eco friendly community",
    ],
    color: "bg-primary",
    buttonColor: "bg-[#1C1C1C] hover:bg-neutral-focus",
    recommend: true,
  },
];

export default function UrbanPricingTable() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`w-full md:w-1/3 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
              tier.color
            } ${
              tier.recommended
                ? "ring-4 ring-[#014239] dark:ring-[#12BE08]"
                : ""
            } ${tier.recommend ? "ring-1 ring-blue-200 " : ""}`}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 flex justify-between items-center">
                <span>{tier.name}</span>
                {tier.recommended && (
                  <Star className="text-accent fill-current" size={24} />
                )}
              </h2>
              <div className="text-2xl md:text-4xl font-extrabold mb-4">
                <span className=" line-through mr-2">N{tier.price}</span>-
                <span className="text-[#014239] dark:text-[#12BE08] ml-2">
                  N{tier.Promo}
                </span>
                <span className="text-base font-normal text-[#014239] dark:text-[#12BE08]">
                  {" "}
                  | {tier.squareMeter}
                </span>
              </div>
              <Link href="/">
                <button
                  className={`w-full py-3 px-4 rounded-full font-bold text-white transition-colors ${tier.buttonColor}`}
                >
                  Claim Offer
                </button>
              </Link>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="mr-2 h-5 w-5 text-accent" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
