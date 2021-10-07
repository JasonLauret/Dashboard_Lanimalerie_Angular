
import { Component, OnInit } from '@angular/core';
import { ConnexionApiService } from '../services/connexion-api.service';

@Component({
  selector: 'app-data-from-api',
  templateUrl: './data-from-api.component.html',
  styleUrls: ['./data-from-api.component.css']
})
export class DataFromApiComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
} 