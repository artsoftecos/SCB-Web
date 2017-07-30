import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullImagePath: string;

  constructor(public dialog: MdDialog) {       
    this.fullImagePath = '../../assets/img/img1.jpg'  
  }

  ngOnInit() {
  }
}
