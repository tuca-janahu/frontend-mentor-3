function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto md:py-24 md:px-48 py-12 px-10 rounded-t-xl rounded-bl-xl [border-end-end-radius:160px] shadow-lg">
    <section className=" mx-auto">
        <h1 className="text-3xl font-bold">Calculadora de idade</h1>
        <form action="">
            <label htmlFor="day">Dia:</label>
            <input type="day" id="day" />

            <label htmlFor="month">Mês:</label>
            <input type="month" id="month" />

            <label htmlFor="year">Ano:</label>
            <input type="year" id="year" />

            <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Calcular</button>
        </form>
    </section>
    </main>
  );
}

export default App
