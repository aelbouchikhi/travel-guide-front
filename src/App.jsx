import { ChakraProvider } from "@chakra-ui/react";
import Filters from "./Components/Filters";
import ProductsGrid from "./Components/ProductsGrid";
import ProductCard from "./UI/ProductCard";

function App() {
  return (
    <ChakraProvider>
      <div className="flex">
        <Filters />
        <ProductsGrid />
      </div>
    </ChakraProvider>
  );
}

export default App;
