import Button from '@/components/atoms/Button';
import Gif from '@/components/atoms/Gif';
import TitleDescription from '@/components/atoms/TitleDescription';

import ArrowLeft from "../../public/ArrowLeft.svg"
import CarectersNotFound from '@/components/molecules/CarectersNotFound';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-14">

        <div className='relative w-full flex items-center justify-center'>
        <Gif variant="Gif404">
        </Gif>
        <CarectersNotFound />
        </div>
        <TitleDescription 
          title="یه مشکلی داریم"
          description="دوباره امتحان کنید یا به صفحه ی اصلی بروید !"
        />
        <Button 
          text="بازگشت به خانه" 
          variant="buttonOrange"
          icon={<span>
            <ArrowLeft />
          </span>} 
          type="link"
          href="/"
        />
    </div>
  );
}

export default NotFound;
