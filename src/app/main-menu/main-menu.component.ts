import { Component, Input, OnInit } from '@angular/core';
import {GetHttpDataService} from '../get-http-data.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input() item = '';
  public carreras = [];
  title = 'my-aviacion'
  constructor(private getData : GetHttpDataService) { 
    getData.getCarreras().then((data : any) => {
      this.carreras = data;
      console.log(data)
    });
  }

  seleccionado(){
    console.log('Seleccionado');
  }

  ngOnInit(): void {
  }

}
