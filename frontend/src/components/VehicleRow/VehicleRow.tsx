import React from 'react'
import {IVehicleProps} from '../../App';
import './VehicleRow.styles..css'

export default function VehicleRow({ vehicle }: {vehicle:IVehicleProps}) {
    const brand = vehicle.stocked?
    vehicle.model
    :<span style={{ color: 'red' }}>{vehicle.model}</span>

    return (
      <tr className='table-row'>
        <td>{brand}</td>
        <td>{vehicle.price}</td>
      </tr>
    );
  }