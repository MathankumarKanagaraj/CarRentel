// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//     return (
//         <div style={styles.container}>
//             {/* Side Navigation */}
//             <list style={styles.sideNav}>
//                 <h2 style={styles.logo}>Car Rental</h2>
//                 <ul style={styles.sideNavLinks}>

//                     <li style={styles.sideNavItem}>
//                         <Link to="/carlist" style={styles.link}>Car List</Link>
//                     </li>
//                 </ul>
//             </list>

//             {/* Top Navigation */}
//             <nav style={styles.topNav}>
//                 <ul style={styles.topNavLinks}>
//                     <li style={styles.navItem}>
//                         <Link to="/" style={styles.link}>Sign Up</Link>
//                     </li>
//                     <li style={styles.navItem}>
//                         <Link to="/login" style={styles.link}>Sign In</Link>
//                     </li>
//                     {/* <li style={styles.navItem}>
//                         <Link to="/carlist" style={styles.link}>Car List</Link>
//                     </li> */}
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//     },
//     sideNav: {
//         width: '200px',
//         height: '100vh',
//         backgroundColor: '#333',
//         padding: '20px',
//         color: '#fff',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     logo: {
//         fontSize: '24px',
//         fontWeight: 'bold',
//         marginBottom: '20px',
//     },
//     sideNavLinks: {
//         listStyleType: 'none',
//         padding: 0,
//         width: '100%',
//     },
//     sideNavItem: {
//         marginBottom: '20px',
//         fontSize: '18px',
//     },
//     topNav: {
//         marginLeft: '200px',
//         width: 'calc(100% - 200px)',
//         backgroundColor: '#444',
//         padding: '10px 20px',
//         color: '#fff',
//         display: 'flex',
//         justifyContent: 'flex-end',
//     },
//     topNavLinks: {
//         listStyleType: 'none',
//         display: 'flex',
//         gap: '20px',
//     },
//     navItem: {
//         fontSize: '18px',
//     },
//     link: {
//         textDecoration: 'none',
//         color: '#fff',
//     },
// };

// export default NavBar;

import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="col-12">
      <nav style={styles.topNav}>
        <h2 style={styles.logo}>Car Rental</h2>
        <ul style={styles.topNavLinks}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>
              Sign Up
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/login" style={styles.link}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  topNav: {
    width: "100%",
    backgroundColor: "#444",
    padding: "10px 20px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  topNavLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
  navItem: {
    fontSize: "18px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
};

export default NavBar;
