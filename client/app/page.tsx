"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<string>("Запросить данные");
  const [isLoading, setIsloading] = useState<boolean>(false);

  const fetchData = () => {
    setIsloading(true);
    fetch("http://localhost:5000/users/")
      .then((data) => data.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  };

  return <Button onClick={fetchData}>{isLoading ? "Загрузка" : data}</Button>;
}
