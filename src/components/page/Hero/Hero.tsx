export default function Hero() {
  return (
    <section className="w-full flex px-12 py-6 justify-center items-start gap-2.5">
      <div className="w-full flex flex-col justify-start items-center gap-6">
        <h2 className="text-h2 font-bold">Topic to discuss</h2>
        <h1 className="text-3xl font-bold tracking-[0.08rem]">
          Lasagne is a pie
        </h1>
        <div className="flex justify-center items-center gap-2.5 flex-col py-2 px-4 rounded-[1rem] bg-[#F9F4C2] text-black text-[0.5rem] italic">
          <p>
            <strong>Lasagne</strong> contains a delicious filling with an upper
            crust or structural starch layer, this can thus be defined as a pie.{" "}
            <br />
            It is an italian shepherds pie
          </p>
        </div>
      </div>
    </section>
  );
}
