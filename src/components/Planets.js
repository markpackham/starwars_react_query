import Planet from "./Planet";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch(`http://swapi.dev/api/planets/`);
  return res.json();
};

export default function Planets() {
  const { data, status } = useQuery("planets", fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loding data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <div>{planet.name}</div>
          ))}
        </div>
      )}
      <Planet />
    </div>
  );
}
