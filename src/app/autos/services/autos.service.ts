import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto } from '../interfaces/auto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private http = inject(HttpClient);

  private readonly url = "http://localhost:3000/autos"

  constructor() {
  }

  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>('http://localhost:3000/autos');
  }

  // TODO: Crear metodo para obtener un auto por id

  // TODO: Crear metodo para crear un auto

  // TODO: Crear metodo para actualizar un auto

  // TODO: Crear metodo para eliminar un auto

}
