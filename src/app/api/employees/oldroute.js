import { NextResponse } from "next/server";
import { Employee } from "./MGConnect";
import mongoose from "mongoose";
const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const eid = searchParams.get("eid");
  let empdata;
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  if (eid) {
    empdata = await Employee.findOne({ eid });
  } else {
    empdata = await Employee.find();
  }
  return NextResponse.json(empdata, { status: 200 });
};

const POST = async (request) => {
  const empdata = await request.json();
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  const employee = new Employee(empdata);
  const result = await employee.save();
  return NextResponse.json(result, { status: 200 });
};
const PUT = async (request) => {
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  const { searchParams } = new URL(request.url);
  const empdata = await request.json();
  const eid = searchParams.get("eid");
  if (eid) {
    const result = await Employee.findOneAndUpdate({ eid }, empdata, {
      new: true,
    });
    return NextResponse.json(result, { status: 200 });
  } else {
    return NextResponse.json({ error: "not found" }, { status: 200 });
  }
};
const DELETE = async (request) => {
  const { searchParams } = new URL(request.url);
  const eid = searchParams.get("eid");
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  if (eid) {
    const result = await Employee.deleteOne({ eid });
    return NextResponse.json(result, { status: 200 });
  } else {
    return NextResponse.json({ error: "not found" }, { status: 200 });
  }
};
export { GET, POST, PUT, DELETE };
