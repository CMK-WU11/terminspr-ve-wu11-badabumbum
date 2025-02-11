interface KnapProps {
  text: string;
}

export default function Knap({ text }: KnapProps) {
  return (
    <button className="w-[249px] h-[54px] bg-background text-lightGray font-racing text-md rounded-lg shadow-md">
      <p>{text}</p>
    </button>
  );
}
