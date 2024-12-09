// import React, { useState, useEffect } from "react";
// import "./style.css";

// const Notify = () => {
//   const r_names = [
//     "John Doe",
//     "Jane Smith",
//     "David Brown",
//     "Lisa Johnson",
//     "Chris Evans",
//     "Emily Davis",
//     "Mark Wilson"
//   ];
//   const r_text = [
//     "California",
//     "Texas",
//     "New York",
//     "Florida",
//     "Washington",
//     "Illinois",
//     "Arizona",
//     "Georgia"
//   ];
//   const r_map = [
//     "assets/images/map-1.jpg",
//     "assets/images/map-1.jpg",
//     "assets/images/map-1.jpg",
//     "assets/images/map-1.jpg"
//   ];
//   const r_product = [
//     "Ghostwriting services",
//     "Book Editing",
//     "Manuscript Review",
//     "Book Publishing Consultation",
//     "Content Development",
//     "Book Marketing",
//     "Cover Design"
//   ];

//   const [notification, setNotification] = useState({
//     name: "Someone",
//     location: "Somewhere",
//     map: "assets/images/map-1.jpg",
//     product: "Some Service",
//     time: "1 hour ago"
//   });

//   const [visible, setVisible] = useState(false);

//   const showNotification = () => {
//     const randomName = Math.floor(Math.random() * r_names.length);
//     const randomLocation = Math.floor(Math.random() * r_text.length);
//     const randomMap = Math.floor(Math.random() * r_map.length);
//     const randomProduct = Math.floor(Math.random() * r_product.length);
//     const randomTime = Math.floor(Math.random() * 6) + 1; // Random time between 1 and 6 hours ago

//     setNotification({
//       name: r_names[randomName],
//       location: r_text[randomLocation],
//       map: r_map[randomMap],
//       product: r_product[randomProduct],
//       time: `${randomTime} hour${randomTime > 1 ? "s" : ""} ago`
//     });

//     setVisible(true);

//     // Automatically hide notification after 6 seconds
//     setTimeout(() => setVisible(false), 6000);
//   };

//   useEffect(() => {
//     // Show the first notification immediately
//     showNotification();

//     // Set interval for subsequent notifications every 14 seconds
//     const interval = setInterval(showNotification, 14000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, []);
  

//   return (
//     <section className={`custom-social-proof ${visible ? "visible" : "hidden"}`}>
//       <div className="custom-notification">
//         <div className="custom-notification-image-wrapper">
//           <img id="map1" src={notification.map} alt="Map" />
//         </div>
//         <div className="custom-notification-content-wrapper">
//           <p className="custom-notification-content">
//             <span id="name">{notification.name}</span> from{" "}
//             <span id="country">{notification.location}</span>
//             <br />
//             recently signed up for{" "}
//             <span id="product">{notification.product}</span>
//             <small>
//               <span id="time">{notification.time}</span>
//             </small>
//           </p>
//         </div>
//         <div
//           className="custom-close"
//           onClick={() => setVisible(false)}
//         >
//           &times;
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Notify;
