import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

function Restaurant({ restaurant, editRestaurant, deleteRestaurant}) {
    return (
        <tr>
            <td>{restaurant.restaurantName}</td>
            <td>{new Date(restaurant.dateVisited).toLocaleDateString()}</td>
            <td>{restaurant.rating} <IoMdStar /></td>
            <td>{restaurant.review}</td>
            <td><RiDeleteBin6Line class="iconBig" onClick={() => deleteRestaurant(restaurant._id)} /></td>
            <td><MdModeEditOutline class="iconBig" onClick={() => editRestaurant(restaurant)}/></td>
            <td></td>
        </tr>
    );
};

export default Restaurant;