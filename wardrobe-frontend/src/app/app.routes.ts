import { Routes } from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";
import {ClothesComponent} from "./clothes/clothes.component";
import {OutfitsComponent} from "./outfits/outfits.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
  {path: 'clothes', component: ClothesComponent},
  {path: 'outfits', component: OutfitsComponent},
  {path: '', component: HomeComponent}
];
