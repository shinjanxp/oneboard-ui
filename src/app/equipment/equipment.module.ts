import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEquipmentComponent } from './components/create-equipment/create-equipment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EquipmentClassModule } from '../equipment-class/equipment-class.module';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CeilingfanComponent } from './components/ceilingfan/ceilingfan.component';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PointModule } from '../point/point.module';
import { LightComponent } from './components/light/light.component';
import { ResizableModule } from 'angular-resizable-element';
import { UtilsModule } from '../utils/utils.module';
import { AcComponent } from './components/ac/ac.component';

@NgModule({
  declarations: [
    CreateEquipmentComponent,
    EquipmentComponent,
    CeilingfanComponent,
    AcComponent,
    LightComponent
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    DragDropModule,
    // App
    EquipmentClassModule,
    PointModule,
    UtilsModule,
    // 3rd party
    ResizableModule,
  ],
  entryComponents: [
    CreateEquipmentComponent
  ],
  exports: [
    CreateEquipmentComponent,
    EquipmentComponent,
  ]
})
export class EquipmentModule { }
