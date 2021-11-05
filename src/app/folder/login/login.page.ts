import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';

import { SignInService } from 'src/app/services/sign-in.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    credentials: any

    constructor(private router: Router, private signInService: SignInService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

    ngOnInit() {
        this.credentials = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        })
    }

    async goToHomePage() {
        let loading = await this.loadingCtrl.create()
        await loading.present()

        if (this.signInService.getValidCred(this.credentials.value.username, this.credentials.value.password)) {
            loading.dismiss()
            this.router.navigate(['/homepage'])
        } else {
            loading.dismiss();
            const alert = await this.alertCtrl.create({
                header: 'Login failed',
                message: 'Username or password incorrect',
                buttons: ['OK'],
            });

            await alert.present();
        }
    }

}
