import Image from "next/image";
interface BadgeProps {
  imageUrl: string;
  name: string;
}
export default function Badge({ imageUrl, name }: BadgeProps) {
  return (
    <div className="border border-dashed border-gray-500 rounded-lg mx-2 bg-gray-900">
      <div className="flex items-center gap-2 px-2">
        <Image
          className=""
          src={imageUrl}
          alt={name}
          width={30}
          height={30}
        ></Image>
        <p className="text-white font-semibold">{name}</p>
      </div>
    </div>
  );
}
