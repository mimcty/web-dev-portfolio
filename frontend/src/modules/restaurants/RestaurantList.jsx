import React from 'react';
import Restaurant from './Restaurant.jsx';
import { MdAddToPhotos } from "react-icons/md";
import { GiKnifeFork } from 'react-icons/gi'

function RestaurantList({ restaurants, editRestaurant, deleteRestaurant, addRestaurant}) {
    return(
        <div className="container">
        <table id="restaurantTable">
            <caption>All Restaurant Reviews</caption>
            <thead>
                <tr>
                    <th> Restaurant </th>
                    <th> Date Visited </th>
                    <th> Rating </th>
                    <th> Review <GiKnifeFork /></th>
                    <th> Delete </th>
                    <th> Edit </th>
                    <th><MdAddToPhotos class="iconBig" onClick={addRestaurant} title="Add Restaurant" /></th>
                    </tr>
            </thead>
            <tbody>
                {restaurants.map((restaurant, i) =>
                    <Restaurant
                        restaurant = {restaurant}
                        key = {i}
                        deleteRestaurant = {deleteRestaurant}
                        editRestaurant = {editRestaurant}
                    />)}
            </tbody>
        </table>
        </div>
    );
}

export default RestaurantList;