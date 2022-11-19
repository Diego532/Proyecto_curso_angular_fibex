import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetMateriaByCarreraService {

  public Carreras = []
  parametro: string = 'PP.json';
  url: string = `https://selphis.io/365/${this.parametro}`;
  constructor() {
    
  }

  getMateriaByCarrera(){
    return new Promise((resolve, reject) => {
      axios.get(this.url).then((response) => {
        // handle success
        this.Carreras = response.data;
        resolve(this.Carreras)
        })
    });
  }
}
