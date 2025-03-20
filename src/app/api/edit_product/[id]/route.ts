import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnection";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParamas: any) {
    try {
        const body = await request.json();
        const id = URLParamas.params.id;
        const { name, category, price } = body;

        await connectMongoDB()
        const data = await Product.findByIdAndUpdate(id, {
            name,
            category,
            price
        });
        return NextResponse.json({
            msg: "Updated Successfully",
            data
        });
    } catch (error) {
        return NextResponse.json(
            {
                error,
                msg: "Something Went Wrong"
            },
            {
                status: 400
            }
        )
    }
}