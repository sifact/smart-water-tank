import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { phoneNumber: string } }
) {
  try {
    if (!params.phoneNumber) {
      return new NextResponse("Phone nubmer is required", { status: 400 });
    }

    const user = await prismadb.user.findUnique({
      where: {
        phoneNumber: params.phoneNumber,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
