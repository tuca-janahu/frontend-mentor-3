import Input from "./components/Input";
import Label from "./components/Label";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [dateData, setDateData] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const day = formData.get("day");
    const month = formData.get("month");
    const year = formData.get("year");

    if (day && month && year) {
      setDateData({
        day: Number(day),
        month: Number(month),
        year: Number(year),
      });
    }

    console.log({ day, month, year });
  }

  function limpar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setDateData(null);
  }
  return (
    <main className="bg-white max-w-6xl mx-auto md:py-12 md:px-24 py-12 px-10 rounded-t-xl rounded-bl-xl [border-end-end-radius:160px] shadow-lg">
      <section className="">
        <form onSubmit={handleSubmit} className="" action="">
          <div className="flex gap-4 mt-5">
            <div className="">
              <Label htmlFor="day">DIA</Label>
              <Input id="day" name="day" placeholder="DD" />
            </div>
            <div className="">
              <Label htmlFor="month">MÊS</Label>
              <Input id="month" name="month" placeholder="MM" />
            </div>
            <div className="">
              <Label htmlFor="year">ANO</Label>
              <Input id="year" name="year" placeholder="AAAA" />
            </div>
          </div>
          <div className="flex items-center mt-4 mb-8">
            <div className="flex-1 h-px bg-gray-200" />
            { dateData ? (
              <Button onClick={limpar} >Limpar</Button>
            ) : (
              <Button type="submit">Calcular</Button>
            )}
            
          </div>
        </form>
      </section>
      <section>
        {dateData ? (
          <div className="text-7xl font-extrabold text-black mb-4 italic">
            <p>
              <span className="text-purple-900">{dateData.year}</span> ANOS
            </p>
            <p>
              <span className="text-purple-900">{dateData.month}</span> MESES
            </p>
            <p>
              <span className="text-purple-900">{dateData.day}</span> DIAS
            </p>
          </div>
        ) : (
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
        )}
      </section>
    </main>
  );
}

export default App;
