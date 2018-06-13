import { Component, OnInit } from '@angular/core';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ["./user.component.scss"]
})

export class UserComponent implements OnInit{
    public tableData1: TableData;
    ngOnInit(){
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
    
}
