import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-telhas',
  templateUrl: './calcular-telhas.component.html',
  styleUrls: ['./calcular-telhas.component.scss'],
})
export class CalcularTelhasComponent implements OnInit {
  blocosUsados: number = 0;
  totalUsadoNaObra: number = 0;
  public formTelhas: FormGroup | undefined;
  telhaResult: number = 0;
  areaTotal: number = 0;
  totalTelhas: number = 0;
  totalTelhaDesperdicio: number = 0;
  listaCaida: any[] = [];
  valorCaida: any;
  selectedItem: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.carregarItemsCaida();
    this.telhasForm();
  }
  calcularTelhas() {
    let accountValue: blocosObject = this.formTelhas?.getRawValue();

    let blocosResult = accountValue.comprimento * accountValue.largura;

    this.telhaResult = Math.ceil(blocosResult);
  }
  calcularAreaTotal() {
    let totalArea = this.valorCaida * this.telhaResult;

    this.areaTotal = Math.ceil(totalArea);
  }
  calcularTotalTelhas() {
    let accountValue: blocosObject = this.formTelhas?.getRawValue();

    let metrosTelha = accountValue.numeroTelhas;

    let totalDeTelhas = this.areaTotal * metrosTelha;

    this.totalTelhas = Math.ceil(totalDeTelhas);
  }
  calcularTotalTelhasDesperdicio() {
    let valuePorcent = (5 * this.totalTelhas) / 100;
    let totalTelhaDesperdicio = this.totalTelhas + valuePorcent;

    this.totalTelhaDesperdicio = Math.ceil(totalTelhaDesperdicio);
  }

  telhasForm() {
    this.formTelhas = this.fb.group({
      largura: ['', Validators.compose([Validators.required])],
      comprimento: ['', Validators.compose([Validators.required])],
      numeroTelhas: [''],
    });
  }

  get largura() {
    return this.formTelhas?.get('largura');
  }

  get comprimento() {
    return this.formTelhas?.get('comprimento');
  }

  carregarItemsCaida() {
    this.listaCaida = [
      {
        value: 1.2,
        name: '1.20',
      },
      {
        value: 1.5,
        name: '1.50',
      },
      {
        value: 1.8,
        name: '1.80',
      },
      {
        value: 2.1,
        name: '2.10',
      },
      {
        value: 2.56,
        name: '2.56',
      },
      {
        value: 3.24,
        name: '3.24',
      },
      {
        value: 3.8,
        name: '3.80',
      },
      {
        value: 4.4,
        name: '4.40',
      },
    ];
  }

  selecionarCaida(item: any) {
    this.valorCaida = item.value;

    this.selectedItem = item.name;
  }
}

export class blocosObject {
  largura: number = 0;
  comprimento: number = 0;
  numeroTelhas: number = 0;
}
