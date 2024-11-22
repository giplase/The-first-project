import { Injectable } from '@angular/core';
import { Item } from '../models/right-comp.model';
import { ITEMS } from './items.mock';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    items: Item[] = ITEMS;
    getItems(): Item[] {
        return this.items;
    }

    getItemById(id: number): Item | undefined {
        return this.items.find(item => item.id === id);
    }
}