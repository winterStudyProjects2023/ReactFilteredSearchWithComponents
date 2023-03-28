import React from 'react'
import {IVehicleProps} from '../../App';

export default function VehicleCategory({ category }: IVehicleProps) {
        return (
          <tr>
            <th colSpan={2}>
              {category}
            </th>
          </tr>
        );
      }
