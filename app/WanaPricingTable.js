import { Check, Star } from "lucide-react";
import Link from "next/link";

// 8000 sqm x 300
//480 - 800

const tiers = [
  {
    name: "Basic",
    price: "2.4M",
    squareMeter: "300SQM",
    features: [
      "Modern and smart home",
      "Eco-friendly design",
      "Health and security",
      "Sustainable environment",
    ],
    color: "bg-primary",
    buttonColor: "bg-[#1C1C1C] hover:bg-neutral-focus",
    recommend: true,
  },
  {
    name: "Standard",
    price: "3.84M",
    squareMeter: "480SQM",
    features: [
      "Eco-friendly environment",
      "Net-Zero carbon footprint",
      "Enhanced property value",
      "Modern and smart home",
      "Cost savings",
      "Future proof investment",
      "Increased demand",
      "Sustainable environment",
    ],
    color: "bg-secondary",
    buttonColor: "bg-[#1C1C1C] hover:bg-neutral-focus",
    recommended: true,
  },
  {
    name: "Business",
    price: "6.4M",
    squareMeter: "800SQM",
    features: [
      "Modern and smart home",
      "Net-Zero carbon footprint",
      "Future proof investment",
      "Eco-friendly environment",
      "Enhanced property value",
      "Sustainable environment",
      "Cost savings",
      "Increased demand",
      "Eco-friendly design",
      "Profitable opportunity development",
    ],
    color: "bg-primary",
    buttonColor: "bg-[#1C1C1C] hover:bg-neutral-focus",
    recommend: true,
  },
];

export default function WanaPricingTable() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`w-full md:w-1/3 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
              tier.color
            } ${tier.recommended ? "ring-4 ring-[#6b428e]" : ""} ${
              tier.recommend ? "ring-1 ring-blue-200" : ""
            }`}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 flex justify-between items-center">
                <span>{tier.name}</span>
                {tier.recommended && (
                  <Star className="text-accent fill-current" size={24} />
                )}
              </h2>
              <div className="text-2xl md:text-4xl font-extrabold mb-4">
                <span className=" ">N{tier.price}</span>
                <span className="text-base font-normal text-[#6b428e]">
                  {" "}
                  | {tier.squareMeter}
                </span>
              </div>
              <Link href="/contact">
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
