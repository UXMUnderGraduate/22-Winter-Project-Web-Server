import { Injectable } from '@nestjs/common';
import { AUDIO_ENCRYPTION_KEY } from "../main"

@Injectable()
export class EncryptionService {
    audioEncryption(file) {
        require("dotenv").config();
        const key = AUDIO_ENCRYPTION_KEY

        const aes256 = require('aes256');
        
        const encryptedAud = aes256.encrypt(key, file.buffer);

        return encryptedAud
    }
} 
