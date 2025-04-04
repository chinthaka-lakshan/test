import React from "react";
import Sidebar from "../../components/Sidebar/AdminSidebar/AdminSidebar";
import Navbar from "../../components/AdminNavbar/AdminNavbar";
import "./RepRegistration.css";

const RepRegistration = () => {
  return (
    <div className="rep-container">
      <Sidebar />
      <div>
      <Navbar/>
      </div>
        <div className="registration-form">
          <h2>Representative Registration</h2>
          <form>
            <div className="form-group">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div>
                <label>Email Address</label>
                <input type="email" placeholder="Enter email" required />
              </div>

              <div>
                <label>NIC</label>
                <input type="text" placeholder="Enter NIC" required />
              </div>

              <div>
                <label>Contact Number</label>
                <input type="text" placeholder="Enter contact number" required />
              </div>

              <div className="full-width">
                <label>Password</label>
                <input type="password" placeholder="Enter password" required />
              </div>
            </div>

            <button type="submit" className="register-btn">Register</button>
          </form>
        </div>
      </div>
  );
};

export default RepRegistration;
