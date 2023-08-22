"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
export default function NewsDetailPage() {
  const [data, setData] = useState({
    fileurl: "",
    title: "",
    description: "",
  });
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`api/upload/${id}`);
      const data = await response.data;
      setData(data);
    } catch (err) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <React.Fragment>
      <h1>news Detail page</h1>

      <div className="flex items-center flex-col justify-center ">
        <div className="bg-white p-3 rounded">
          <Image
            src={data.fileurl}
            alt=""
            width={600}
            height={600}
            className="w-auto h-auto"
          />
          <div>
            <h1 className="text-black mx-2 my-1 font-bold text-lg">
              {data.title}
            </h1>
            <p className="text-black mx-2 my-1">{data.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
