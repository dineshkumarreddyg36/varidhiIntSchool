import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AdmissionFormComponent } from '../admission-form/admission-form.component';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent {

  constructor(private _dialog:MatDialog){
  }

  openAdmissionForm(){
    this._dialog.open(AdmissionFormComponent)
  }

}
