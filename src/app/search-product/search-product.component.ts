import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'] 
})
export class SearchProductComponent implements OnInit {

   products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';
  searched: boolean = false;   

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = [];
    });
  }

  search() {

    this.searched = true;  

    if (!this.searchText.trim()) {
      this.filteredProducts = [];
      return;
    }

    this.filteredProducts = this.products.filter(p =>
      p.pname.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}