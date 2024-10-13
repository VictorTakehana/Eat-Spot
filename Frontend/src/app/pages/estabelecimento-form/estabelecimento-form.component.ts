import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CepService } from '../../services/cep.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-estabelecimento-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './estabelecimento-form.component.html',
  styleUrl: './estabelecimento-form.component.scss'
})
export class EstabelecimentoFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private cepService: CepService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', { validators: [Validators.required] }),
      telefone: new FormControl('', { validators: [Validators.required] }),
      categoria: new FormControl('', { validators: [Validators.required] }),
      horario: new FormControl('', { validators: [Validators.required] }),
      instagram: new FormControl(''),
      cep: new FormControl('', { validators: [Validators.required] }),
      numero: new FormControl('', { validators: [Validators.required] }),
      complemento: new FormControl(''),
      endereco: new FormControl({ value: '', disabled: true }),
      cidade: new FormControl({ value: '', disabled: true }),
      descricao: new FormControl('', { validators: [Validators.required] }),
    })
  }

  buscarCep() {
    const cep = this.form.get('cep')?.value

    if (cep && cep.length === 9) {
      this.cepService.getCep(cep).subscribe((data) => {
        if (!data.erro) {
          console.log(data)
          this.form.patchValue({
            endereco: data.logradouro,
            cidade: `${data.localidade} - ${data.uf}`
          })
        } else {
          alert('CEP não encontrado')
        }
      })
    } else {
      alert('Digite um CEP válido')
    }
  }
  formatarTelefone(event: Event) {
    const input = event.target as HTMLInputElement;
    let telefone = input.value.replace(/\D/g, '');

    if (telefone.length > 10) {
      telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
    } else if (telefone.length > 6) {
      telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 6)}-${telefone.slice(6)}`;
    } else if (telefone.length > 2) {
      telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
    }

    input.value = telefone;
    this.form.get('telefone')?.setValue(telefone);
  }

  formatarCep(event: Event): void {
    const input = event.target as HTMLInputElement;
    let cep = input.value.replace(/\D/g, '');
    if (cep.length > 5) {
      cep = `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
    }
    input.value = cep;
    this.form.get('cep')?.setValue(cep);
  }

  getVoltar() {
    this.router.navigate([''])
  }
}
