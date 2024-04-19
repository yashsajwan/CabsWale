import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { PhoneCall } from "lucide-react";

const TopRoutes = ({ userData }: any) => {
  return (
    <>
      <div className="text-2xl sm:text-3xl my-5 p-2">Top Routes :</div>
      {userData.routes.length === 0 ? (
        <div className="text-xl p-2 text-gray">No routes found.</div>
      ) : (
        <>
          <div>
            {userData.routes.map((route: any, idx: number) => (
              <div
                className="grid grid-cols-3 items-center text-center "
                key={idx}
              >
                <h2 className="text-lg sm:text-2xl sm:p-2">{route.from}</h2>
                <ArrowRight className="h-8 w-8 bg-[#2463d4] m-2 sm:h-12 sm:w-12 text-white mx-auto" />
                <h2 className="text-lg sm:text-2xl sm:p-2">{route.to}</h2>
              </div>
            ))}
          </div>

          <div className="my-10 flex justify-between sm:justify-around">
            <Link
              href={`https://wa.me/${userData.phoneNo}`}
              className="bg-yellow-400 w-[48%]"
            >
              <h2 className="bg-[#2463d4] text-white text-2xl p-5 flex justify-center items-center h-20">
                {" "}
                <Image
                  src="/images/whatsapp.png"
                  alt="fraud"
                  width={100}
                  height={100}
                  className="rounded-full w-16 h-auto sm:mr-3"
                />
                <span className="text-2xl">Message</span>
              </h2>
            </Link>

            <Link
              href={`tel:${userData.phoneNo}`}
              className="bg-yellow-400 w-[48%]"
            >
              <h2 className="bg-[#2463d4] text-white text-2xl p-5 flex justify-center items-center h-20">
                {" "}
                <Image
                  src="/images/call.png"
                  alt="fraud"
                  width={100}
                  height={100}
                  className="rounded-full w-12 mx-2 h-auto sm:mr-3"
                />
                  <span className="text-2xl">Call</span>
              </h2>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default TopRoutes;
