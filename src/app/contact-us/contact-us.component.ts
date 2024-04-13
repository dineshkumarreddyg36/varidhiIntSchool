import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  fromInputs: FormGroup;
  constructor (private _fb:FormBuilder){
    this.fromInputs=this._fb.group({
      parentName:'',
      emailId:'',
      phoneNo:'',
      message:''
    })
  }

  submitContactInfo(){
    if(this.fromInputs.valid){
      console.log("FormInput: ", this.fromInputs.value)
      this.fromInputs.reset()
    }
  }

}
