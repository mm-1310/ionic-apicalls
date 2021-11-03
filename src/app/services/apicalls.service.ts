import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5'

@Injectable({
    providedIn: 'root'
})

export class ApicallsService {

    baseURL = 'https://gateway.marvel.com:443/v1/public'

    //DATA FOR HASH
    publicKey = '89dd9f6152897008a59e0050cecf5713'
    privateKey = 'e3e2db831d87d93f01ede25bfdc6bd0d46ac9fa6'
    timeStamp = Date.now()

    hash = Md5.hashStr(this.timeStamp + this.privateKey + this.publicKey)
    //END HASH

    constructor(private http: HttpClient) { }

    getComicsList() {
        return this.http.get(`${this.baseURL}/comics?limit=20&ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}`)
    }

    getComicDetails(id: any) {
        return this.http.get(`${this.baseURL}/comics/${id}?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}`)
    }
}
