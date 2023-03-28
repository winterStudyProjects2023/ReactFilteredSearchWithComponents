import React, { ChangeEvent, useState } from 'react';
import './App.css';
import VehicleTable from './components/VehicleTable/VehicleTable';


export interface IVehicleProps {
  category?: string;
  price?: string;
  stocked?: boolean;
  model?: string;
}

interface ISearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}

interface IFilterableVehicleTableProps {
  vehicles: IVehicleProps[];
}

const vehicles: IVehicleProps[] = [
  { category: "Cars", price: "$40000", stocked: true, model: "Audi" },
  { category: "Cars", price: "$30000", stocked: true, model: "Renault" },
  { category: "Cars", price: "$45000", stocked: false, model: "Mercedes" },
  { category: "Cars", price: "$250000", stocked: false, model: "Ferrari" },
  { category: "Cars", price: "$42000", stocked: true, model: "BMW" },
  { category: "Trucks", price: "$120000", stocked: true, model: "DAF" },
  { category: "Trucks", price: "$125000", stocked: false, model: "Iveco" },
  { category: "Trucks", price: "$130000", stocked: true, model: "Volvo" }
];

function App() {

  function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: ISearchBarProps) {
    return (
      <form>
        <input type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => onFilterTextChange(e.target.value)} />
        <label>
          <input type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
          Show only vehicles in stock
        </label>
      </form>
    );
  }

  function FilterableVehicleTable({ vehicles }: IFilterableVehicleTableProps) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (filterText: string) => {
      setFilterText(filterText);
    }

    const handleInStockOnlyChange = (inStockOnly: boolean) => {
      setInStockOnly(inStockOnly);
    }

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={handleFilterTextChange}
          onInStockOnlyChange={handleInStockOnlyChange}
        />
        <VehicleTable
          vehicles={vehicles}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }

  return (
    <div className="App">
      <FilterableVehicleTable vehicles={vehicles} />;
    </div>
  );
}

export default App;
