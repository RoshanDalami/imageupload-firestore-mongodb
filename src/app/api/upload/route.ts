import { connect } from "@/dbConfig/dbConfig";
import Images from "@/app/Model/model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, fileurl, description } = reqBody;

    const newPost = new Images({
      fileurl,
      title,
      description,
    });
    await newPost.save();
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Error couldnot upload details" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const response = await Images.find({}, { __v: 0 });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error)
  }
}
