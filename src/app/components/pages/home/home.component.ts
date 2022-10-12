import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {   

  }  

  public timeUm: Array<any> = [];
  public timeDois: Array<any> = [];
  public resultado: any = '';
  public jogadores: Array<{ jogador: any }> = [];

  public formTimes: FormGroup = this.formBuilder.group({
    jogadorUm: ['', Validators.required],
    jogadorDois: ['', Validators.required],
    jogadorTres: ['', Validators.required],
    jogadorQuatro: ['', Validators.required],
    jogadorCinco: ['', Validators.required],
    jogadorSeis: ['', Validators.required],
    jogadorSete: ['', Validators.required],
    jogadorOito: ['', Validators.required],
    jogadorNove: ['', Validators.required],
    jogadorDez: ['', Validators.required],
  });

  public time(
    jogadorUm: any,
    jogadorDois: any,
    jogadorTres: any,
    jogadorQuatro: any,
    jogadorCinco: any,
    jogadorSeis: any,
    jogadorSete: any,
    jogadorOito: any,
    jogadorNove: any,
    jogadorDez: any
  ) {
    if (this.jogadores.length == 10) {
      this.jogadores = [];
      this.jogadores.push(
        jogadorUm,
        jogadorDois,
        jogadorTres,
        jogadorQuatro,
        jogadorCinco,
        jogadorSeis,
        jogadorSete,
        jogadorOito,
        jogadorNove,
        jogadorDez
      );
      this.sortear();
    } else {
      this.jogadores.push(
        jogadorUm,
        jogadorDois,
        jogadorTres,
        jogadorQuatro,
        jogadorCinco,
        jogadorSeis,
        jogadorSete,
        jogadorOito,
        jogadorNove,
        jogadorDez
      );
      this.sortear();
    }
    // return console.log(this.jogadores);
  }

  public sortear() {
    let tem: number = 0;
    let count: number = 0;
    let x: number = 5;
    let timeCount: number = 5;
    //debugger;
    this.timeUm = [];
    this.timeDois = [];

    for (let i = 0; i < x; i++) {
      let aleatorio = Math.floor(Math.random() * this.jogadores.length);
      for (let j = 0; j < this.timeUm.length; j++) {
        if (this.jogadores[aleatorio] == this.timeUm[j]) {
          count = 1;
        }
      }
      if (count == 1) {
        i = i - 1;
      }

      if (count == 0) {
        this.timeUm[i] = this.jogadores[aleatorio];
      }
      count = 0;
    }
    debugger;
    if (this.timeUm.length == 5) {
      for (let i = 0; i < timeCount; i++) {
        let aleatorio = Math.floor(Math.random() * this.jogadores.length);
        for (let j = 0; j < this.timeDois.length; j++) {
          if (this.jogadores[aleatorio] == this.timeDois[j]) {
            count = 1;
          }
        }
        if (count == 1) {
          i = i - 1;
        }
        if (count == 0) {
          for (let i = 0; i < this.timeUm.length; i++) {
            if (this.jogadores[aleatorio] == this.timeUm[i]) {
              tem = 1;
            }
          }
          if (tem == 1) {
            i = i - 1;
          }

          if (tem == 0) {
            this.timeDois[i] = this.jogadores[aleatorio];
          }
        }
        count = 0;
        tem = 0;
      }
    }
  }

  public limpar() {
    this.timeUm = [];
    this.timeDois = [];
  }









}
