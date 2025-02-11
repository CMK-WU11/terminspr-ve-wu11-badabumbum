import Knap from '@/components/knap';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(/splash-image.jpg)` }} className="h-screen bg-cover bg-center">
      <Image src="/logo.png" alt="Landrup Dans Logo" width={100} height={100} />
      <Knap text="Kom i gang" />
    </div>
  );
}
