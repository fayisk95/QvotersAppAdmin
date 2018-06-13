import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})

export class GalleryComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
  addImages(){
    document.getElementById("overlay1").style.display = "block";
  }
  show(){
    document.getElementById("overlay").style.display = "block";
  }
  hide(){
    document.getElementById("overlay1").style.display = "none";
  }
}
