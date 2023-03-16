import Navbar from "../Components/Navbar";
import styles from "../CSS/Profile.module.css";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { Link } from "react-router-dom";
import app from "../Firebase/FirebaseConfig";
import { auth } from "../Firebase/FirebaseConfig";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    education: "",
    experience: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const currentUser = auth.currentUser;
  const Uid = currentUser.uid;
  const db = getDatabase(app);
  const dbref = ref(db, `Demo/${Uid}`);
  const saveData = () => {
    set(dbref, userData)
      .then(() => alert("User data stored successfully!"))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <Grid item xs={12} container columnSpacing={2}>
        <Grid item lg={3} className={styles.profile}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/profile.png`}
            alt="profile-pic"
          />
        </Grid>
        <Grid lg={9} className={styles.user}>
          <form>
            <Grid item lg={12} container>
              <Grid item xs={12} lg={6}>
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="fname"
                  value={userData.firstname}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lname"
                  value={userData.lastname}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="dob">DOB</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={userData.dob}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="education">Education</label>
                <input
                  type="text"
                  name="education"
                  id="education"
                  value={userData.education}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="exp">Experience</label>
                <input
                  type="number"
                  name="experience"
                  id="exp"
                  value={userData.experience}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={userData.gender}
                  onChange={postUserData}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="pno">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  id="pno"
                  value={userData.phone}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  cols="53"
                  rows="4"
                  value={userData.address}
                  onChange={postUserData}
                ></textarea>
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={userData.city}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={userData.state}
                  onChange={postUserData}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  value={userData.pincode}
                  onChange={postUserData}
                />
              </Grid>
            </Grid>
            <button id={styles.updatebtn} onClick={saveData}>
              Update Data
            </button>
          </form>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default Profile;
