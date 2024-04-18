"use client";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

async function fetchFromFirebase(phone:string){
  const snapshot = await getDocs(collection(db, "drivers"));
  let data: any = [];
  snapshot.forEach((doc) => {
    if (doc.data().phoneNo === "+" + phone) {
      data.push(doc.data());
      return data;
    }
  });
  return data;
}

const DriverDetailsPage = (props: any) => {
  const [userData, setUserData] = useState([{ city: "" }]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetchFromFirebase(props.phone);
      console.log(data);
      setUserData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {userData.map((item, idx) => (
        <p key={idx}>
            {item.city}
        </p>
      ))}
    </>
  );
};

export default DriverDetailsPage;
