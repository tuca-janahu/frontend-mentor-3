import StandardDate from "../components/StandardDate";
import CountdownResult from "../components/CountdownResult.tsx";
import Form from "../components/Form";
import type { Age } from "../lib/types";
import { useState } from "react";

function EventPage() {
  const [left, setLeft] = useState<Age | null>(null);

  return (
    <main
     >
      <section className="">
        <Form mode="countdown" onResult={setLeft} onClear={() => setLeft(null)} />
      </section>
      <section>
        {left ? (
          <CountdownResult left={left} />
        ) : (
          <StandardDate />
        )}
      </section>
    </main>
  );
}

export default EventPage;