import { Component, OnInit } from "@angular/core";
import * as Chartist from 'chartist';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
declare var require: any;
@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"]
})

export class ReportComponent implements OnInit {
  public tableData1: TableData;
  constructor() { 

  }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'ID', 'Name', 'Country', 'City'],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout'],
          ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas'],
          ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux'],
          ['4', 'Philip Chaney', 'Korea, South', 'Overland Park'],
          ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten'],
          ['6', 'Mason Porter', 'Chile', 'Gloucester']
      ]
    };
  }
  downloadPDF(){}
  
}
