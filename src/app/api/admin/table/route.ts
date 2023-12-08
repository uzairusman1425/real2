import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../../db/connect";
import TableData from "../../../../models/TableModel"
import { NextResponse } from "next/server";

export async function POST(req: any) {

    connect()

    try {

        const reqBody = await req.json()
        const { cityName, averagePrice, troughCurrent, peakCurrent, last12Month, last3Month, lastMonth, yearOnYear } = reqBody

        const iscity = await TableData.findOne({ cityName })
        if (iscity) {
            return NextResponse.json({ error: "city name exist already " }, { status: 400 })
        }
        const saveData = new TableData({
            cityName,
            averagePrice,
            troughCurrent,
            peakCurrent,
            last12Month,
            last3Month,
            lastMonth,
            yearOnYear
        })


        const save = await saveData.save()
        return NextResponse.json({ success: true, Data: save }, { status: 200 })

    } catch (error) {

        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}


export async function GET() {


    connect()
    try {

        const city = await TableData.find()
        if (!city) {
            return NextResponse.json({ error: " no data found " }, { status: 400 })
        }

        return NextResponse.json({ success: true, data: city }, { status: 200 })
    } catch (error) {

        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}


export async function DELETE(req: any) {
    connect()
    try {
        const reqBody = await req.json()
        const { cityName } = reqBody
        const iscity = await TableData.findOneAndDelete({ cityName })
        if (!iscity) {
            return NextResponse.json({ error: " city not found" }, { status: 400 })
        }
        return NextResponse.json({ success: true, message: " record deleted", data: iscity }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}