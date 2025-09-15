import type { Age } from "../lib/types";
function CountdownResult({ left }: { left: Age }) {
  return (
    <div className="md:text-7xl text-5xl font-extrabold text-black mb-4 italic">
      <p><span className="text-purple-900">{left.years}</span> ANOS</p>
      <p><span className="text-purple-900">{left.months}</span> MESES</p>
      <p><span className="text-purple-900">{left.days}</span> DIAS</p>
      <p className="mt-4 text-base font-medium text-gray-400 font-mono not-italic">Faltando para o evento</p>
    </div>
  );
}

export default CountdownResult;