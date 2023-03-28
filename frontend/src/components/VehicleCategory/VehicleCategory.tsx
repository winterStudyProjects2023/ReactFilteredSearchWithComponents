import React from 'react'
import {IVehicleProps} from '../../App';
import './VehicleCategory.styles.css'

export default function VehicleCategory({ category }: IVehicleProps) {
        return (
          <tr className='category-row'>
            <th colSpan={2}>
              {category}
            </th>
          </tr>
        );
      }
