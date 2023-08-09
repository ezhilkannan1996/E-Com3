import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  logIn(): void {
    const isAuthenticated = this.userService.logIn(this.username, this.password);
    if (isAuthenticated) {
      // Navigate to the desired page after successful login
    } else {
      // Handle incorrect credentials
    }
  }
}
