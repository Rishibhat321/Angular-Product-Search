import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'assets/db.json';

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>(this.url).subscribe(data => {
      this.productsSubject.next(data);
    });
  }

  getProducts(): Observable<any[]> {
    return this.products$;
  }

  deleteProduct(index: number) {
    const current = this.productsSubject.value;
    current.splice(index, 1);
    this.productsSubject.next([...current]);
  }
}