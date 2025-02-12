import Knap from '@/components/knap';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(/splash-image.jpg)` }} className="h-screen bg-cover bg-center relative">
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <Knap text="Log ind" />
      </div>
    </div>
  );
}
