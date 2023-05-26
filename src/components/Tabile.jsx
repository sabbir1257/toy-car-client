import React from 'react';
import { Link } from 'react-router-dom';

const Tabile = ({toy}) => {
    const {name,  price, seller_name, sub_category, quantity, _id } = toy;
    return (
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {name}
        </th>
        <td class="px-6 py-4">{seller_name}</td>
        <td class="px-6 py-4">{sub_category}</td>
        <td class="px-6 py-4">{price}</td>
        <td class="px-6 py-4">{quantity}</td>
        <td class="px-6 py-4">
          <Link  to={`/toy/${_id}`}
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </Link>
        </td>
      </tr>
    );
};

export default Tabile;