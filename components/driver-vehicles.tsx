import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Vechicles = ({ userData }: any) => {
  return (
    <>
      <div>Vechicles:</div>
      {userData.vehicles.length === 0 ? (
        <div>No Vechicles.</div>
      ) : (
        <div className="flex justify-center items-center">
          <Carousel className="w-1/2 h-[30rem] ">
            <CarouselContent>
              {userData.vehicles.map((vehicle: any) =>
                vehicle.images.map((cab: string) => (
                  <CarouselItem key={cab}>
                    <Card className=" w-full h-[30rem] ">
                      <Image
                        key={cab}
                        src={cab}
                        height={700}
                        width={700}
                        alt="car image"
                        className="w-full h-full object-cover"
                      />
                    </Card>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Vechicles;
