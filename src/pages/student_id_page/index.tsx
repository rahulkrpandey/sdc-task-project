//import Students from "../../students_data/students.json";
import Student from "../../components/student_id_card";
import { useState } from "react";

import classes from "./student_id_page.module.css";

import Header from "../../components/header";
import React, { useEffect } from "react";

const IdPage = () => {
  const [Students, setStudents] = useState<
    {
      enrollmentNo: string;
      name: string;
      fathersName: string;
      email: string;
      course: string;
      phoneNumber: string;
      address: string;
    }[]
  >([]);

  useEffect(() => {
    const getStudentData = async () => {
      await fetch(
        "https://id-cards-3b5be-default-rtdb.asia-southeast1.firebasedatabase.app/student.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setStudents(data);
        })
        .catch((err) => console.log(err));
    };

    getStudentData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className={classes["main-page"]}>
        {Students.length !== 0 &&
          Students.map((student) => (
            <Student
              key={student.enrollmentNo}
              enrollmentNo={student.enrollmentNo}
              name={student.name}
              fathersName={student.fathersName}
              email={student.email}
              course={student.course}
              phoneNumber={student.phoneNumber}
              address={student.address}
            />
          ))}
        {Students.length === 0 && <h1>No Data Found</h1>}
      </main>
    </React.Fragment>
  );
};

export default IdPage;
