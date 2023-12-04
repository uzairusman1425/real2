import connect from "../../../../db/connect.js";
import User from "../../../../models/Usermodel.js";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    try {
        connect();
        const reqBody = await req.json();
        const { username, password } = reqBody;
        if (!username || !password) {
            return NextResponse.json({ error: "Username and password are required" }, { status: 500 });
        }
        const user = await User.findOne({ username });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        if (password.length <= 4) {
            return NextResponse.json({ error: "Password is too short" }, { status: 400 });
        }
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);
        const saveuser = new User({
            username,
            password: hashpassword // Fixing the property name to match your schema
        });
        const saved = await saveuser.save();
        return NextResponse.json({ success: saved }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}