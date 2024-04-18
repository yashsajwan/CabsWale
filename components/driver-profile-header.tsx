import Image from "next/image";
import Link from "next/link";

const ProfileHeader = ({ userData }: any) => {
  return (
    <>
        <div className="flex px-auto items-center">
          <Image
            src={userData.profile_image}
            width={200}
            height={200}
            alt="Picture of the driver"
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
                      className="w-52 h-10"
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
                <h2>No Connections.</h2>
              ) : (
                <h2>Connections - {userData.connections}</h2>
              )}
            </div>
          </div>
        </div>
        <div>Experience : {userData.experience} years</div>
        <div className="flex justify-center items-center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.app.cabswalle"
            className="bg-[#2463d4] text-white p-5 text-2xl my-5"
          >
            Connect with me on CabsWale App
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/verified.png"
            alt="verified"
            width={200}
            height={200}
            className="w-1/2"
          />
        </div>
    </>
  );
};

export default ProfileHeader;
