import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    cpf: '',
    start_datetime: ''
  };

  agendamentos: any[] = [];

  submitForm(event: Event): void {
    event.preventDefault();

   
    localStorage.setItem('formData', JSON.stringify(this.formData));

    this.agendamentos.push({ ...this.formData });
    
    this.formData = {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      start_datetime: ''
    };
  }
}