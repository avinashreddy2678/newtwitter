import Image from "next/image";

interface AvatarProps {
  profileImg: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ profileImg, isLarge, hasBorder }) => {
  return (
    <div
      className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        ${isLarge ? 'h-32' : 'h-12'}
        ${isLarge ? 'w-32' : 'w-12'}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        className="rounded-full"
        alt="Avatar"
        src={profileImg}
        width={0}
        height={0}
      />
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
        src={profileImg}
      />
    </div>
  );
};

export default Avatar;
