import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-using-form-group',
  templateUrl: './using-form-group.component.html',
  styleUrls: ['./using-form-group.component.css']
})
export class UsingFormGroupComponent implements OnInit {

  userArray: any[] = [];

  userFroms: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUser();
  }


  getAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.userArray = res;
    })
  }

  onEdit(id: number) {
    this.http.get("https://jsonplaceholder.typicode.com/users/" + id).subscribe((res: any) => {
      this.userFroms = new FormGroup({
        id: new FormControl(res.id),
        name: new FormControl(res.name),
        username: new FormControl(res.username),
        email: new FormControl(res.username)
      })
    })
  }
  onSaveUser() {
    debugger;
    const obj = this.userFroms.value;
    this.http.post("https://jsonplaceholder.typicode.com/users", obj).subscribe((res: any) => {
      alert("User Created");
      this.userFroms.reset();
    })
  }

  onReset() {
    // this.userFroms = new FormGroup({
    //   id: new FormControl(''),
    //   name: new FormControl(''),
    //   username: new FormControl(''),
    //   email: new FormControl('')
    // })

    this.userFroms.reset();
  }


}
