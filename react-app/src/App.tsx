function App() {
  return (
    <main className="bg-white max-w-6xl mx-auto md:py-12 md:px-24 py-12 px-10 rounded-t-xl rounded-bl-xl [border-end-end-radius:160px] shadow-lg">
      <section className="">
        <h1 className="text-3xl font-bold">Calculadora de idade</h1>
        <form className="" action="">
            <div className="flex gap-4 mt-5">
            <div className="">
              <label className="block text-neutral-400" htmlFor="day">
                DIA
              </label>
              <input
                type="number"
                id="day"
                className="border border-gray-300 p-2 flex-1 h-16 text-4xl font-extrabold  w-50 rounded mb-4"
              />
            </div>
            <div className="">
              <label className="block text-neutral-400" htmlFor="month">
                MÊS
              </label>
              <input
                type="number"
                id="month"
                className="border border-gray-300 p-2 flex-1 h-16 text-4xl font-extrabold  w-50 rounded mb-4"
              />
</div>
<div className="">
            <label className="block text-neutral-400" htmlFor="year">
              ANO
            </label>
            <input
              type="number"
              id="year"
              className="border border-gray-300 p-2 flex-1 h-16 text-4xl font-extrabold  w-50 rounded mb-4"
            />
            </div>
          </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                type="submit"
              >
                Calcular
              </button>
            </div>
        </form>
      </section>
      <section>

      </section>
    </main>
  );
}

export default App;
