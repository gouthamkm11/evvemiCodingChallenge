import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-generator',
  templateUrl: './grid-generator.component.html',
  styleUrls: ['./grid-generator.component.css']
})
export class GridGeneratorComponent implements OnInit {

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
