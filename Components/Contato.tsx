export default function Contato() {
  return (
    <div
      id="contato"
      className="container mx-auto flex flex-col items-center my-10"
    >
      <h1 className="text-2xl font-bold mb-5">Contato</h1>
      <div className="w-full bg-black/10 shadow-2xl rounded-lg gap-10 grid grid-cols-2 py-15 px-30">
        {/* col 1 */}
        <div className="flex flex-col gap-2">
          {/* Formulário */}
          <h2 className="font-bold text-black text-2xl">Fale Conosco</h2>

          <form className="flex flex-col w-full h-100 bg-white/60 rounded-lg p-5 my-5 gap-3 shadow-lg">
            <input
              type="text"
              placeholder="Nome *"
              className="p-2 border border-black/20 rounded-lg"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-2 border border-black/20 rounded-lg"
            />
            <textarea
              placeholder="Mensagem *"
              className="h-32 resize-none p-2 border border-black/20 rounded-lg"
            />
            <button
              type="submit"
              className="mt-5 px-8 text-white font-bold p-3 rounded-2xl bg-blue-500 w-fit"
            >
              Enviar
            </button>
          </form>

          {/* Whatsapp */}
          <span className="flex w-fit items-center gap-3">
            <img
              src="/whatsapp-svgrepo-com.svg"
              alt="Whatsapp"
              className="w-12"
            />
            <p className="font-semibold text-black text-lg">(51) 9 1234-1234</p>
          </span>

          {/* Instagram */}
          <span className="flex w-fit items-center gap-3">
            <img
              src="/instagram-1-svgrepo-com.svg"
              alt="Whatsapp"
              className="w-12"
            />
            <p className="font-semibold text-black text-lg">@ibbfCanoas</p>
          </span>
        </div>

        {/* col 2 */}
        <div className="flex flex-col items-end shadow-lg rounded-2xl overflow-hidden">
          <img
            src="/ibbf-gmaps.png"
            alt="Igreja Batista Bíblica"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
