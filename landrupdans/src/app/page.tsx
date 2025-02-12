import Knap from '@/components/knap';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(/splash-image.jpg)` }} className="h-screen bg-cover bg-center relative">
      <Image src="/logo.png" alt="Landrup Dans Logo" width={341} height={153} className="absolute bottom-64 left-0" />
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <Knap text="Kom i gang" />
      </div>
    </div>
  );
}
