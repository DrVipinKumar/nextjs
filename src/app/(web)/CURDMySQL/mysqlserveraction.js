"use server";
import { revalidatePath } from "next/cache";
import executeQuery from "./mysqldb";

const Mysqlserveraction = async (prevState, formData) => {
  const sid = formData.get("sid");
  const sname = formData.get("sname");
  const scourse = formData.get("scourse");
  const bname = formData.get("submit");
  if (bname === "insert") {
    if (sid != "" && sname != "" && scourse != "") {
      const result = await executeQuery("insert into student values(?,?,?)", [
        sid,
        scourse,
        sname,
      ]);
      if (result.affectedRows) {
        revalidatePath("/CURDMySQL");
        return { message: "Record Inserted" };
      } else {
        revalidatePath("/CURDMySQL");
        return { message: "Record not Inserted" };
      }
    } else {
      revalidatePath("/CURDMySQL");
      return { message: "Field can not be empty" };
    }
  } else if (bname === "update") {
    if (sid != "" && sname != "" && scourse != "") {
      const result = await executeQuery(
        "update student set sid=?, name=?, course=? where sid=?",
        [sid, sname, scourse, sid]
      );
      if (result.affectedRows) {
        revalidatePath("/CURDMySQL");
        return { message: "Record Updated" };
      } else {
        revalidatePath("/CURDMySQL");
        return { message: "Record not Updated" };
      }
    } else {
      revalidatePath("/CURDMySQL");
      return { message: "Field can not be empty" };
    }
  } else if (bname === "delete") {
    if (sid != "") {
      const result = await executeQuery("delete from student where sid=?", [
        sid,
      ]);
      if (result.affectedRows) {
        revalidatePath("/CURDMySQL");
        return { message: "Record Deleted" };
      } else {
        revalidatePath("/CURDMySQL");
        return { message: "Record not Deleted" };
      }
    } else {
      revalidatePath("/CURDMySQL");
      return { message: "Student ID can not be empty" };
    }
  }
};

export default Mysqlserveraction;
