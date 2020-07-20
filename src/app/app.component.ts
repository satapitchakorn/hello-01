import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Satapitchakorn';
  firstname: string = ''
  lastname: string = ''
  score: number = 100
  show: boolean = true
  color: Array<string> = ["red", "green"]
  name: string = ''
  inputName(event: any) {
    this.firstname = event.target.value;
  }
  inputLastName(value: string) {
    this.lastname = value
  }
  submit(e) {
    e.preventDefault()
    this.name = this.firstname + ' ' + this.lastname
  }
}
