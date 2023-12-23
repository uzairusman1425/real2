import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../../db/connect";
import TableData from "../../../../models/TableModel"
import mongoose from "mongoose";

import { NextResponse } from "next/server";


export async function POST(req: any) {

    connect()

    try {

        const reqBody = await req.json()
        const { ParentCity, cityName, averagePrice, troughCurrent, peakCurrent, last12Month, last3Month, lastMonth, yearOnYear, lat, lng } = reqBody

        const iscity = await TableData.findOne({ cityName })


        if (iscity) {
            return NextResponse.json({ error: "city name exist already " }, { status: 400 })
        }

        const saveData = new TableData({
            ParentCity,
            cityName,
            averagePrice,
            troughCurrent,
            peakCurrent,
            last12Month,
            last3Month,
            lastMonth,
            yearOnYear,
            lat,
            lng
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
        const searchParams = await req.nextUrl.searchParams
        const cityName = await searchParams.get('cityName')
        console.log(cityName);

        const city = await TableData.findOneAndDelete({ cityName })
        if (!city) {
            return NextResponse.json({ error: " city not found", city_name: cityName }, { status: 200 })

        }


        return NextResponse.json({ success: true, deleted: cityName }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 200 })
    }

}

export async function PATCH(req: any) {
    connect();

    try {
        const reqBody = await req.json();
        const { id } = reqBody;

        // Convert the id to ObjectId
        const objectId = new mongoose.Types.ObjectId(id);
        console.log(id);

        // Use _id instead of id for updating
        const isCity = await TableData.findByIdAndUpdate({ _id: id }, reqBody, { new: true });

        if (!isCity) {
            return NextResponse.json({ error: "City not found" }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: isCity }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}



