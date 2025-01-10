import jwt from "jsonwebtoken";

export const createJWT = (req, res) => {
    const {email} = req.body;
    console.log(email)

    try {
        const jwt_token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.cookie('jwt_token', jwt_token, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });

        res.status(201).json({
            status: 'success',
            jwt_token
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error creating JWT',
            error: error.message
        });
    }
}
export const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt_token;
    console.log(token)
    if (!token) {
        return res.status(401).send("Access Denied");
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}