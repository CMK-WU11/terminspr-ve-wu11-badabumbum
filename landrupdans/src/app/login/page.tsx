import Knap from '@/components/knap';
import Input from '@/components/input';

export default function Login() {
  return (
    <div style={{ backgroundImage: `url(/splash-image.jpg)` }} className="h-screen bg-cover bg-center relative">
      <div className="absolute top-[131.09px] left-[-167.47px] w-[756.85px] h-[479.94px] bg-[#5E2E53] opacity-50 rotate-[-27.19deg]"></div>

      <div className="space-y-4 pt-64">
        <h1 className="text-lightGray text-lg">Log ind</h1>
        <Input placeholder="brugernavn" />
        <Input placeholder="adgangskode" />
        <div className="pt-4">
          <Knap text="Log ind" />
        </div>
      </div>
    </div>
  );
}
