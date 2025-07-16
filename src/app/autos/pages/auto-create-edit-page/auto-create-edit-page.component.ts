import { Component, OnInit } from '@angular/core';
import { Auto } from '../../interfaces/auto.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-auto-create-edit-page',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './auto-create-edit-page.component.html',
  styleUrl: './auto-create-edit-page.component.scss'
})
export class AutoCreateEditPageComponent implements OnInit {

  public edit = false;
  public autoForm!: FormGroup;
  public auto: Auto = {};


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private autoService: AutosService) {
  }

  ngOnInit(): void {
    this.initAutoForm();
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params.forEach((params: Params) => {
        this.editAuto(params['id']);
      });
    } else {
      this.edit = false;
    }
  }

  private initAutoForm() {
    // Inicializar formulario con validaciones

  }

  private editAuto(id: string) {
    this.edit = true;

    // TODO: Obtener auto por id
    // TODO: Llenar formulario con auto [fillAutoForm(auto)]

  }

  private fillAutoForm(auto: Auto) {
    this.autoForm.patchValue(auto);
  }

  public onSubmit() {
    if (this.autoForm.invalid) {
      this.autoForm.markAllAsTouched();
      return;
    }

    this.mapFormAObjeto();

    if (this.edit && this.autoForm.get('id')!.value !== null) {
      // TODO: Invocar el metodo updateAuto del servicio y redirigir a la lista de autos

    } else {
      // create
      const { id, ...autoSinID } = this.auto; // Elimina el campo 'id' para que json-server lo autogenere
      // TODO: Invocar el metodo createAuto del servicio y redirigir a la lista de autos

    }
  }

  private mapFormAObjeto() {
    this.auto = this.autoForm.getRawValue() as Auto;
  }

}
