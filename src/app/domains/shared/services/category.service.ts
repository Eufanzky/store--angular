import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private https = inject(HttpClient);

  constructor() { }

  getAll() {
    return this.https.get<Category[]>('https://api.escuelajs.co/api/v1/categories')
  }

  getOne(id: string) {
    return this.https.get<Category>(`https://api.escuelajs.co/api/v1/categories/${id}`)
  }
}
