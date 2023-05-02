import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { reservedRooms, totalPrice } from "../../components/reserve"
import "./bill.css";

const Bill = ({ reservedRooms, totalPrice }) => {
    return (
      <div className="bill">
        <h2>Reservation Details</h2>
        <table>
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Price</th>
              <th>Nights</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {reservedRooms.map((room) => (
              <tr key={room.roomNumber}>
                <td>{room.roomNumber}</td>
                <td>{room.price}</td>
                <td>{room.nights}</td>
                <td>{room.price * room.nights}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total</td>
              <td>{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };

export default Bill;
