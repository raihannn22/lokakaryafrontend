import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./component/user/user.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./component/login/login.component";
import { GroupAchievementComponent } from './component/group-achievement/group-achievement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, LoginComponent, CommonModule, GroupAchievementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lokaKarya-FE';
}
