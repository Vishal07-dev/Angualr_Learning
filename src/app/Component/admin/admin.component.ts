import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [NgIf,FormsModule,NgFor],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

    isDivVisible: boolean=true
    togglebtn : string = "hide"
    box1: string = ""
    box2: string = ""
    namearray:string[]=["vishal","ajay","prem"]

    tableobj : any[]=[
      {
        name: "vishal",
        age : 18,
        city : "ahme"
      },
      {
        name: "ajay",
        age : 20,
        city : "pune"
      },
      {
        name: "aakash",
        age : 22,
        city : "bihar"
      },
      {
        name: "sagar",
        age : 25,
        city : "asaam"
      }
    ]

    onshow()
    {
      if(this.isDivVisible)
      {
        this.isDivVisible = false
        this.togglebtn = "show"
      }
      else
      {
        this.isDivVisible=true
        this.togglebtn="hide"
      }
    }

  


}
