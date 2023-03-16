import Navbar from "../Components/Navbar";
import app from "../Firebase/FirebaseConfig";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/auth';

function Patients() {
  const [data, setData] = useState([]);

  useEffect(() => {               
    const db = getDatabase(app);
    const dataRef = ref(db, "Patient/");

    // Fetch the data from Firebase
    onValue(dataRef, (snapshot) => {
      const dataArr = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        dataArr.push(childData);
      });
      setData(dataArr);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td>{item.Age}</td>
              {item.Gender === 1 ?(
                <td>Male</td>
              ):(
                <td>Female</td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Patients;
