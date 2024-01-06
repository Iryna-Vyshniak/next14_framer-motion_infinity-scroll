import Image from 'next/image';

function Hero() {
  return (
    <header className='bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0'>
      <div className='flex-1 flex flex-col gap-10'>
        <Image src='/logo-hero.png' alt='logo' width={101} height={96} className='object-contain' />
        <h1 className='sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%] xt-center ext-center drop-shadow-[0_1px_0.5px_rgba(250,0,0,1)]'>
          Explore an Enchanting
          <span className='ml-2 red-gradient drop-shadow-[0_1px_0.5px_rgba(250,250,250,1)]'>
            World of Mangas
          </span>
        </h1>
      </div>
      <div className='lg:flex-1 relative w-full h-[50vh] justify-center'>
        <Image src='/mang.png' alt='anime' fill className='object-contain' />
      </div>
    </header>
  );
}

export default Hero;
