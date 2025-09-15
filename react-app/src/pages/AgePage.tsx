import StandardDate from "../components/StandardDate";
import BirthDate from "../components/BirthDate";
import Form from "../components/Form";
import type { Age } from "../lib/types";
import { useState } from "react";

function AgePage() {
  const [age, setAge] = useState<Age | null>(null);

  return (
    <main
      
    >
      <section className="">
        <Form mode="age" onResult={setAge} onClear={() => setAge(null)} />
      </section>
      <section>
        {age ? (
          <BirthDate age={age} />
        ) : (
          <StandardDate />
        )}
      </section>
    </main>
  );
}

export default AgePage;
