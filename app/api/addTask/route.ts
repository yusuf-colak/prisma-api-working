import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { gorevadi, gorevicerik } = await req.json();

    const gorev = await prisma.task.create({
      data: {
        gorevadi: gorevadi,
        gorevicerik: gorevicerik,
      },
    });

    return new NextResponse(JSON.stringify(gorev), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
