import jwt from "jsonwebtoken";

export function createJwt (pathname: string): string {
    const secret = process.env.JWT_SECRET as string;
    return jwt.sign({ "iss": "vowdanger.com", "aud": "vowdanger.com", "location": pathname }, secret, { expiresIn: "9days" });
}

export function verifyJwt (token: string = ""): string {
    const secret = process.env.JWT_SECRET as string;

    if (!token) {
        return "";
    }

    try {
        const verifiedToken = jwt.verify(token, secret)

        if (typeof verifiedToken === "string" || verifiedToken === undefined) {
            return "";
        }

        return verifiedToken.location;
    } catch (e) {
        console.error(e);
        return "";
    }
}