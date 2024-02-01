import { HomePlanning } from "@/components/plannings";
import { getWeek } from "@/lib/utils";

export default function Home() {
  let isConnected = true;

  if (!isConnected) {
    return (
      <>
        <div className="container">not connected</div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <h1 className="mb-4 text-4xl font-grotesk font-medium tracking-tighter">
          Planning de scrims — 80ZETREI
        </h1>
        <p className="font-medium mb-4">{getWeek()}</p>
        <HomePlanning />
        <div>
          <h2 className="underline underline-offset-4">
            Objectifs de la semaine :
          </h2>
        </div>
        <div>
          <h3>Notes :</h3>
        </div>
      </div>
    </>
  );
}
