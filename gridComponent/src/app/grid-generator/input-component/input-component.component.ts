import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  //component variables
  nofBlocks:number;
  nofBlocksinRow:number;
  blockCount:number = 0;
  rowCount:number = 0;

  //component functions
  pushData(){
    this.blockCount = this.nofBlocks;
    this.rowCount = this.nofBlocksinRow;
  }

}
