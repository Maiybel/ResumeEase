// const GetStarted = () => {
//   return (
//     <div className="min-h-screen bg-white p-8 md:p-8">
//       <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
//         {/* Left Side */}
//         <div className="w-full md:w-1/2 h-[300px] md:h-[600px] bg-[#e5e5e5] rounded-lg flex items-center justify-center">
//           <img
//             src="/computer.png"
//             alt="Person working on computer"
//             className="w-64 md:w-96 h-auto mix-blend-multiply"
//           />
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col items-center text-center w-full md:w-1/2">
//           <img
//             src="/computer.png"
//             alt="Resume Icon"
//             className="w-10 h-10 mb-4"
//           />
//           <h1 className="text-2xl font-bold mb-1">ResumeGenius</h1>
//           <p className="text-sm text-gray-600 mb-6">
//             Professional Resume Builder
//           </p>
//           <button className="bg-[#9e2a2b] text-white px-6 py-2 text-sm rounded hover:bg-[#801f20] transition-colors">
//             Start Building
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="h-screen mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[calc(100vh-2rem)] bg-[#e5e5e5] rounded-lg flex items-center justify-center">
          <img
            src="/computer.png"
            alt="Person working on computer"
            className="w-64 md:w-96 h-auto mix-blend-multiply"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center text-center w-full md:w-1/2">
          <img
            src="/ResumeEase2.jpg"
            alt="Resume Icon"
            className="w-10 h-10 mb-4"
          />
          <h1 className="text-6xl font-bold mb-1">ResumeEase</h1>
          <p className="text-m text-gray-600 mb-6">
            Professional Resume Builder
          </p>
          <p className="text-m text-gray-600 mb-6">Start Building...</p>

          {/* Auth Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/signin")}
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
