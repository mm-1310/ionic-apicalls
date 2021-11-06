import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApicallsService } from '../../services/apicalls.service';

import { LoadingController, AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-comics-detail',
    templateUrl: './comics-detail.page.html',
    styleUrls: ['./comics-detail.page.scss'],
})

export class ComicsDetailPage implements OnInit {
    data: any
    parseData: any
    comicsId: BigInteger

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private apiCallsService: ApicallsService) { 
        this.activatedRoute.queryParams.subscribe(() => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.comicsId = this.router.getCurrentNavigation().extras.state.id
            }
        })
    }

    async ngOnInit() {
        let loading = await this.loadingCtrl.create()
        await loading.present()

        this.apiCallsService.getComicDetails(this.comicsId).pipe(finalize(() => loading.dismiss())).subscribe(data => {
            this.data = data
            this.parseData = this.data.data.results
        }, async err => {
            if (!err.ok) {
                const alert = await this.alertCtrl.create({
                    header: err.error.code,
                    message: err.error.message,
                    buttons: [{
                        text: 'OK',
                        handler: () => {this.router.navigate(['/homepage'])}
                    }],
                })
    
                await alert.present()
            }
        })
    }

}
