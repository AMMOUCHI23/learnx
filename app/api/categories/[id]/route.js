import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const catgory = await prisma.category.findUnique({
            where: {
                id: params.id,
            },
        });
        if (!catgory) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }
        return  NextResponse.json( catgory , { status: 200 });
    } catch (error) {

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const datas = await req.json();
        const category = await prisma.category.update({
            where: {
                id: params.id,
            },
            data: datas,
        });
        return NextResponse.json( category , { status: 200 });
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
        const category = await prisma.category.delete({
            where: {
                id: params.id,
            },
        });

        if (!category) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }
        return NextResponse.json( "Category deleted" , { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}