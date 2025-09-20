export default function BannerVideo() {
  return (
    <div className="relative w-full h-[600px] select-none">
      <video
        src="/bible.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover brightness-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className='text-white text-5xl font-extrabold text-center font-["lora"] tracking-wider'>
          Igreja Batista Fundamental de Canoas
        </h1>
      </div>
    </div>
  );
}
