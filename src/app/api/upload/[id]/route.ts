
import { connect } from "@/dbConfig/dbConfig";
import Images from "@/app/Model/model";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    try {
        const id = params.id ;
        const data = await Images.findOne({_id:id});
        return NextResponse.json(data)
    } catch (error:any) {
        console.log('error from server')
        return NextResponse.json({error:error.message},{status:500})
    }
}