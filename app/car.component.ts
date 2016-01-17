import { Component } from 'angular2/core';

interface Car{
    id:number;
    brand:string;
    model:string;
}

@Component({
    selector:'my-car',
    template:`<div class="container">
                   <h1>{{title}}</h1>
                   <h2>Marca: {{car.brand}}</h2>
                   <h2>Modelo: {{car.model}}</h2>
                   <div class="row">
                        <div class="form-group">
                            <label>Marca:</label>
                            <input type="text" class="form-control" [(ngModel)]="car.brand" placeholder="Marca do veiculos"/>
                        </div>
                   </div>
                   <div class="row">
                        <div class="form-group">
                            <label>Modelo:</label>
                            <input type="text" class="form-control" [(ngModel)]="car.model" placeholder="Modelo do veiculos"/>
                        </div>
                   </div>
              </div>`
})

export class CarComponent{
    public title:string = "Cadastro de Veiculos";
    public car: Car = {
        id:1,
        brand:'BMW',
        model:'X6',
    }
}