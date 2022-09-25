import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void { 
    // let abh = "block";
    // setInterval(() => {
    //   // console.log('frm intevl')
    //   document.getElementById('sn')?.setAttribute("display", `${abh}`);
    //   abh = "none"
    // }, 500)
    // this.ngOnInit()
  }
  

  login() {
    this.router.navigate(['login'])
  }
}


