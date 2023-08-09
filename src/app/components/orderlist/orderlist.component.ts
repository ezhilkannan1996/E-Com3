import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { order } from 'src/app/interface/data-type';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {
  orderData:order[]|undefined
  constructor(private product:OrderService, private router: Router) { }

  ngOnInit(): void {
    this.getOrderList()
  }
  cancelOrder(orderId:number|undefined){
    // orderId && this.product.cancelOrder(orderId).subscribe((result: order[])=>{
    //   if(result){
    //     this.getOrderList();
    //   }
    // })
  }
  getOrderList(){
    this.product.orderList().subscribe((result: order[])=>{
      this.orderData=result;
    })
  }

  viewOrder(orderId: number | undefined) {
    if (orderId !== undefined) {
      this.router.navigate(['/order', orderId]);
    }
  }
}
