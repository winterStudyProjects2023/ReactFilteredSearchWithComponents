import React from 'react';
import './App.css';

import FilterableVehicleTable from './components/FilterableVehicleTable/FilterableVehicleTable';
export interface IVehicleProps {
  category?: string;
  price?: string;
  stocked?: boolean;
  model?: string;
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

  return (
    <div className="App">
      <FilterableVehicleTable vehicles={vehicles} />;
    </div>
  );
}

export default App;
