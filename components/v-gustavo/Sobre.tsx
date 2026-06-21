import Carrossel from "@/components/v-gustavo/Carrossel";

export default function Sobre() {
  return (
    <div
      id="sobre"
      className="bg-gray-200 flex flex-col md:flex-row justify-center p-6 gap-6"
    >
      <section className="flex flex-col gap-3 justify-center">
        <h1 className="text-xl font-semibold">Sobre Nós</h1>
        <p className="max-w-2xl font-sans">
          A IBBF é uma comunidade de fé comprometida com a autoridade da Bíblia
          Sagrada, nossa única regra de fé e prática. Desde a sua fundação em
          1980, dedicamos nossa missão a aplicar o Evangelho de Jesus Cristo em
          Canoas, promovendo a adoração à Deus e a edificação dos membros. Somos
          uma Igreja Batista firmada na doutrina bíblica, que busca viver o amor
          de Cristo em todas as nossas ações.
        </p>
        <button className="w-40 mt-5 m-auto md:m-0 hover:cursor-pointer text-white p-4 rounded bg-blue-500 hover:bg-blue-600">Saiba Mais</button>
      </section>

      <div className="bg-gray-300 rounded-lg shadow-lg flex justify-center items-center lg:max-w-lg w-full h-70">
        <Carrossel/>
      </div>
    </div>
  );
}
