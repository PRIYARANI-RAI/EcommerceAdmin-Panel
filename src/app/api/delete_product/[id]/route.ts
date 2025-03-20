import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnection";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(URLParamas: any) {
    try {
        const id = URLParamas.params.id;
        await connectMongoDB()
        await Product.findByIdAndDelete(id);
        return NextResponse.json({
            msg: "Product Deleted Successfully"
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