import { NextResponse } from "next/server";


export const GET = async(req)=>{
    console.log(req.url);
    const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page"));

    //     const query = req.url;
    //     const page = query.page;
    // console.log(page);

    // {
    //     take:postPerPage,
    //     skip:postPerPage*(page -1),
    // }
        const postPerPage=2;

    try {
        const posts = await prisma.post.findMany(
    {
        take:postPerPage,
        skip:postPerPage*(page -1)
    });




        return new NextResponse(
            JSON.stringify(posts,{status:200})
        )
        
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({message:"somthing went wrong"},{status:500})
        )
    }
}