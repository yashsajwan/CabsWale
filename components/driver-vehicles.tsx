import Image from "next/image";

const Vechicles = ({ userData }: any) => {
  return (
    <>
      <div>Vechicles:</div>
      <div>
        {userData.vehicles.length > 0 ? (
          userData.vehicles.map((vehicle: any) =>
            vehicle.images.map((cab: string) => (
              <Image
                key={cab}
                src={cab}
                alt="car image"
                width={200}
                height={200}
                className=""
              />
            ))
          )
        ) : (
          <div>No Vechiles found.</div>
        )}
      </div>
    </>
  );
};

export default Vechicles;
