import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'experience', loadChildren: './experience/experience.module#ExperiencePageModule' },
  { path: 'volunteering', loadChildren: './volunteering/volunteering.module#VolunteeringPageModule' },
  { path: 'skills', loadChildren: './skills/skills.module#SkillsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
