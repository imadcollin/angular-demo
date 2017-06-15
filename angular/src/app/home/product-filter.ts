import { IProduct } from './products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pizzesFilter',
})
export class FilterPipe implements PipeTransform {
    transform(items: IProduct[], filter: string): IProduct[] {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.productName.toLocaleLowerCase().indexOf(filter) !== -1);
    }
}