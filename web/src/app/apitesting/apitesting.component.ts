import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-apitesting',
  templateUrl: './apitesting.component.html',
  styleUrls: ['./apitesting.component.scss']
})
export class ApitestingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('api/v6/listings').subscribe((response)=>console.log(response));
    console.log("hello world");
  }

}
