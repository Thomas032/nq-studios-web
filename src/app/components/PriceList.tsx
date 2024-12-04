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
  return (
    <>
      {/* Large screen layout */}
      <div className="w-full hidden sm:block md:flex lg:flex flex-row items-center gap-10 z-10">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`bg-black text-white py-10 px-5 flex-1 ${
              index === 1 ? "bg-[#01A7E1] space-y-10" : "space-y-5"
            }`}
          >
            <CardHeader className="flex justify-center items-center p-0">
              <CardTitle
                className={`text-3xl font-thin ${
                  index === 1 ? "text-4xl" : ""
                }`}
              >
                {plan.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center p-0 gap-10">
              <p className="w-full text-center text-sm">{plan.description}</p>
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

      {/* Mobile tab layout */}
      <div className="w-full sm:hidden z-10">
        <Tabs defaultValue={plans[0].title.toLowerCase()} className="w-full">
          <TabsList className="flex justify-between bg-transparent p-0">
            {plans.map((plan, index) => (
              <TabsTrigger
                key={index}
                value={plan.title.toLowerCase()}
                className="text-xl text-white rounded-b-none flex-grow"
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
              <Card className={`bg-black text-white py-10 px-5 rounded-t-none`}>
                <CardHeader className="flex justify-center items-center p-0">
                  <CardTitle className={`text-4xl font-thin`}>
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center p-0 gap-5 mt-5">
                  <p className="w-full text-center text-xl">
                    {plan.description}
                  </p>
                  <ul className="list-none list-inside text-xl">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex flex-row gap-1 items-center"
                      >
                        <CiCircleCheck /> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-row justify-center items-center p-0 mt-7">
                  <p className="text-5xl">{plan.price}</p>
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
