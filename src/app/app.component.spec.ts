import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReusableListComponent } from './reusable-list/reusable-list.component';
import { ReactiveFormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,ReusableListComponent],
    imports: [ReactiveFormsModule, /* other necessary modules */]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stibo-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stibo-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.app-title')?.textContent).toContain('stibo-test');
  });
  
  it('should render ReusableListComponent for countries', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-reusable-list[itemType="countries"]')).toBeTruthy();
  });

  it('should render ReusableListComponent for payments', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-reusable-list[itemType="payments"]')).toBeTruthy();
  });

  it('should render ReusableListComponent for users', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-reusable-list[itemType="users"]')).toBeTruthy();
  });
});
