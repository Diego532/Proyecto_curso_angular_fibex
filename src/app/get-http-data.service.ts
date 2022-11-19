import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetHttpDataService{

  public Carreras = []
  url: string = 'https://selphis.io/365/index.json'
  constructor(private http: HttpClient) {
    
  }

  getCarreras(){
    return new Promise((resolve, reject) => {
      axios.get(this.url).then((response) => {
        // handle success
        this.Carreras = response.data;
        resolve(this.Carreras)
        })
    });
  }

 


  
}




