import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {

  constructor() { }

  calcular(num1: string, num2: string, operator: string){
    switch(operator){
      case "+":{
        alert(parseFloat(num1) + parseFloat(num2));
        break;
      }
      case "-":{
        alert(parseFloat(num1) - parseFloat(num2));
        break;
      }
      case "*":{
        alert(parseFloat(num1) * parseFloat(num2));
        break;
      }
      case "/":{
        alert(parseFloat(num1) / parseFloat(num2));
        break;
      }
      default :{
        alert("Algo de errado aconteceu");
        break;
      }  
    }
  }

  ngOnInit() {
  }

}
