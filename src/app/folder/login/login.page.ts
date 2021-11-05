import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToHomePage() {
        // let navExtras: NavigationExtras = {
        //     state: {
        //         id: id
        //     }
        // }
        this.router.navigate(['/homepage'])
    }

}
