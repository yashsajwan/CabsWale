import Link from "next/link";
import Image from "next/image";
const AppDownload = () => {
  return (
    <>
    <h1 className="text-2xl sm:text-3xl my-5  p-2">Download CabsWale App : </h1>
      <div className="flex flex-col sm:flex-row justify-around">
        <Link href="https://play.google.com/store/apps/details?id=com.app.cabswalle" className="my-4">
          <Image
            src="/images/android.png"
            alt="download on android"
            width={600}
            height={400}
            className="w-96 h-32"
          />
        </Link>
        <Link href="https://apps.apple.com/in/app/cabswale/id6464491782" className="my-4">
          <Image
            src="/images/iso.png"
            alt="download on android"
            width={600}
            height={400}
            className="w-96 h-32"
          />
        </Link>
      </div>
    </>
  );
};

export default AppDownload;
