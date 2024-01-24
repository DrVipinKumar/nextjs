"use server";
import executeQuery from "./mysqldb";
const DisplayStudentInfo = async () => {
  const result = await executeQuery("select * from student", []);
  return (
    <div className="container">
      <h3 className="text-center">Student Information</h3>
      <table className="text-center table table-dark">
        <thead>
          <tr className="table-warning">
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Course</th>
          </tr>
        </thead>
        <tbody>
          {result.map((student) => (
            <tr key={student.sid}>
              <td>{student.sid}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayStudentInfo;
