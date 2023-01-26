import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';

import { SharedService } from './service/shared.service';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, FormsModule],
  exports: [MenuComponent],
  providers: [SharedService],
})
export class SharedModule {}
