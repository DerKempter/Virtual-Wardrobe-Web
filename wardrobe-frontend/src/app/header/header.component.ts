import {Component, Input} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDrawer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    MatToolbar,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required: true}) navbar!: MatDrawer;

}
