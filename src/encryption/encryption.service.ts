import { Injectable } from '@nestjs/common';
import { response } from 'express';


@Injectable()
export class EncryptionService {
    audioEncryption(file) {
        // const mime = require('mime')
        const fs = require('fs');
        // const aud = fs.readFileSync('D:/YEJIN/road.mp3', function (error, data) {
        //     response.writeHead(200, {'Content-Type':'audio/mp3'});
        //     response.end(data);
        // });
        const keygen = require("keygenerator");
        const key = keygen._();

        const aes256 = require('aes256');
        
        const encryptedAud = aes256.encrypt(key, file);

        fs.writeFile('D:/YEJIN/road1.mp3', encryptedAud, null,function(err){
            if(err) console.log('Error'+err);
            else console.log("쓰기완료");
        });

        const decryptedAud = aes256.decrypt(key, encryptedAud)
        fs.writeFile('D:/YEJIN/road2.mp3', decryptedAud, null,function(err){
            if(err) console.log('Error'+err);
            else console.log("쓰기완료");
        });

        return decryptedAud
    }
} 
