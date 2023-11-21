import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = '';

  show = false;

  ngOnInit(){
    this.password = 'password';
  }

  onCLick(){
    if(this.password === 'password'){
      this.password = 'text';
      this.show = true;
    }else{
      this.password = 'password';
      this.show = false;
    }
  }
}
