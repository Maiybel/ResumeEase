// import React, { useState } from "react";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     dateOfBirth: "",
//     phoneNumber: "",
//     nationality: "",
//     idType: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submit logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
//         <div>
//           <div className="w-12 h-12 mx-auto">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="bg-indigo-600 rounded-tl-lg w-5 h-5"></div>
//               <div className="bg-indigo-600 rounded-tr-lg w-5 h-5"></div>
//               <div className="bg-indigo-600 rounded-bl-lg w-5 h-5"></div>
//               <div className="bg-indigo-600 rounded-br-lg w-5 h-5"></div>
//             </div>
//           </div>
//           <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
//             Sign up
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Enter your details below to create your account and get started.
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   id="fullName"
//                   name="fullName"
//                   type="text"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="enter..."
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="example@gmail.com"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="dateOfBirth"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Date of Birth
//                 </label>
//                 <input
//                   id="dateOfBirth"
//                   name="dateOfBirth"
//                   type="text"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="MM / DD / YY"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   type="tel"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="+45 1344-343"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="nationality"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Nationality
//                 </label>
//                 <select
//                   id="nationality"
//                   name="nationality"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="BR">Brazil</option>
//                   {/* Add more countries */}
//                 </select>
//               </div>
//               <div>
//                 <label
//                   htmlFor="idType"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   ID Type
//                 </label>
//                 <select
//                   id="idType"
//                   name="idType"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="passport">Passport</option>
//                   <option value="nationalId">National ID</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="enter..."
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="enter..."
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between space-x-4">
//             <button
//               type="button"
//               className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//             >
//               Confirm
//             </button>
//           </div>

//           <div className="text-center text-sm">
//             <p className="text-gray-600">
//               Already have an account?{" "}
//               <a
//                 href="#"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Login
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submit logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
//         <div>
//           <div className="w-12 h-12 mx-auto">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="bg-indigo-600 rounded-tl-lg w-5 h-5"></div>
//               <div className="bg-indigo-600 rounded-tr-lg w-5 h-5"></div>
//               <div className="bg-indigo-600 rounded-bl-lg w-5 h-5"></div>
//               <div className="bg-indigo-600 rounded-br-lg w-5 h-5"></div>
//             </div>
//           </div>
//           <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
//             Welcome back
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Glad to see you again 👋
//             <br />
//             Login to your account below
//           </p>
//         </div>

//         <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//           <img
//             className="h-5 w-5 mr-2"
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             alt="Google logo"
//           />
//           Continue with Google
//         </button>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="enter email..."
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="enter password..."
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//           >
//             Login
//           </button>

//           <div className="text-center text-sm">
//             <p className="text-gray-600">
//               Don't have an account?{" "}
//               <a
//                 href="#"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Sign up for Free
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export { SignIn, SignUp };

// import React from "react";
// import { useState } from "react";

// const AuthLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
//         <div className="hidden md:block w-1/2">
//           <img
//             src="/public/3d-render-secure-login-password-illustration.jpg"
//             alt="Auth background"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-full md:w-1/2 p-8">{children}</div>
//       </div>
//     </div>
//   );
// };

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     dateOfBirth: "",
//     phoneNumber: "",
//     nationality: "",
//     idType: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign up logic here
//     console.log("Sign up data:", formData);
//   };

//   return (
//     <AuthLayout>
//       <div className="space-y-6">
//         <div>
//           <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
//             <div className="w-8 h-8 bg-white rounded"></div>
//           </div>
//           <h2 className="mt-6 text-2xl font-bold">Sign up</h2>
//           <p className="mt-2 text-gray-600">
//             Enter your details below to create your account and get started.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 placeholder="enter..."
//                 onChange={(e) =>
//                   setFormData({ ...formData, fullName: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 placeholder="example@gmail.com"
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Date of Birth
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 placeholder="MM/DD/YY"
//                 onChange={(e) =>
//                   setFormData({ ...formData, dateOfBirth: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 placeholder="+45 1344-343"
//                 onChange={(e) =>
//                   setFormData({ ...formData, phoneNumber: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Nationality
//               </label>
//               <select
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 onChange={(e) =>
//                   setFormData({ ...formData, nationality: e.target.value })
//                 }
//               >
//                 <option value="">Select</option>
//                 <option value="brazil">Brazil</option>
//                 {/* Add more options */}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 ID Type
//               </label>
//               <select
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 onChange={(e) =>
//                   setFormData({ ...formData, idType: e.target.value })
//                 }
//               >
//                 <option value="">Select</option>
//                 <option value="passport">Passport</option>
//                 {/* Add more options */}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 placeholder="enter..."
//                 onChange={(e) =>
//                   setFormData({ ...formData, password: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//                 placeholder="enter..."
//                 onChange={(e) =>
//                   setFormData({ ...formData, confirmPassword: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button
//               type="button"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               Confirm
//             </button>
//           </div>
//         </form>

//         <p className="text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 hover:text-indigo-500">
//             Login
//           </a>
//         </p>
//       </div>
//     </AuthLayout>
//   );
// };

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign in logic here
//     console.log("Sign in data:", formData);
//   };

//   return (
//     <AuthLayout>
//       <div className="space-y-6">
//         <div>
//           <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
//             <div className="w-8 h-8 bg-white rounded"></div>
//           </div>
//           <h2 className="mt-6 text-2xl font-bold">Welcome back</h2>
//           <p className="mt-2 text-gray-600">Glad to see you again 👋</p>
//           <p className="text-gray-600">Login to your account below</p>
//         </div>

//         <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
//           <img
//             className="h-5 w-5 mr-2"
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             alt="Google logo"
//           />
//           Continue with Google
//         </button>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//               placeholder="enter email..."
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
//               placeholder="enter password..."
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-indigo-600 hover:text-indigo-500">
//             Sign up for Free
//           </a>
//         </p>
//       </div>
//     </AuthLayout>
//   );
// };

// export { SignIn, SignUp };

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle sign in logic here
  //   console.log("Sign in data:", formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to resume builder page
    navigate("/resumebuilder");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
        <div className="hidden md:block w-1/2">
          <img
            src="/3d-render-secure-login-password-illustration.jpg"
            alt="Sign In"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="space-y-6">
            <div>
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h2 className="mt-6 text-2xl font-bold">Welcome back</h2>
              <p className="mt-2 text-gray-600">Glad to see you again 👋</p>
              <p className="text-gray-600">Login to your account below</p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
              <img
                src="/api/placeholder/20/20"
                alt="Google logo"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="enter email..."
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="enter password..."
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign up for Free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
