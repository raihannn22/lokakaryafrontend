import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./component/user/user.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./component/login/login.component";
import { GroupAchievementComponent } from './component/group-achievement/group-achievement.component';
import { GroupAttitudeSkillComponent } from './component/group-attitude-skill/group-attitude-skill.component';
import { TechnicalSkillComponent } from './component/technical-skill/technical-skill.component';
import { AchievementComponent } from './component/achievement/achievement.component';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    UserComponent, 
    LoginComponent, 
    CommonModule, 
    DropdownModule,
    GroupAchievementComponent, 
    GroupAttitudeSkillComponent,
    TechnicalSkillComponent,
    AchievementComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lokaKarya-FE';
}
