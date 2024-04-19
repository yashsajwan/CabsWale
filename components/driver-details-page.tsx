"use client";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import ProfileHeader from "./driver-profile-header";
import Vechicles from "./driver-vehicles";
import TopRoutes from "./driver-top-routes";
import AppDownload from "./app-download";

import Lottie from "lottie-react";
import loader from "@/public/loader.json";

async function fetchFromFirebase(phone: string) {
  const snapshot = await getDocs(collection(db, "drivers"));
  let data = null;
  snapshot.forEach((doc) => {
    if (doc.data().phoneNo === "+" + phone) {
      data = doc.data();
      return data;
    }
  });
  return data;
}

const DriverDetailsPage = (props: any) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let data = await fetchFromFirebase(props.phone);
      localStorage.setItem("item", data? JSON.stringify(data) : "");
      // let data = localStorage.getItem("item");
      // data = JSON.parse(data ? data : "");
      setUserData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return loading ? (
    <>
      <h1 className="text-4xl justify-center items-center mt-32 flex flex-col">
        <div className="">
          <Lottie animationData={loader} />
        </div>

        <span>Loading...</span>
      </h1>
    </>
  ) : (
    <>
      {userData ? (
        <>
          <div className="m-5 sm:m-10">
            <ProfileHeader userData={userData} />
            <Vechicles userData={userData} />
            <TopRoutes userData={userData} />
            <AppDownload />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-center mt-32">No profile.</h1>
        </>
      )}
    </>
  );
};

export default DriverDetailsPage;
