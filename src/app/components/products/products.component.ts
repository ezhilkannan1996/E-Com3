import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  currentPage = 1;
  itemsPerPage = 10; // Number of products to display per page
  totalItems: number = 0; // Initialize totalItems to 0
  filteredProducts: any[] = []; //searchmodification sm
  searchQuery: string = '';//sm

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    // Fetch products from your service or API
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;//sm   
    this.totalItems = this.products.length; // Set total number of products
  }

  getPaginatedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  isProductAddedToCart(productId: string): boolean {
    return this.cartService.isProductAdded(productId);
  }

  isProductInCart(productId: string): boolean {
    return this.cartService.isProductAdded(productId);
  }

  filterProductsByCategory(category: string): void {
    this.products = this.productService.getProductsByCategory(category);
    this.totalItems = this.products.length;
    this.currentPage = 1;
  }
  
  onSearchChange(): void {//sm
    this.filteredProducts = this.productService.searchProducts(this.searchQuery);
    this.totalItems = this.filteredProducts.length;
    this.currentPage = 1;
  }
}
