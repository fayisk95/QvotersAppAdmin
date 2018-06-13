import { Component, OnInit } from "@angular/core";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: "app-Questionaire",
  templateUrl: "./Questionaire.component.html",
  styleUrls: ["./Questionaire.component.scss"]
})

export class QuestionaireComponent implements OnInit {
  tableData1:TableData;
  questions :any[]=[];
  constructor() { 

  }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'ID', 'Name', 'Date', 'No of Questions'],
      dataRows: [
          ['1', 'Dakota Rice', '22/05/2017', '10'],
          ['2', 'Minerva Hooper', '20/04/2017', '10'],
          ['3', 'Sage Rodriguez', '21/06/2017', '10'],
          
      ]
  };
  }
  addQuestionaire(){
    this.questions.push({});
    document.getElementById("overlay").style.display = "block";
  }
  hide(){
    document.getElementById("overlay1").style.display = "none";
  }
  addQuestions(){
    this.questions.push({});//push empty object of type user
}

}
