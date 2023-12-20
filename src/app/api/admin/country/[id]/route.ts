import { NextResponse } from "next/server"
import connect from "../../../../../db/connect"
import Country from "../../../../../models/CountiresModel"

export async function DELETE(req: any) {

    connect()
    try {
        const country = await req.url.split("country/")[1]
        const iscountry = await Country.findOneAndDelete({ country })
        if (!iscountry) {
            return NextResponse.json({ error: "country not found " }, { status: 400 })
        }
        console.log(country);

        return NextResponse.json({ success: true, deleted: country }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}