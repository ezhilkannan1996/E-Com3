// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = []; // List to store user data

  signUp(user: any): void {
    this.users.push(user);
  }

  logIn(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    return !!user; // Return true if user found, false otherwise
  }
}
