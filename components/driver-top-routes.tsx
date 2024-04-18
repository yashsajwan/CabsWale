import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { PhoneCall } from "lucide-react";

const TopRoutes = ({ userData }: any) => {
  return (
    <>
      <div className="text-3xl my-10 bg-yellow-500 p-2">TopRoutes</div>
      {userData.routes.length === 0 ? (
        <div className="text-3xl">No routes.</div>
      ) : (
        <>
          <div>
            {userData.routes.map((route: any, idx: number) => (
              <div className="flex justify-center items-center" key={idx}>
                <h2 className="text-2xl p-2">{route.from}</h2>
                <ArrowRight className="bg-[#2463d4] m-2 h-12 w-12 text-white"/>
                <h2 className="text-2xl p-2">{route.to}</h2>
              </div>
            ))}
          </div>

          <div className="my-10 flex justify-around">
            <Link href={`https://wa.me/${userData.phoneNo}`}>
              <h2 className="bg-[#2463d4] rounded-lg text-white text-2xl p-5 flex justify-center items-center">
                {" "}
                <Image
                  src="/images/whatsapp.jpg"
                  alt="fraud"
                  width={100}
                  height={100}
                  className="rounded-full bg-white w-20 h-auto px-2 mr-3"
                />
                Message
              </h2>
            </Link>

            <Link href={`tel:${userData.phoneNo}`}>
              <h2 className="bg-[#2463d4] rounded-lg text-white text-2xl p-5 flex justify-center items-center">
                <PhoneCall className="bg-white text-black rounded-full w-24 h-9 px-5 mr-3" />{" "}
                Call
              </h2>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default TopRoutes;
