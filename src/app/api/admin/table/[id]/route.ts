import connect from "../../../../../db/connect";
import TableData from "../../../../../models/TableModel";
import { NextResponse } from 'next/server'

export async function DELETE(req: any, content) {
    connect();
    try {
        const cityName = req.url.split("table/")[1]
        console.log(cityName);
        if (!cityName) {
            return NextResponse.json({ error: "City name not provided in parameters" }, { status: 400 });
        }
        const isCity = await TableData.findOneAndDelete({ cityName });
        if (!isCity) {
            return NextResponse.json({ error: "City not found" }, { status: 400 });
        }
        return NextResponse.json({ success: true, message: "Record deleted", data: isCity }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}