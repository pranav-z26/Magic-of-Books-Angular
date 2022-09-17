import { Component, OnInit } from '@angular/core';
import { UserM } from 'src/app/models/user/user.module';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-login-book',
  templateUrl: './login-book.component.html',
  styleUrls: ['./login-book.component.css']
})
export class LoginBookComponent implements OnInit {

  username: string | null = "";



  bookarr: any
  constructor(private bookservice: BookService) {
    this.bookservice.getBooks().subscribe(data => {
      this.bookarr = data;

      this.username = localStorage.getItem('username');
    })
  }
  
  ngOnInit(): void {
  }

}
