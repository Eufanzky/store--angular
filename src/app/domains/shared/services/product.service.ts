import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private https = inject(HttpClient);

  constructor() { }

  getProducts(category_id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category_id) {
      url.searchParams.append('categoryId', category_id);
    }
    return this.https.get<Product[]>(url.toString());
  }

  getOne(id: string) {
    return this.https.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
