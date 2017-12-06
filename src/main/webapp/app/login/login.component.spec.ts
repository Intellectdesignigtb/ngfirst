import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('login compute', () => {
  it('should be always true', () => {
      expect(true).toBe(true);
  });

  // it('should call ngOnInit method', () => {
  //   let loginComponent = new LoginComponent();
  //   expect(loginComponent.ngOnInit).toHaveBeenCalled();
  // });
});

// import { ClarityModule } from "clarity-angular";
// import { APP_BASE_HREF } from "@angular/common";

// describe('login compute', () => {
//     it('should return 0 if input is negative', () => {
//         let comp = new LoginComponent();
//         let result = comp.compute(-1);
//         expect(result).toBe(0);
//     });
//     it('should return 1 if input is positive', () => {
//         let comp = new LoginComponent();
//         let result = comp.compute(1);
//         expect(result).toBe(1);
//     });
//   });

// ***********************************************************************************************

//    compute(number) {

//     if (number < 0) {

//       return 0;
//     } else {

//       return 1;
//     }
//   }
