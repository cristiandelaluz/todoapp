import { List } from './../models';
import { Injectable } from "@angular/core";

@Injectable()
export class WishesService {

    lists: List[] = [];
    
    constructor() {
        const list1 = new List('Starman');
        const list2 = new List('MiResto');

        this.lists.push(list1, list2);
    }
}