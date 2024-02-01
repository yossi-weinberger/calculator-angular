import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { hero } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //  str: string;
  //  num1: number;
  //  num2: number;
  result: number;
  //  operator: string;
  user_input: string;

  constructor() {
    // this.str=""
    // this.num1=0
    // this.num2=0
    this.result = 0;
    // this.operator=""
    this.user_input = '';
  }

  // press(event: KeyboardEvent, key: number) {
  //   if (event.key == "1") {
  //     this.func(1);
  //  }

  //  func(index: number) {
  //   if (this.operator == "") {
  //   this.num1 = this.num1*10 + index;
  //   this.str += String(index);
  //   } else {
  //   this.num2 = this.num2*10 + index;
  //   this.str += String(index);
  // }}

  func(index: string) {
    this.user_input += String(index);
  }

  clear() {
    // this.str=""
    // this.num1=0
    // this.num2=0
    this.result = 0;
    // this.operator=""
    this.user_input = '';
  }

  //  add() {
  //   this.operator = "+";
  //   this.str +=this.operator;
  //  }

  //  min() {
  //   this.operator = "-";
  //   this.str +=this.operator;
  //  }

  //  divide() {
  //   this.operator = "/";
  //   this.str +=this.operator;
  //  }

  //  mult() {
  //   this.operator = "*";
  //   this.str +=this.operator;
  //  }

  autput() {
    // if (this.operator == "+") { this.result = this.num1 + this.num2; }
    // if (this.operator == "-") { this.result = this.num1 - this.num2; }
    // if (this.operator == "/") { this.result = this.num1 / this.num2; }
    // if (this.operator == "*") { this.result = this.num1 * this.num2; }
    this.result = eval(this.user_input);
  }
}
