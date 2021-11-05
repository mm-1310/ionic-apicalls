import { Injectable } from '@angular/core';

const credData = [
    {name: 'user1', password: 'user11'},
    {name: 'user2', password: 'user22'},
    {name: 'user3', password: 'user33'},
    {name: 'user4', password: 'user44'},
]

@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor() { }

    getValidCred(username: any, password: any) {
        for (let i = 0; i < credData.length; i++) {
            if (credData[i].name == username && credData[i].password == password) {
                return true
            }
        }

        return false
    }
}
