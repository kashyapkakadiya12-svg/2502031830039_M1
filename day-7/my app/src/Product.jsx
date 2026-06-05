// import { useParams } from "react-router-dom";

// const products = [
//   { id: 1, name: "iPhone 15", price: 80000 },
//   { id: 2, name: "Samsung S24", price: 75000 },
//   { id: 3, name: "OnePlus 12", price: 60000 },
// ];

// export default function Product() {
//   const { id } = useParams();

//   const product = products.find((p) => p.id === Number(id));

//   return (
//     <>
//       <h2>Product Page</h2>

//       {product ? (
//         <>
//           <h3>Product ID: {product.id}</h3>
//           <h3>Name: {product.name}</h3>
//           <h3>Price: ₹{product.price}</h3>
//         </>
//       ) : (
//         <h3>Product not found</h3>
//       )}
//     </>
//   );
// }
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15", price: 80000 },
  { id: 2, name: "Samsung S24", price: 75000 },
  { id: 3, name: "OnePlus 12", price: 60000 },
];

export default function Product() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Page</h2>

      {product ? (
        <div style={styles.card}>
          <h3 style={styles.title}>{product.name}</h3>
          <p style={styles.text}>Product ID: {product.id}</p>
          <p style={styles.price}>Price: ₹{product.price}</p>
        </div>
      ) : (
        <h3>Product not found</h3>
      )}
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "15px",
    marginTop: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    color: "#666",
  },
  price: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "green",
  },
};