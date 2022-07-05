import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserList } from './model/user-list';
import { UtilsService } from './utils.service';

export class user { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any;

  // For User Create Form
  requestForm = this.fb.group({
    user_name: ['', [Validators.required]],
    position_emp: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    company: ['', [Validators.required]],
  });

  constructor(private utils: UtilsService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getdata();
  }

  // For Getting User List
  getdata() {
    this.utils.getRole().subscribe((response: user) => {
      this.users = response;
    });
  }

  // For Creating User
  createUser() {
    this.utils.createUser(this.requestForm.value).subscribe((res) => {
      this.getdata();
      this.requestForm.reset();
      console.log(res);
    });
  }
}
