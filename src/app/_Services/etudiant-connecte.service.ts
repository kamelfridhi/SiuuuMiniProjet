import { Injectable } from '@angular/core';
import  *  as CryptoJS from  'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EtudiantConnecteService {
   roleas!: string ;
  key = "123";
  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key)|| "";
    return this.decrypt(data);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
is_loged():Boolean{
    return !!this.getData('id');
}
getrole(role:string):Boolean{
  let roleas = this.getData('role');
    if(roleas == role){
      return true;
    }
    return false;
}

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
