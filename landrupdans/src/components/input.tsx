import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
}

export default function Input({ placeholder, className, ...props }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={twMerge('w-[332px] h-[50px] bg-lightGray rounded-lg px-4', className)}
      {...props}
    />
  );
}
