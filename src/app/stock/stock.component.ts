import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  title:string = "Bienvenue sur la page des stocks";

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
