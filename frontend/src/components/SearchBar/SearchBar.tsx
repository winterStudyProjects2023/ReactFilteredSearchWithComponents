import React, { ChangeEvent } from 'react'

type SearchBarProps = {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (filterText: string) => void;
    onInStockOnlyChange: (inStockOnly: boolean) => void;
}

export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: SearchBarProps) {

    const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterTextChange(e.target.value)
    }
    const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInStockOnlyChange(e.target.checked)
    }

    return (
        <form>
            <input type="text"
                value={filterText}
                placeholder="Search..."
                onChange={handleTypeChange} />
            <label>
                <input type="checkbox"
                    checked={inStockOnly}
                    onChange={handleCheckboxToggle} />
                {' '}
                Show only vehicles in stock
            </label>
        </form>
    );
}