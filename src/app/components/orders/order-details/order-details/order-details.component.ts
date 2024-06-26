import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../../header/header.component';
import { OrderItem } from '../../../../modals/orderItem';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent,FormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
dynamicArray : OrderItem[] = [];
orderItem : OrderItem = new OrderItem();
ngOnInit(): void {
  this.orderItem = {'id':0,'name':'','size':0,'quantity':0,'number':0}
  this.dynamicArray.push(this.orderItem);
}
AddRow(){
  var lastIndex = this.dynamicArray.length;
  if(lastIndex - 1 >= 0){
    var item = this.dynamicArray[lastIndex-1];
    if(item.name == ''){
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Name is required!"
  // footer: '<a href="#">Why do I have this issue?</a>'
});
    }
  else if(item.size <= 0){
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Size is required!"
  // footer: '<a href="#">Why do I have this issue?</a>'
});
    }
  else if(item.quantity <= 0){
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Quantity is required!"
  // footer: '<a href="#">Why do I have this issue?</a>'
});
    }
  else if(item.number <= 0){
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Number is required!"
  // footer: '<a href="#">Why do I have this issue?</a>'
});
    }
    else{
   this.orderItem = {'id':lastIndex,'name':'','size':0,'quantity':0,'number':0}

   this.dynamicArray.push(this.orderItem);
  }
  }
  else{
   this.orderItem = {'id':lastIndex,'name':'','size':0,'quantity':0,'number':0}

   this.dynamicArray.push(this.orderItem);
  }
}
removeRow(index : any){
 this.dynamicArray.splice(index, 1);
}
AddRowData(data : OrderItem, index : any){
  this.dynamicArray[index] = data;
  // this.dynamicArray.forEach(element => {


  // });
}
}
