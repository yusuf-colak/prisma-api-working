import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    const silinen = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    const tumGorevler = await prisma.task.findMany();
    return new NextResponse(JSON.stringify(tumGorevler), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
