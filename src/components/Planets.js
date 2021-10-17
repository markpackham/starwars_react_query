import { useState } from "react";
import Planet from "./Planet";
import { useQuery } from "react-query";

const fetchPlanets = async (pageNumber) => {
  console.log(pageNumber);
  const res = await fetch(`https://swapi.dev/api/planets?page=${pageNumber}`);
  return await res.json();
};

export default function Planets() {
  const [pageNumber, setPage] = useState(1);
  const { data, status } = useQuery(["planets", pageNumber], ({ queryKey }) =>
    fetchPlanets(queryKey[1])
  );

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loding data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
}
