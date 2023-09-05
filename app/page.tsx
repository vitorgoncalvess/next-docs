import Button from "./(components)/Button";
import Title from "./(components)/Title";
import Utility from "./(components)/Utility";

export default function Page() {
  return (
    <main className="mt-12 flex flex-col items-center justify-center">
      <section className="flex flex-col items-center gap-12 p-20">
        <Title>Utilidades Next JS</Title>
        <h2 className="w-9/12 text-center text-xl opacity-60">
          Projeto feito para entender, aplicar e documentar as novas utilidades
          do recém-lançado Next JS 13
        </h2>
        <div className="flex items-center gap-4">
          <Button redirect="/docs" backgroundColor="white">
            Ver Mais
          </Button>
          <Button redirect="/slide" backgroundColor="black">
            Aprender Next
          </Button>
        </div>
      </section>
      <h1 className="mt-24">
        <Title size="md">Algumas das funcionalidades</Title>
      </h1>
      <section className="mt-16 grid w-10/12 grid-cols-[1fr_1fr_1fr] gap-4 p-4">
        <Utility />
        <Utility />
        <Utility />
      </section>
    </main>
  );
}
