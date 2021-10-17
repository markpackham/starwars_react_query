import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  let [page, setPage] = useState("planets");

  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <h1>Star Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === "planets" ? <Planets /> : <People />}
          </div>
        </QueryClientProvider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
