import { Component } from '@angular/core';
import { GeneralInfoComponent } from "../../common/general-info/general-info.component";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [GeneralInfoComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent {}
