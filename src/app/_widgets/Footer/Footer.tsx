export const Footer = async () => {
  const response = await fetch("https://webring.otomir23.me/39/data");
  const data = await response.json();

  return (
    <footer className="bottom-0 w-full bg-slate-100 dark:bg-black flex items-center justify-between py-3 px-6">
      <a href="https://webring.otomir23.me/39/prev">{"<-"}</a>
      <a href="https://webring.otomir23.me/39/next">{"->"}</a>
    </footer>
  );
};
