import Button from "./(components)/Button";

export default function Page() {
  return (
    <main className="mt-20 flex flex-col items-center justify-center">
      <section className="flex flex-col items-center gap-12 p-20">
        <h1 className="w-full bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-center text-6xl font-bold tracking-wide text-transparent">
          Utilidades Next JS
        </h1>
        <h2 className="w-9/12 text-center text-xl opacity-60">
          Projeto feito para entender, aplicar e documentar as novas utilidades
          do recém-lançado Next JS 13
        </h2>
        <div className="flex items-center gap-4">
          <Button backgroundColor="white">Ver Mais</Button>
          <Button backgroundColor="black">Aprender Next</Button>
        </div>
      </section>
    </main>
  );
}
