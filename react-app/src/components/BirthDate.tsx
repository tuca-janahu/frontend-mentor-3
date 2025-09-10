function BirthDate({age,} : { age: {
    years: number;
    months: number;
    days: number;
}}) {
    return (
        <div className="md:text-7xl text-5xl font-extrabold text-black mb-4 italic pb-10">
            <p>
              <span className="text-purple-900">{age.years}</span> ANOS
            </p>
            <p>
              <span className="text-purple-900">{age.months}</span> MESES
            </p>
            <p>
              <span className="text-purple-900">{age.days}</span> DIAS
            </p>
          </div>
    )
}

export default BirthDate;