import avatar from "@public/avatar.jpg";
import Image from "next/image";

export const Avatar = () => {
  return (
    <div>
      <Image
        src={avatar}
        alt="About"
        width={400}
        height={400}
        className="rounded-full"
      />
    </div>
  );
};
