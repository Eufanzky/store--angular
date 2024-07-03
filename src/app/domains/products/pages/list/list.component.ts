import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products = signal<Product[]>([])

  constructor() {
    const initProducts: Product[] = [
      {
        id: 1,
        title: 'Producto 1',
        price: '100',
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Producto 2',
        price: '200',
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Producto 3',
        price: '300',
        image: 'https://picsum.photos/640/640?r=50',
        creationAt: new Date().toISOString()
      }
    ]
    this.products.set(initProducts)
  }

  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }
}
