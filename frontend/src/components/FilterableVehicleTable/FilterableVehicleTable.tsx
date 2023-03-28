import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import VehicleTable from '../VehicleTable/VehicleTable';

import './FilterableVehicleTable.styles.css'

import { IVehicleProps } from '../../App';


export default function FilterableVehicleTable({ vehicles }: { vehicles: IVehicleProps[] }) {

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (filterText: string) => {
        setFilterText(filterText);
    }

    const handleInStockOnlyChange = (inStockOnly: boolean) => {
        setInStockOnly(inStockOnly);
    }

    return (
        <div className='search-box'>
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