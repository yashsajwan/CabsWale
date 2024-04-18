import Link from "next/link";
import Image from "next/image";
const AppDownload = () => {
  return (
    <>
    <h1 className="text-3xl my-10 bg-[#f9df04] p-2">Download CabsWale App</h1>
      <div className="flex flex-col sm:flex-row justify-around">
        <Link href="https://play.google.com/store/apps/details?id=com.app.cabswalle">
          <Image
            src="/images/android.png"
            alt="download on android"
            width={600}
            height={400}
            className="w-auto h-32"
          />
        </Link>
        <Link href="https://apps.apple.com/in/app/cabswale/id6464491782">
          <Image
            src="/images/iso.png"
            alt="download on android"
            width={600}
            height={400}
            className="w-auto h-32"
          />
        </Link>
      </div>
    </>
  );
};

export default AppDownload;
