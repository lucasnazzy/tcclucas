import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-blocos',
  templateUrl: './calcular-blocos.component.html',
  styleUrls: ['./calcular-blocos.component.scss'],
})
export class CalcularBlocosComponent implements OnInit {
  blocosUsados: number = 0;
  metrosQuadradosUsados: number = 0;
  public formBlocos: FormGroup | undefined;
  public formMetrosQuadrados: FormGroup | undefined;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.blocosForm();
    this.metrosQuadradosForm();
  }

  // calcular quantidade de blocos
  calcularBlocos() {
    let accountValue: blocosObject = this.formBlocos?.getRawValue();

    let blocosResult = accountValue.comprimento * accountValue.altura;

    let blocosFinais = 10000 / blocosResult;

    this.blocosUsados = Math.floor(blocosFinais);
  }

  blocosForm() {
    this.formBlocos = this.fb.group({
      altura: ['', Validators.compose([Validators.required])],
      comprimento: ['', Validators.compose([Validators.required])],
    });
  }
  metrosQuadradosForm() {
    this.formMetrosQuadrados = this.fb.group({
      metrosQuadrados: ['', Validators.compose([Validators.required])],
    });
  }

  get altura() {
    return this.formBlocos?.get('altura');
  }

  get comprimento() {
    return this.formBlocos?.get('comprimento');
  }
  get metrosQuadrados() {
    return this.formMetrosQuadrados?.get('metrosQuadrados');
  }

  calcularMetrosQuadrados() {
    let blocosValue: blocosObject = this.formBlocos?.getRawValue();
    let metrosValue: metrosObject = this.formMetrosQuadrados?.getRawValue();

    let blocosStats = blocosValue.comprimento * blocosValue.altura;

    let valorBlocos = metrosValue.metrosQuadrados * 10000;

    let metrosQuadradosUsados = valorBlocos / blocosStats;

    this.metrosQuadradosUsados = Math.floor(metrosQuadradosUsados);
  }
}

export class blocosObject {
  altura: number = 0;
  comprimento: number = 0;
}
export class metrosObject {
  metrosQuadrados: number = 0;
}
