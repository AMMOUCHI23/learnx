import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const course = await prisma.course.findUnique({
            where: {
                id: params.id,
            },
        });
        if (!course) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }
        return  NextResponse.json( course , { status: 200 });
    } catch (error) {

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const datas = await req.json();
    const course = await prisma.course.update({
            where: {
                id: params.id,
            },
            data: datas,
        });
        return NextResponse.json( course , { status: 200 });
    } catch (error) {
         if (error.code === "P2002") {
      return NextResponse.json({
        error: `Le champ "${error.meta.target.join(', ')}" existe déjà.`,
      }, { status: 400 });
    }
        
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
}

export async function DELETE(req, { params }) {
    try {
        const course = await prisma.course.delete({
            where: {
                id: params.id,
            },
        });

        if (!course) {
            return NextResponse.json({ error: "course not found" }, { status: 404 });
        }
        return NextResponse.json( "course deleted" , { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}