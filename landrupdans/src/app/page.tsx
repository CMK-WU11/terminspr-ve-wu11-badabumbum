import Knap from '@/components/knap';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(/splash-image.jpg)` }} className="h-screen bg-cover bg-center">
      <Knap string="lol" />
    </div>
  );
}
