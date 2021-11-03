import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { ApicallsService } from '../services/apicalls.service';
import { map, finalize } from 'rxjs/operators'
import { LoadingController } from '@ionic/angular'

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
    public folder: string;
    data: any
    parseData: any

    constructor(private activatedRoute: ActivatedRoute, private apiCallsService: ApicallsService, private loadingCtrl: LoadingController, private router: Router) { }

    async ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');

        let loading = await this.loadingCtrl.create()
        await loading.present()

        this.apiCallsService.getComicsList().pipe(finalize(() => loading.dismiss())).subscribe(data => {
            this.data = data
            this.parseData = this.data.data.results
        })
    }

    goToComicsDetail(id: any) {
        let navExtras: NavigationExtras = {
            state: {
                id: id
            }
        }
        this.router.navigate(['/comic-detail'], navExtras)
    }

}
