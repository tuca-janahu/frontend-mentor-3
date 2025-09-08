import Input from "./components/Input";
import Label from "./components/Label";

function App() {
  return (
    <main className="bg-white max-w-6xl mx-auto md:py-12 md:px-24 py-12 px-10 rounded-t-xl rounded-bl-xl [border-end-end-radius:160px] shadow-lg">
      <section className="">
        <form className="" action="">
            <div className="flex gap-4 mt-5">
            <div className="">
              <Label htmlFor="day">DIA</Label>
              <Input
                id="day"
              />
            </div>
            <div className="">
              <Label htmlFor="month">MÊS</Label>
              <Input
                id="month"
              />
              
            </div>
            <div className="">
              <Label htmlFor="year">ANO</Label>
              <Input
                id="year"
              />
            </div>
          </div>
            <div className="flex items-center mt-4 mb-8">
  <div className="flex-1 h-px bg-gray-200" />
  <button
    className="bg-purple-400 text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors ml-[-2.5rem] z-10"
    type="submit"
  >
    Calcular
  </button>
</div>
        </form>
      </section>
      <section>
        <div className="text-7xl font-extrabold text-black mb-4 italic">
          <p>
            <span className="text-purple-900">--</span> ANOS
          </p>
          <p>
            <span className="text-purple-900">--</span> MESES
          </p>
          <p>
            <span className="text-purple-900">--</span> DIAS
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
