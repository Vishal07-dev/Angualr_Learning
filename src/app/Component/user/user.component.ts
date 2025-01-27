import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name : string = "vishal";
  head: string = "Ajay";
  change: string = ""

  constructor()
  {
    // this.getalert()
  }

  getalert()
  {
    alert("this property binding value")
  }
  changeval()
  {
     this.name=this.change
      
      
  }
}
