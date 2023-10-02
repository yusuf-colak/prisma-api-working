import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const gorev = await prisma.task.findMany({
      where: {
        id: data.data.id,
      },
    });

    return new NextResponse(JSON.stringify(gorev), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
