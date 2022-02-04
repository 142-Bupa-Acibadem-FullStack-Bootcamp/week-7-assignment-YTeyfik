import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  currencies: String[] = ['TurkishLiras', 'Euro', 'Dollar', 'Sterling']; //para birimleri için dizi oluşturuldu
  inCurrency: String|undefined; //dönüştürülecek para birimi{tl euro gibi} tutlacak
  outCurrency: String|undefined; //dönüşmüş parabirimi tutlacak
  currencyRates: any = {  //para birimlerinin tl bazında oranı
    TurkishLiras: 1,
    Euro: 0.0641, //tl bölü euro oranı (1/15,58)
    Dollar: 0.0736, //tl bölü dolar oranı
    Sterling:0.0543 //tl bölü sterlin oranı
  };
  input:number|undefined; // dönüştürülecek miktarı tutacak

  //Dönüştürme
  convert(input:any, inCurrency:any, outCurrency:any):number {
    return input *( this.currencyRates[outCurrency] / this.currencyRates[inCurrency]);
  };


}
