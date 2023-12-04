import { NextApiRequest } from "next";
import connect from "../../../../db/connect.js";
import User from "../../../../models/Usermodel.js";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
export async function POST(req: NextApiRequest) {
    connect()
    try {
        const reqBody = await req.json()
        const { username, password } = reqBody
        const user = await User.findOne({ username })
        if (!user) {
            return NextResponse.json({ error: "username not exist" }, { status: 400 })
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "password is incorect" }, { status: 400 })
        }
        const tokenData = {
            id: user.id
            , username: user.username
        }
        const token = await jwt.sign(tokenData, process.env.JSON_TOKEN, { expiresIn: '1D' })
        const response = NextResponse.json({ success: true, message: "login sucess" }, { status: 200 })
        response.cookies.set("token", token, { httpOnly: true })
        return response
    } catch (error) {
        return NextResponse.json({ "error": error.message }, { status: 500 })
    }
}