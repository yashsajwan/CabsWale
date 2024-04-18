import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { PhoneCall } from "lucide-react";

const TopRoutes = ({ userData }: any) => {
  return (
    <>
      <div>TopRoutes</div>
      {userData.routes.length === 0 ? (
        <div>No routes.</div>
      ) : (
        <>
          <div>
            {userData.routes.map((route: any, idx: number) => (
              <div className="flex" key={idx}>
                <h2>{route.from}</h2>
                <ArrowRight />
                <h2>{route.to}</h2>
              </div>
            ))}
          </div>

          <div className="my-10 flex justify-around">
            <Link href={`https://wa.me/${userData.phoneNo}`}>
              <h2 className="bg-blue-400 p-5 flex justify-center items-center">
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
              <h2 className="bg-blue-400 p-5 flex justify-center items-center">
                <PhoneCall className="bg-white rounded-full w-20 h-auto px-5 mr-3" />{" "}
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