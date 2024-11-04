import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LinkStripProps {
  message: string;
  buttonText: string;
  link: string;
}

const LinkStrip: React.FC<LinkStripProps> = ({ message, buttonText, link }) => {
  return (
    <div className="w-full px-20 py-5 bg-zinc-100 flex flex-row justify-between items-center">
      <span className="text-md font-medium">{message}</span>
      <Link href={link}>
        <Button className="bg-[#01A7E1] text-white  hover:bg-[#018DBF]">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default LinkStrip;
