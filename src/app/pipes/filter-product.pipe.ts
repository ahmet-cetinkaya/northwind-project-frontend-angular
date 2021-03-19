import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    return value.filter((p: Product) =>
      p.productName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
