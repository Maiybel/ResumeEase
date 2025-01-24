import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    nationality: "",
    idType: "",
    password: "",
    confirmPassword: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle sign up logic here
  //   console.log("Sign up data:", formData);
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
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="space-y-6">
            <div>
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h2 className="mt-6 text-2xl font-bold">Sign up</h2>
              <p className="mt-2 text-gray-600">
                Enter your details below to create your account and get started.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="enter..."
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="MM/DD/YY"
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="+45 1344-343"
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nationality
                  </label>
                  <select
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      setFormData({ ...formData, nationality: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="brazil">Brazil</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ID Type
                  </label>
                  <select
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      setFormData({ ...formData, idType: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="passport">Passport</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="enter..."
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="enter..."
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Confirm
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
