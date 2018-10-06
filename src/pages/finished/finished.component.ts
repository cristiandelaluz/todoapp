import { WishesService } from './../../services/wishes.service';
import { Component } from "@angular/core";
import { List } from '../../models';

@Component({
    selector: 'page-finished',
    templateUrl: 'finished.component.html'
})
export class FinishedPage {
    constructor(public wishesService:WishesService) {
        
    }

    listSelected(list: List) {
        console.log(list);
    }
}