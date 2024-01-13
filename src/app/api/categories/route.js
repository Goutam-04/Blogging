import { NextResponse } from "next/server"
import prisma from "@/utils/connect";

export const GET = async ()=>{
try {
    const categories = await prisma.category.findMany();


    return new NextResponse(
        JSON.stringify(categories,{status:200}));

} catch (error) {
    console.log(error);
    return new NextResponse(
        JSON.stringify({message:"something is wrong"},{status:500})
    )
}

}

