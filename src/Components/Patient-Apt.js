import React from "react";
import { Grid } from "@mui/material";
import styles from "../CSS/PatientApt.module.css";

const PatientApt = () => {
  return (
    <div>
      <Grid className={styles.cards} container lg={12}>
        <Grid item lg={3}>
          <p>Patient Name</p>
        </Grid>
        <Grid item lg={3}>
          <p>8 March 2023</p>
        </Grid>
        <Grid item lg={3}>
          <p>Time</p>
        </Grid>
        <Grid item lg={3}>
          <button id={styles.aptbutton}>Mark as Done</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientApt;
