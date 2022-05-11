import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
imageSrc='assets/images/flora1.jpg'
imageAlt="flora1"
imageSrc1='assets/images/fauna2.jpg'
imageAlt1="fauna2"
imageSrc2='assets/images/fauna6.jpg'
imageAlt2="fauna6"
imageSrc3='assets/images/fauna7.jpg'
imageAlt3="fauna7"
imageSrc4='assets/images/fauna7.jpg'
imageAlt4="fauna8"
imageSrc5='assets/images/flora3.jpg'
imageAlt5="flora3"
imageSrc6='assets/images/fauna10.jpg'
imageAlt6="fauna9"
imageSrc7='assets/images/floraicon.png'
imageAlt7="floraicon"
imageSrc8='assets/images/faunaicon.png'
imageAlt8="faunaicon"

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
