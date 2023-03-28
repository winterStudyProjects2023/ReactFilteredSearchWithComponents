import React from 'react'
import {IVehicleProps} from '../../App';

export default function VehicleRow({ vehicle }: {vehicle:IVehicleProps}) {
    const brand = vehicle.stocked?
    vehicle.model
    :<span style={{ color: 'red' }}>{vehicle.model}</span>;

    return (
      <tr>
        <td>{brand}</td>
        <td>{vehicle.price}</td>
      </tr>
    );
  }