import { WishesService } from './../../services/wishes.service';
import { Component } from "@angular/core";
import { NavParams } from 'ionic-angular';
import { List, ListItem } from '../../models';

@Component({
    selector: 'page-add',
    templateUrl: 'add.component.html'
})
export class AddPage {

    list: List;
    itemName: string = '';

    constructor(private wishesService:WishesService, private navParams: NavParams) {
        const title = this.navParams.get('title');

        if (this.navParams.get('list')) {
            this.list = this.navParams.get('list');
        } else {
            this.list = new List(title);
            this.wishesService.addList(this.list);
        }
    }

    addItem() {
        if (this.itemName.length === 0) {
            return;
        }

        const newItem = new ListItem(this.itemName);
        this.list.items.push(newItem);
        this.wishesService.saveStorage();

        this.itemName = '';
    }

    updateTask(item: ListItem) {
        item.completed = !item.completed;

        const pendings = this.list.items.filter(item => {
            return !item.completed;
        }).length;

        if (pendings === 0) {
            this.list.finished = true;
            this.list.finishedAt = new Date();
        } else {
            this.list.finished = false;
            this.list.finishedAt = null;
        }

        this.wishesService.saveStorage();
    }

    delete(index: number) {
        this.list.items.splice(index, 1);
        this.wishesService.saveStorage();
    }
}