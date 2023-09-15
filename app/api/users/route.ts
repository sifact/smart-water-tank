import prismadb from "@/lib/prismadb";
import { User } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, address, orderNotes, phoneNumber } = body;

    if (!phoneNumber) {
      return new NextResponse("Label is required", { status: 400 });
    }
    if (!name) {
      return new NextResponse("Label is required", { status: 400 });
    }
    if (!address) {
      return new NextResponse("Label is required", { status: 400 });
    }

    const user = await prismadb.user.create({
      data: {
        phoneNumber,
        name,
        address,
        orderNotes,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USERS_POST]", error);
    return new NextResponse("Internal error", {
      status: 500,
    });
  }
}

// get user using phone number

// export async function GET(
//   req: Request,
//   { params }: { params: { phoneNumber: string } }
// ) {
//   try {
//     const user = await prismadb.user.findUnique({
//       where: {
//         phoneNumber: User.storeId,
//       },
//     });

//     return NextResponse.json(billboards);
//   } catch (error) {
//     console.log("[BILLBOARDS_GET]", error);
//     return new NextResponse("Internal error", {
//       status: 500,
//     });
//   }
// }
