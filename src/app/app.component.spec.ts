import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, MatToolbarModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the toolbar', () => {
    const toolbarElement: HTMLElement = fixture.nativeElement.querySelector('.app-toolbar');
    expect(toolbarElement).toBeTruthy();
  });

  it('should render the brand name', () => {
    const brandNameElement: HTMLElement = fixture.nativeElement.querySelector('.brand-name');
    expect(brandNameElement.textContent).toContain('stibo test');
  });
});
