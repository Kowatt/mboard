import crypto from 'crypto';

const algorithm: string = 'aes-256-ctr'
const iv: Buffer = crypto.randomBytes(16)

const encrypt = (text: string, pass: string): Object => {

    let key = crypto.createHash('sha256').update(String(pass)).digest('base64').substr(0, 32)

    const cipher = crypto.createCipheriv(algorithm, key, iv)

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()])

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    }
}


const decrypt = (data: any, pass: string): string => {

    let key = crypto.createHash('sha256').update(String(pass)).digest('base64').substr(0, 32)

    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(data.iv, 'hex'))

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(data.content, 'hex')), decipher.final()])

    return decrpyted.toString();
}

export default {encrypt, decrypt};