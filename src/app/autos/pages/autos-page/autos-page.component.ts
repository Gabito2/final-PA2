import { Component, OnInit } from '@angular/core';
import { Auto } from '../../interfaces/auto.interface';
import { AutosService } from '../../services/autos.service';
import { Router } from '@angular/router';
import { AutosTableComponent } from '../../components/autos-table/autos-table.component';

@Component({
  selector: 'app-autos-page',
  imports: [
    AutosTableComponent
  ],
  templateUrl: './autos-page.component.html',
  styleUrl: './autos-page.component.scss'
})
export class AutosPageComponent implements OnInit {

  public autos: Auto[] = [];

  constructor(private autosService: AutosService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe(autos => this.autos = autos);
  }

  onAdd() {
    // TODO: Implementar redireccion a crear auto
  }

  deleteAuto(auto: Auto) {
    // TODO: Implementar eliminar auto, invocar al servicio

  }

}
