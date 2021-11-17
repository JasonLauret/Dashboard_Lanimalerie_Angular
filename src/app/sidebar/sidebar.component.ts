import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  // sidebar(){
  //   let sidebar = document.querySelector(".sidebar");
  //   let closeBtn = document.querySelector("#btn");
  //   let searchBtn = document.querySelector(".bx-search");

  //   closeBtn.addEventListener("click", ()=>{
  //     sidebar.classList.toggle("open");
  //     menuBtnChange();//calling the function(optional)
  //   });

  //   // searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search icon
  //   //   sidebar.classList.toggle("open");
  //   //   menuBtnChange(); //calling the function(optional)
  //   // });

  //   // Code pour changer le bouton de la barre latérale(optional)
  //   function menuBtnChange() {
  //   if(sidebar.classList.contains("open")){
  //     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  //   }else {
  //     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
  //   }
  //   }
  // }
  


}
