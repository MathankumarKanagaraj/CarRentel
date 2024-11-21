// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const CarList = () => {
// //   const [cars, setCars] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:8080/api/v1/cars')
// //       .then(response => setCars(response.data))
// //       .catch(error => console.error(error));
// //   }, []);

// //   return (
// //     <div className="container my-5">
// //       <h2 className="text-center mb-4">Available Cars</h2>
// //       <div className="row">
// //         {cars.map(car => (
// //           <div key={car.id} className="col-md-4">
// //             <div className="card mb-4 shadow-sm">
// //               <img src={car.imageUrl} className="card-img-top" alt={`${car.brand} ${car.model}`} />
// //               <div className="card-body">
// //                 <h5 className="card-title">{car.brand} {car.model}</h5>
// //                 <p className="card-text">
// //                   Year: {car.year} <br />
// //                   Color: {car.color}
// //                 </p>
// //                 <button className="btn btn-primary">Book Now</button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // export default CarList;


// // CarList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const CarList = () => {
//     const [cars, setCars] = useState([]);

//     useEffect(() => {
//         // Fetch the list of cars from the API
//         const fetchCars = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/v1/cars');
//                 setCars(response.data);
//             } catch (error) {
//                 console.error("Error fetching car data:", error);
//             }
//         };

//         fetchCars();
//     }, []);

//     return (
//         <div className="car-list-container">
//             <h2 className="text-center mb-4">Available Cars</h2>
//             <div className="car-list">
//                 {cars.map((car) => (
//                     <div key={car.id} className="car-card">
//                         <img src={car.imageUrl} alt={car.carModel} className="car-image" />
//                         <div className="car-details">
//                             <h5>{car.carModel}</h5>
//                             <p>Owner: {car.carOwnerName}</p>
//                             <p>Rate per Hour: ${car.ratePerHour}</p>
//                             <p>Availability: {car.availability ? "Available" : "Not Available"}</p>
//                             <p>Location: {car.location}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CarList;
