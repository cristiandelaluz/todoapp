import { List } from './../models';
import { Injectable } from "@angular/core";

@Injectable()
export class WishesService {

    lists: List[] = [];
    
    constructor() {
        // const list1 = new List('Starman');
        // const list2 = new List('MiResto');

        // this.lists.push(list1, list2);
        this.uploadStorage();
    }

    addList(list: List) {
        this.lists.push(list);
        this.saveStorage();
    }

    deleteList(list: List) {
        this.lists = this.lists.filter(listData => listData.id !== list.id);
        this.saveStorage();
    }

    saveStorage() {
        localStorage.setItem('data', JSON.stringify(this.lists));
    }

    uploadStorage() {
        if (localStorage.getItem('data')) {
            this.lists = JSON.parse(localStorage.getItem('data'));
        } else {
            this.lists = [];
        }
    }
}