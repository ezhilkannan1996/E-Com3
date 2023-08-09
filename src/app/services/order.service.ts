import { Injectable } from '@angular/core';
import { order } from '../interface/data-type';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList() {
    const hardcodedOrders: order[] = [
      {
        email: 'user1@example.com',
        address: 'Address 1',
        contact: '1234567890',
        totalPrice: 100,
        userId: 'user1',
        id: 1,
      },
      {
        email: 'user2@example.com',
        address: 'Address 2',
        contact: '9876543210',
        totalPrice: 200,
        userId: 'user2',
        id: 2,
      }
    ];
  
    return of(hardcodedOrders);
  }

}
