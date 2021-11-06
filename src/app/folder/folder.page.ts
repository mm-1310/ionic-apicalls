import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ApicallsService } from '../services/apicalls.service';
import { finalize } from 'rxjs/operators'
import { LoadingController, AlertController } from '@ionic/angular'

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
    data: any
    parseData: any

    constructor(private apiCallsService: ApicallsService, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private router: Router) { }

    async ngOnInit() {
        let loading = await this.loadingCtrl.create()
        await loading.present()

        this.apiCallsService.getComicsList().pipe(finalize(() => loading.dismiss())).subscribe(data => {
            this.data = data
            this.parseData = this.data.data.results
        })
    }

    goToComicsDetail(id: BigInteger) {
        let navExtras: NavigationExtras = {
            state: {
                id: id
            }
        }
        this.router.navigate(['/comic-detail'], navExtras)
    }
}
