import React, { ReactNode } from 'react';
import VehicleCategory from '../VehicleCategory/VehicleCategory';
import VehicleRow from '../VehicleRow/VehicleRow';

import {IVehicleProps} from '../../App';

type VehicleTableProps = {
  vehicles: IVehicleProps[];
  filterText: string;
  inStockOnly: boolean;
}

export default function VehicleTable({ vehicles, filterText, inStockOnly }: VehicleTableProps) {
    const rows: ReactNode[] = [];
    let currentCategory: string | null = null;

    vehicles.forEach((vehicle) => {

      if (
        vehicle.model!.toLowerCase().indexOf(
          filterText!.toLowerCase()
        ) === -1
      ) {
        return;
      }
      
      if (inStockOnly && !vehicle.stocked) {
        return;
      }

      if (vehicle.category !== currentCategory) {
        rows.push(
          <VehicleCategory
            category={vehicle.category}
            key={vehicle.category} />
        );
      }
    
      rows.push(
        <VehicleRow
          vehicle={vehicle}
          key={vehicle.model} />
      );
      currentCategory = vehicle.category!;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
