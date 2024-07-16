import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private https = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.https.get<Product[]>('https://api.escuelajs.co/api/v1/products')
  }

  getOne(id: string) {
    return this.https.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
