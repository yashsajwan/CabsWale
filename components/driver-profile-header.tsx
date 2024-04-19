import Image from "next/image";
import Link from "next/link";

const ProfileHeader = ({ userData }: any) => {
  return (
    <>
        <div className="flex items-center backdrop-blur-2xl p-5">
          <Image
            src={userData.profile_image}
            width={200}
            height={200}
            alt="Picture of the driver"
            objectFit="cover"
            className="w-32 h-32 rounded-full bg-auto sm:w-52 sm:h-52 mr-7"
          />
          <div className="flex flex-col">
            <div className="flex">
              <h2 className="text-2xl sm:text-3xl py-4 px-1 ">{userData.name}</h2>
              {userData.fraud ? (
                <Image
                  src="/images/fr.png"
                  alt="fraud"
                  width={200}
                  height={200}
                  className="h-4 w-auto sm:w-28 sm:h-5"
                />
              ) : (
                <>
                  {userData.verified ? (
                    <Image
                      src="/images/ve.png"
                      alt="verified"
                      width={200}
                      height={200}
                      className="h-4 w-auto sm:w-28 sm:h-5"
                    />
                  ) : (
                    <Image
                      src="/images/nv.png"
                      alt="not verified"
                      width={200}
                      height={200}
                      className="h-4 w-auto sm:w-28 sm:h-5"
                    />
                  )}
                </>
              )}
            </div>
            <div>
              {userData.connections === 0 ? (
                <h2 className="py-3">No Connections.</h2>
              ) : (
                <h2 className="py-3">Connections - {userData.connections}</h2>
              )}
            </div>
          </div>
        </div>
        <div className="text-2xl px-6">Experience : {userData.experience} years</div>
        <div className="flex justify-center items-center bg-[#2463d4] h-12 mt-10">
          <Link
            href="https://play.google.com/store/apps/details?id=com.app.cabswalle"
            className=" text-white text-2xl my-5 w-full"
          >
            <h2 className="text-xl text-center p-2">Connect with me on CabsWale App</h2>
          </Link>
        </div>

        <div className="flex justify-center items-center bg-[#87d695] mt-3">
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
