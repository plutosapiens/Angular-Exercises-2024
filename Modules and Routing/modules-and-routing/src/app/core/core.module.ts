import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from '../user/user-list/user-list.component';



@NgModule({
  declarations: [
    GlobalLoaderComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    GlobalLoaderComponent
  ]
})
export class CoreModule { }
