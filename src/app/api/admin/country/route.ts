import Country from '../../../../models/CountiresModel'
import connect from '../../../../db/connect'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
export async function POST(req: any) {
    connect()
    try {
        const reqBody = await req.json()


        const { country, cities, properties } = reqBody
        console.log("req body", country);
        const isCountry = await Country.findOne({ country })
        console.log(isCountry);
        // if (isCountry) {
        //     return NextResponse.json({ error: "country exist already" }, { status: 400 })
        // }
        const newcountry = new Country({
            country,
            cities,
            properties
        })
        const save = await newcountry.save()
        return NextResponse.json({ success: true, Data: save });
    } catch (error) {
        return NextResponse.json({ errro: error.message }, { status: 500 })
    }
}
export async function GET() {
    connect()
    try {
        const country = await Country.find()
        return NextResponse.json({ success: true, data: country }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}




export async function DELETE(req: any) {

    connect()
    try {
        // const country = await req.url.split("country/")[1]
        const searchParams = await req.nextUrl.searchParams
        const country = await searchParams.get('country')

        const city = await searchParams.get('city')
        console.log(city);

        const updatecountry = await Country.findOneAndUpdate(
            { country },
            { $pull: { cities: { name: city } } },
            { new: true }
        )

        if (!city) {

            const iscountry = await Country.findOneAndDelete({ country })
            if (!iscountry) {
                return NextResponse.json({ error: "country not found" }, { status: 400 })
            }
            return NextResponse.json({ success: true, deletd: iscountry }, { status: 200 })


        }

        return NextResponse.json({ success: true, Updated: updatecountry }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}