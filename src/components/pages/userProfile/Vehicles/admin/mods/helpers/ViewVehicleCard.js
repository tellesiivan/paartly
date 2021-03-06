import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function ViewVehicleCard({
  Model,
  Make,
  Trim,
  Year,
  coverImage,
  profileLink,
}) {
  return (
    <div className="flex items-center p-1.5 h-full ">
      <div className="relative w-12 h-12 mr-2 rounded-full">
        <Image
          src={coverImage}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
          className="absolute rounded-full"
          alt="Profile Image Link"
        />
      </div>
      <div className="flex-1 space-y-1">
        <Link href={profileLink}>
          <a className="flex items-center mt-2 space-x-1.5 text-main cursor-pointer">
            <h2 className="font-semibold truncate md:text-[15px] ">
              {Year} {Make} {Model}
            </h2>
            <FiExternalLink />
          </a>
        </Link>
        {Trim.name && <p className="text-xs text-greyDark">{Trim.name}</p>}
      </div>
    </div>
  );
}
