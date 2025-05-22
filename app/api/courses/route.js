
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all categories
export async function GET() {
  try{
    const categories = await prisma.course.findMany();
    return  NextResponse.json(courses, { status: 200 });
  } catch (error) {
    return new NextResponse( error.message , { status: 500 });
  }
}

// POST a new category (admin only)
export async function POST(req) {
 try{
    const body = await req.json();
    const course = await prisma.course.create({ data: body });
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return new NextResponse( error.message , { status: 500 });
  }
}
