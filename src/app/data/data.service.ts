import { Injectable } from '@angular/core';
import { Item } from '../models/right-comp.model';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    items: Item[] = [
        { id: 1, name: 'Черновик', info: 'Информация о черновике' },
        { id: 2, name: 'В обработке', info: 'Информация о чем-то в обработке' },
        { id: 3, name: 'Завершено', info: 'Информация о чем-то, что завершено' },
        { id: 4, name: 'Аннулировано', info: 'Информация о чем-то, что аннулировано' },
    ];

    getItems(): Item[] {
        return this.items;
    }

    getItemById(id: number): Item | undefined {
        return this.items.find(item => item.id === id);
    }
}