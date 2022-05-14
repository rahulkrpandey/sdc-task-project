import classes from "./student_id.module.css";

const Students: React.FC<{
  enrollmentNo: string;
  name: string;
  fathersName: string;
  email: string;
  course: string;
  phoneNumber: string;
  address: string;
}> = ({
  enrollmentNo,
  name,
  fathersName,
  email,
  course,
  phoneNumber,
  address,
}) => {
  return (
    <div className={classes["id-card"]}>
      <div className={classes["logo-univ"]}>
        <img
          className={classes["logo"]}
          src={require("../../assets/images/logo.png")}
          alt=""
        />
        <div className={classes["heading"]}>
          <h1 className={classes["university"]}>
            guru gobind singh indraprastha university
          </h1>
          <h2 className={classes["id"]}>identity/library card</h2>
        </div>
      </div>

      <div className={classes["content"]}>
        <h3 className={classes["enrollment"]}>
          <p>enrollment no:</p> <p>{enrollmentNo}</p>
        </h3>
        <h3 className={classes["name"]}>
          <p>name:</p> <p>{name}</p>
        </h3>
        <h3 className={classes["father-name"]}>
          <p>father's name:</p> <p>{fathersName}</p>
        </h3>
        <h3 className={classes["email"]}>
          <p>email:</p> <p>{email}</p>
        </h3>
        <h3 className={classes["course"]}>
          <p>course:</p> <p>{course}</p>
        </h3>
        <h3 className={classes["phone-no"]}>
          <p>phone no:</p> <p>{phoneNumber}</p>
        </h3>
        <h3 className={classes["address"]}>
          <p>address:</p> <p>{address}</p>
        </h3>
      </div>
    </div>
  );
};

export default Students;
