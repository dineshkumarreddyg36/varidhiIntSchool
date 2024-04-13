import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent {

  fromInputs: FormGroup;

  constructor(private _fb:FormBuilder, public _dialogRef:DialogRef<AdmissionFormComponent>){
    this.fromInputs=this._fb.group({
      parentName:'',
      emailId:'',
      studentName:'',
      phoneNo:'',
      grade:'',
      message:''
    })
  }

  onFormSubmit(){
    console.log("Submitted")
    if(this.fromInputs.valid){
      console.log("FormInput: ", this.fromInputs.value)
      this._dialogRef.close();
    }
  }

}
