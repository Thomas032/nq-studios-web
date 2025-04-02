"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiCircleCheck } from "react-icons/ci";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import plans from "@/data/priceData.json";

const PriceList = () => {
  const openContactDialog = () => {
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Large screen layout */}
      <div className="w-full hidden sm:grid md:grid lg:grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`border-none shadow-xl transition-all duration-500 hover:transform hover:translate-y-[-8px] ${
              index === 1
                ? "bg-gradient-to-br from-[#01A7E1] to-[#0a2447] text-white"
                : "bg-black text-white"
            }`}
          >
            <CardHeader className="flex justify-center items-center pt-8 pb-4">
              <CardTitle
                className={`text-2xl font-medium ${
                  index === 1 ? "text-3xl" : ""
                }`}
              >
                {plan.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between p-6 space-y-8">
              <p className="text-center text-sm opacity-90">
                {plan.description}
              </p>
              <ul className="list-none space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CiCircleCheck
                      className={`flex-shrink-0 text-lg ${
                        index === 1 ? "text-white" : "text-[#01A7E1]"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-4 pb-8">
              <p
                className={`text-3xl font-bold ${
                  index === 1 ? "text-4xl" : ""
                }`}
              >
                {plan.price}
              </p>
              <button
                onClick={openContactDialog}
                className={`mt-4 py-2 px-6 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  index === 1
                    ? "bg-white text-[#01A7E1]"
                    : "bg-gradient-to-r from-[#01A7E1] to-[#0152A1] text-white"
                }`}
              >
                Contact us
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Mobile tab layout */}
      <div className="w-full sm:hidden z-10">
        <Tabs defaultValue={plans[0].title.toLowerCase()} className="w-full">
          <TabsList className="flex justify-between bg-transparent p-0 mb-2">
            {plans.map((plan, index) => (
              <TabsTrigger
                key={index}
                value={plan.title.toLowerCase()}
                className="text-lg text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#01A7E1] data-[state=active]:to-[#0152A1] rounded-t-md flex-grow"
              >
                {plan.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {plans.map((plan, index) => (
            <TabsContent
              key={index}
              value={plan.title.toLowerCase()}
              className="mt-0"
            >
              <Card className="bg-black border-none text-white py-8 px-5 rounded-md shadow-lg">
                <CardHeader className="flex justify-center items-center p-0">
                  <CardTitle className="text-3xl font-medium">
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center p-0 gap-6 mt-6">
                  <p className="w-full text-center text-lg opacity-90">
                    {plan.description}
                  </p>
                  <ul className="list-none space-y-3 w-full">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CiCircleCheck className="text-[#01A7E1] text-xl flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-center p-0 mt-8 space-y-4">
                  <p className="text-4xl font-bold">{plan.price}</p>
                  <button
                    onClick={openContactDialog}
                    className="mt-4 py-2 px-6 bg-gradient-to-r from-[#01A7E1] to-[#0152A1] text-white rounded-md hover:shadow-lg transition-all duration-300 text-sm font-medium hover:scale-105"
                  >
                    Contact us
                  </button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default PriceList;
