import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../_services/users.service';

import {} from '@types/googlemaps';

declare var google: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   user:any = {};
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private router:Router, private route: ActivatedRoute,private userService:UsersService) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
     let id = param.get('id');

     this.userService.getUser(id).subscribe(result =>{
        this.user = result;
        console.log(this.user);
        let lat = -35.237058;// this.user.address.geo.lat;
          let lng = 149.065314;//this.user.address.geo.lng;

        var mapProp = {
          center: new google.maps.LatLng(lat,lng),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    
     });

     })
       //this.userService.getUser(id)
  }

  moveToList(){
    this.router.navigate(['/users/list']);
  }

}
