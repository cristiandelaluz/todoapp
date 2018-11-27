import { AddPage } from './../add/add.component';
import { WishesService } from './../../services/wishes.service';
import { Component } from "@angular/core";
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {

    constructor(public wishesService:WishesService, 
        private navController: NavController,
        private alertController: AlertController) {
        
    }

    addList() {
        const promp = this.alertController.create({
            title: 'Nueva Lista',
            message: 'Nombre de la nueva lista',
            inputs: [{
                'name': 'title',
                'placeholder': 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Agregar',
                handler: data => {
                    if (data.title.length === 0) {
                        return;
                    }

                    this.navController.push(AddPage, {
                        title: data.title
                    });
                }
            }]
        });

        promp.present();
    }
}