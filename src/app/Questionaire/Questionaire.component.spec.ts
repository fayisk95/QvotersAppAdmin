import { NO_ERRORS_SCHEMA } from "@angular/core";
import { QuestionaireComponent } from "./Questionaire.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("QuestionaireComponent", () => {

  let fixture: ComponentFixture<QuestionaireComponent>;
  let component: QuestionaireComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [QuestionaireComponent]
    });

    fixture = TestBed.createComponent(QuestionaireComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
