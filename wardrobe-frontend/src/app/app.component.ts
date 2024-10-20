import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDrawerContainer, MatDrawer, MatButton, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Virtual Wardrobe';
  router: Router = inject(Router)

  isSidebarOpen = false;

  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  goToTarget = (target: string) => {
    this.router.navigate([target]).then()
  }
}
