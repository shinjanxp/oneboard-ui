import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassBuilderRoutingModule } from './class-builder-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BaseComponent } from './components/base/base.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { CreateSubClassComponent } from './components/create-sub-class/create-sub-class.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [BaseComponent, CreateSubClassComponent],
  imports: [
    // Angular
    CommonModule,
    LayoutModule,
    FormsModule,
    // Material
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    // App
    UtilsModule,
    ClassBuilderRoutingModule,
    // 3rd party
    NgxGraphModule,
  ],
  entryComponents: [
    CreateSubClassComponent,
  ],
})
export class ClassBuilderModule { }
