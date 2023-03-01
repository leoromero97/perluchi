import Button from '../Button/';
import { clsx } from 'clsx';

function Banner({ className, title, subtitle, buttonText }) {
  return (
    <div
      className={clsx('w-full flex flex-col p-4 md:flex-row items-center justify-center bg-image-banner h-96 md:h-u518 bg-no-repeat bg-center bg-cover', className)}
    >
      <div className="w-full max-w-screen-xl flex flex-col gap-12 md:gap16">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-50">{title}</h1>
        <span className="text-2xl font-medium text-amber-50">{subtitle}</span>
        {buttonText && (<Button text={buttonText} isPrimary className="w-fit"/>)}
      </div>
    </div>
  );
}

export default Banner;
