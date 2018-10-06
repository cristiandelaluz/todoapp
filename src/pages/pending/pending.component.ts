import { WishesService } from './../../services/wishes.service';
import { Component } from "@angular/core";
import { List } from '../../models';

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {

    constructor(public wishesService:WishesService) {
        
    }

    listSelected(list: List) {
        console.log(list);
    }
}