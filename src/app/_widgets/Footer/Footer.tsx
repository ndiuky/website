"use client";

import { useEffect, useState } from "react";

export const Footer = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://webring.otomir23.me/39/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <footer className="bottom-0 w-full bg-slate-100 dark:bg-black flex items-center justify-between py-3 px-6">
      <a href="https://webring.otomir23.me/39/prev">{"<-"}</a>
      <a href="https://webring.otomir23.me/39/next">{"->"}</a>
    </footer>
  );
};
