import { NextResponse } from "next/server";
import { Employee } from "./MGConnect";
import mongoose from "mongoose";
const DELETE = async (request) => {
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  const { searchParams } = new URL(request.url);
  const eid = searchParams.get("eid");
  if (eid) {
    const result = await Employee.deleteOne({ eid });
    return NextResponse.json(result, { status: 200 });
  } else {
    return NextResponse.json("EID not found", { status: 200 });
  }
};
const PUT = async (request) => {
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  const empData = await request.json();
  const { searchParams } = new URL(request.url);
  const eid = searchParams.get("eid");
  if (eid) {
    const result = await Employee.findOneAndUpdate({ eid }, empData, {
      new: true,
    });
    return NextResponse.json(result, { status: 200 });
  } else {
    return NextResponse.json("eid not found", { status: 200 });
  }
};
const POST = async (request) => {
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  const empData = await request.json();
  const employee = new Employee(empData);
  const result = await employee.save();
  return NextResponse.json(result, { status: 200 });
};
const GET = async (request) => {
  let empData;
  await mongoose.connect("mongodb://127.0.0.1:27017/empdb");
  const { searchParams } = new URL(request.url);
  const eid = searchParams.get("eid");
  if (eid) {
    empData = await Employee.findOne({ eid });
  } else {
    empData = await Employee.find();
  }
  return NextResponse.json(empData, { status: 200 });
};

export { GET, POST, PUT, DELETE };
