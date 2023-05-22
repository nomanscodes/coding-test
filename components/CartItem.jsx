import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from '@/store/cartSlice';

const CartItem = ({ item }) => {


    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e?.target?.value) : e?.target?.value,
            id: item?.id,
        };
        dispatch(updateCart(payload));
    };


    return (

        <>
            <tr class="bg-white border-b">
                <th scope="row" class="px-4 py-4">
                    <picture>
                        <img src={item?.img} alt="product" />
                    </picture>
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-[#1b5c5a] whitespace-nowrap ">
                    {item?.title}
                </th>
                <td class="px-6 py-4">
                    {item?.color}
                </td>
                <td class="px-6 py-4">
                    <select
                        className="px-2 cursor-pointer focus:outline-[#1b5c5a]"
                        onChange={(e) => updateCartItem(e, "quantity")}
                    >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                            return (
                                <option key={i} value={q} selected={item?.quantity == q}>
                                    {q}
                                </option>
                            );
                        })}
                    </select>
                </td>
                <td class="px-6 py-4">
                    ${item?.price}
                </td>
                <td class="px-6 py-4">
                    <RiDeleteBin6Line
                        onClick={() => dispatch(removeFromCart({ id: item.id }))} size={26}
                        className=" cursor-pointer text-red-500" />
                </td>
            </tr>
        </>
    )
}

export default CartItem
