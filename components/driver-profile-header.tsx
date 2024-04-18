import Image from "next/image";
import Link from "next/link";

const ProfileHeader = ({ userData }: any) => {
  return (
    <>
        <div className="flex px-auto items-center bg-yellow-500 p-5">
          <Image
            src={userData.profile_image}
            width={200}
            height={200}
            alt="Picture of the driver"
            objectFit="cover"
            className="rounded-full bg-auto w-52 h-52 mr-7"
          />
          <div className="flex flex-col">
            <div className="flex">
              <h2 className="text-[3rem] ">{userData.name}</h2>
              {userData.fraud ? (
                <Image
                  src="/images/fr.png"
                  alt="fraud"
                  width={200}
                  height={200}
                />
              ) : (
                <>
                  {userData.verified ? (
                    <Image
                      src="/images/ve.png"
                      alt="verified"
                      width={200}
                      height={200}
                      className="w-28 h-5"
                    />
                  ) : (
                    <Image
                      src="/images/nv.png"
                      alt="not verified"
                      width={200}
                      height={200}
                    />
                  )}
                </>
              )}
            </div>
            <div>
              {userData.connections === 0 ? (
                <h2 >No Connections.</h2>
              ) : (
                <h2>Connections - {userData.connections}</h2>
              )}
            </div>
          </div>
        </div>
        <div className="text-xl">Experience : {userData.experience} years</div>
        <div className="flex justify-center items-center bg-[#2463d4] h-12 my-10">
          <Link
            href="https://play.google.com/store/apps/details?id=com.app.cabswalle"
            className=" text-white  p-5 text-2xl my-5"
          >
            <h2 className="text-xl">Connect with me on CabsWale App</h2>
          </Link>
        </div>

        <div className="flex justify-center items-center bg-[#87d695]">
          <Image
            src="/images/verified.png"
            alt="verified"
            width={800}
            height={800}
            // className="w-1/2"
          />
        </div>
    </>
  );
};

export default ProfileHeader;
