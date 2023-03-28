import React from 'react'
import {IVehicleProps} from '../../App';

export default function VehicleRow({ vehicle }: {vehicle:IVehicleProps}) {
    const name = vehicle.stocked?
    vehicle.model
    :<span style={{ color: 'red' }}>{vehicle.model}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{vehicle.price}</td>
      </tr>
    );
  }