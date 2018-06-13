import { NO_ERRORS_SCHEMA } from "@angular/core";
import { VideosComponent } from "./videos.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("VideosComponent", () => {

  let fixture: ComponentFixture<VideosComponent>;
  let component: VideosComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [VideosComponent]
    });

    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
