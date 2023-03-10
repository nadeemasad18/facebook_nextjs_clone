import Image from "next/image";

function Contact({ name, src }) {
  return (
    <div
      className="flex items-center text-white mb-2 relative hover:bg-gray-800 
    cursor-pointer p-2 rounded-xl"
    >
      <Image
        className="rounded-full "
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />

      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
}

export default Contact;
