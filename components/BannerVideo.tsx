export default function BannerVideo() {
  return (
    <div id="home" className="relative w-full h-[700px] select-none overflow-hidden">
      <video
        src="/bible.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover brightness-60"
      />
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-6">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-white text-2xl">Bem-vindo à</p>
          <h1 className='text-white text-5xl font-extrabold text-center font-["lora"] tracking-wider'>
            1ª Igreja Batista Bíblica de Canoas
          </h1>
        </div>
        <img draggable="false" src="/icon.svg" alt="Logo" className="w-48" />
      </div>
    </div>
  );
}
