import { NextResponse } from "next/server";

const blogs = [{
    id: 1,
    title: "Hello World",
    author: "Chamath",
    content: "Hello World"
},{
    id: 2,
    title: "Hello World",
    author: "Chamath",
    content: "Hello World"
}]

export async function GET(){
    return NextResponse.json(blogs);
}

export async function POST(){
    return NextResponse.json({message: "This is a POST request"});
}

