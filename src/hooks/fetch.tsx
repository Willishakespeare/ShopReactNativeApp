import React, { FC, useEffect, useState } from "react";

const FetchHook = (url: string) => {
  const [data, setdata] = useState<any>();
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState<any>();
  useEffect(() => {
    setloading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setloading(false);
      })
      .catch((err) => {
        seterrors(err);
        setloading(false);
      });
  }, [url]);
  return { data, loading, errors };
};

export default FetchHook;
