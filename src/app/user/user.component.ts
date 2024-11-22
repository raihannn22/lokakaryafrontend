import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { UserService } from './user.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ButtonModule, CalendarModule, FormsModule, TableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  users: any[] = [];
  loading: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.content; // Data ada di 'content'
        console.log('Total rows:', response.totalRows);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      },
    });
  }

  editUser(user: any) {
    // Redirect to an edit page or open a modal with user data
    this.router.navigate(['/user/edit', user.id]); // Assuming you have a route for editing
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          alert('User deleted successfully');
          this.getAllUsers(); // Refresh the user list after deletion
        },
        error: (error) => {
          console.error('Error deleting user:', error);
          alert('Error deleting user');
        }
      });
    }
  }
}