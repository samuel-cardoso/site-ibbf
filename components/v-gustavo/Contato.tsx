import whatsappIcon from "../public/whatsapp.png";
import instagramIcon from "../public/instagram.png";
import facebookIcon from "../public/facebook.png";

export default function Contato() {
  return (
    <div
      id="contato"
      className="flex flex-col md:flex-row p-2 gap-5 justify-center text-gray-700"
    >
      <section className="flex flex-col w-full md:w-auto items-center space-y-5">
        <div>
          <h1 className="text-xl md:text-2xl text-center font-semibold">
            Nosso Contato
          </h1>
          <p className="text-gray-500 md:text-lg">Como podemos ajudar você?</p>
        </div>

        <div>
          <p>
            <strong>Ministério:</strong> exemplo1@gmail.com
          </p>
          <p>
            <strong>Pastor: </strong> exemplo2@gmail.com
          </p>
        </div>

        <p>
          <strong>Redes Sociais:</strong>
        </p>
        <div className="flex h-10 md:h-15 gap-3 justify-start">
          <a target="_blank" href="https://wa.me/" title="Whatsapp">
            <img
              src={whatsappIcon.src}
              alt="Whatsapp icon"
              className="md:size-16 size-12 shadow-lg rounded-full hover:scale-120 transition"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/p/1%C2%AA-Igreja-Batista-Biblica-de-Canoas-100068079513561/?locale=pt_BR"
            title="Facebook"
          >
            <img
              src={facebookIcon.src}
              alt="Facebook icon"
              className="md:size-16 size-12 shadow-lg rounded-full hover:scale-120 transition"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/ibbfcanoasoficial/"
            title="Instagram"
          >
            <img
              src={instagramIcon.src}
              alt="Instagram icon"
              className="md:size-16 size-12 shadow-lg rounded-full hover:scale-120 transition"
            />
          </a>
        </div>
      </section>

      <div className="flex flex-col items-center">
        <form className="w-full max-w-sm my-auto mx-10">
          <label htmlFor="Name" className="relative">
            <input
              type="text"
              id="Name"
              placeholder=""
              className="peer mt-0.5 w-full my-2.5 h-10 px-3 rounded border-gray-300 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 start-3 -translate-y-5 bg-gray-100 px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
              Nome
            </span>
          </label>

          <label htmlFor="Email" className="relative">
            <input
              type="email"
              id="Email"
              placeholder=""
              className="peer mt-0.5 w-full my-2.5 h-10 px-3 rounded border-gray-300 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 start-3 -translate-y-5 bg-gray-100 px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
              Email
            </span>
          </label>

          <label htmlFor="Message">
            <span className="text-sm font-medium text-gray-700">Conteúdo</span>
            <textarea
              id="Message"
              className="mt-0.5 w-full p-3 resize-none rounded border-gray-300 shadow-sm sm:text-sm"
              rows={4}
              placeholder="Insira sua mensagem"
            ></textarea>
          </label>

          <button className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer mt-2 transition text-white p-3 rounded-md">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
