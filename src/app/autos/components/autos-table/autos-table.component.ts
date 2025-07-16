import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto.interface';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'autos-table',
  imports: [
    NgForOf
  ],
  templateUrl: './autos-table.component.html',
  styleUrl: './autos-table.component.scss'
})
export class AutosTableComponent {

  @Input() autos!: Auto[];
  @Output() onDeleteAuto = new EventEmitter<Auto>();

  constructor(private router: Router) {
  }

  onEdit(auto: Auto) {
    // TODO: Implementar redireccion a editar auto
    this.router.navigate(['auto/edit', auto.id]);
  }

  onDelete(auto: Auto) {
    // TODO: Implementar eliminar auto, emitir evento
    this.onDeleteAuto.emit(auto);
  }

}
