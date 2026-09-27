import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  templateUrl: './login-page.html',
})
export default class LoginPage {
  email = '';
  password = '';
  rememberMe = true;
  showPassword = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  togglePasswordVisibility(): void {
    this.showPassword.update((val) => !val);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    // Simulación de autenticación
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}
