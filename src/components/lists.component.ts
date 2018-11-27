import { Component, Input } from "@angular/core";
import { WishesService } from "../services/wishes.service";
import { List } from "../models/list.model";
import { AddPage } from "../pages/add/add.component";
import { NavController, AlertController, ItemSliding } from "ionic-angular";

@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})
export class ListsComponent {
    @Input() finished: boolean = false;

    constructor(public wishesService:WishesService, 
        private navController: NavController,
        private alertController: AlertController) {
        
    }

    listSelected(list: List) {
        this.navController.push(AddPage, {
            title: list.title,
            list: list
        });
    }

    editList(list: List, slidingItem: ItemSliding) {
        slidingItem.close();

        const promp = this.alertController.create({
            title: 'Editar Nombre',
            message: 'Editar nombre de la lista',
            inputs: [{
                'name': 'title',
                'placeholder': 'Nombre de la lista',
                'value': list.title
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Actualizar',
                handler: data => {
                    if (data.title.length === 0) {
                        return;
                    }

                    list.title = data.title;
                    this.wishesService.saveStorage();
                }
            }]
        });

        promp.present();
    }

    deleteList(list: List) {
        this.wishesService.deleteList(list);
    }
}