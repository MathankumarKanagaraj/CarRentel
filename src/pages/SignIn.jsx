import React from "react";
import axios from "axios";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(4, "Password must be at least 4 characters")
            .required("Password is required"),
    });

    const handleSubmit = async (values) => {
        const loginData = {
            email: values.email,
            password: values.password,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
            if (response.status === 200 && response.data.token) {
                localStorage.setItem("authToken", response.data.token);
                alert("Login successful!");
                navigate('/Layout');
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <div className="login-container backgroudImage ">
            <div className="login-box">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="Logo" />
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="input-group">
                                <label>Email</label>
                                <Field 
                                    type="email" 
                                    name="email" 
                                    className="rounded-3" 
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" component="div" className="error-message text-danger" />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <Field 
                                    type="password" 
                                    name="password" 
                                    className="rounded-3 " 
                                    placeholder="Enter your password"
                                />
                                <ErrorMessage name="password" component="div" className="error-message text-danger" />
                            </div>
                            <a className="d-flex justify-content-end" href="/reset-password">Forgot Password?</a>    
                            <button type="submit" className="login-button mt-5 mb-5" >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </button>
                            <a className="text-black d-flex justify-content-center" href="/signup">
                                <span className="small-text">Already have an account?</span> 
                                <span className="blue-text"> Signup</span>
                            </a>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignIn;











// import React from "react";
// import axios from "axios";
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../assets/logo.png';
// import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const SignIn = () => {
//     const navigate = useNavigate();

//     const validationSchema = Yup.object({
//         email: Yup.string()
//             .email("Invalid email address")
//             .required("Email is required"),
//         password: Yup.string()
//             .min(4, "Password must be at least 4 characters")
//             .required("Password is required"),
//     });

//     const handleSubmit = async (values) => {
//         const loginData = {
//             email: values.email,
//             password: values.password,
//         };

//         try {
//             const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
//             if (response.status === 200 && response.data.token) {
//                 localStorage.setItem("authToken", response.data.token);
//                 alert("Login successful!");
//                 navigate('/dashboard');
//             }
//         } catch (error) {
//             console.error("Error logging in:", error);
//             alert("Login failed. Please check your credentials and try again.");
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-box">
//                 <div className="d-flex justify-content-center">
//                     <img src={logo} alt="Logo" />
//                 </div>
//                 <Formik
//                     initialValues={{ email: '', password: '' }}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ isSubmitting }) => (
//                         <Form>
//                             <div className="input-group d-flex flex-column mb-3 ">
//                                 <label>Email</label>
//                                 <Field 
//                                     type="email" 
//                                     name="email" 
//                                     className="rounded-3 form-control" 
//                                     placeholder="Enter your email"
//                                 />
//                                 <ErrorMessage name="email" component="div" className="error-message mt-1" />
//                             </div>
//                             <div className="input-group d-flex flex-column mb-3">
//                                 <label>Password</label>
//                                 <Field 
//                                     type="password" 
//                                     name="password" 
//                                     className="rounded-3 form-control" 
//                                     placeholder="Enter your password"
//                                 />
//                                 <ErrorMessage name="password" component="div" className="error-message mt-1" />
//                             </div>
//                             <button type="submit" className="login-button mt-2 mb-3" disabled={isSubmitting}>
//                                 {isSubmitting ? "Logging in..." : "Login"}
//                             </button>
//                             <a className="text-black" href="/signup">
//                                 <span className="small-text">Already have an account?</span> 
//                                 <span className="blue-text"> Signup</span>
//                             </a>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     );
// };

// export default SignIn;
