import { useState } from "react";

export default function GSTCalculator() {

    const [item, setItem] = useState("");

    const [price, setPrice] = useState("");

    const [qty, setQty] = useState("");

    const total = Number(price) * Number(qty);

    const gst = total * 0.05;

    const finalAmount = total + gst;

    return (

        <div>

            <h2>GST Calculator (5%)</h2>

            <input

                type="text"

                placeholder="Item Name"

                value={item}

                onChange={(e) => setItem(e.target.value)}

                style={inputStyle}

            />

         

            <input

                type="number"

                placeholder="Price"

                value={price}

                onChange={(e) => setPrice(e.target.value)}

                style={inputStyle}

            />

            <br /><br />

            <input

                type="number"

                placeholder="Quantity"

                value={qty}

                onChange={(e) => setQty(e.target.value)}

                style={inputStyle}

            />

            <br /><br />

            <h3>Item : {item}</h3>

            <h3>Total : ₹{total}</h3>

            <h3>GST (5%) : ₹{gst}</h3>

            <h2>Final Amount : ₹{finalAmount}</h2>

        </div>

    );

}

const inputStyle = {
    width: "250px",
    padding: "10px",
    fontSize: "16px"
};