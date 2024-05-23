import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

import {merge} from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatFormFieldModule, MatInputModule, MatDatepickerModule,MatRadioModule,NgIf, FormsModule, ReactiveFormsModule,MatCheckboxModule,MatCardModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'angularMat';
  errorMessage = '';
  checked = false;


  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  dateOfBirth = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]);
  termsAccepted = new FormControl(false, Validators.requiredTrue);

  registrationForm: FormGroup = this.fb.group({
    firstName: this.firstName,
    lastName: this.lastName,
    dateOfBirth: this.dateOfBirth,
    email: this.email,
    phone: this.phone,
    termsAccepted :  this.termsAccepted
  });

  constructor(private fb: FormBuilder) {}
 

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
