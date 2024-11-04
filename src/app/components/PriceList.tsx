import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiCircleCheck } from "react-icons/ci";

const PriceList = () => {
  const plans = [
    {
      title: "Basic",
      description: "Perfect for small projects",
      features: [
        "Up to 5 pages",
        "Free 1 year hosting",
        "Free domain",
        "Basic SEO",
      ],
      price: "495 €",
    },
    {
      title: "Custom",
      description: "Best for business needs.",
      features: [
        "Customized design",
        "Advanced functionality",
        "Multiple revisions",
        "Priority support",
      ],
      price: "1000 + €",
    },
    {
      title: "E-commerce",
      description: "All you need to start selling online.",
      features: [
        "Product pages",
        "Payment integration",
        "SEO optimization",
        "Support",
      ],
      price: "695 €",
    },
  ];

  return (
    <div className="w-full hidden sm:block md:flex lg:flex flex-row items-center gap-10">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`bg-black text-white py-10 px-5 flex-1 ${
            index === 1 ? "bg-[#01A7E1] space-y-10" : "space-y-5"
          }`}
        >
          <CardHeader className="flex justify-center items-center p-0">
            <CardTitle
              className={`text-3xl font-thin ${index === 1 ? "text-4xl" : ""}`}
            >
              {plan.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center p-0 gap-10">
            <p className="w-full text-center text-sm">{plan.description}</p>{" "}
            {/* Added description */}
            <ul className="list-none list-inside text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex flex-row gap-1 items-center">
                  <CiCircleCheck /> {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-row justify-center items-center p-0">
            <p
              className={`text-3xl ${
                index === 1 ? "text-4xl font-medium" : ""
              }`}
            >
              {plan.price}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PriceList;
