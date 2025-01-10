import {randomBytes} from "crypto"

const generateSecret = () => {
    return randomBytes(64).toString("hex")
}

const jwtSecret = generateSecret()
console.log(jwtSecret)