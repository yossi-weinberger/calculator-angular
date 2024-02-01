import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class hero{

  title = 'test';
  a: number; 
  b: number; 
   
  constructor()  
  { 
   this.a = 9;  
   this.b = 6;  
}}