import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink],
  templateUrl: './register-page.html',
})
export default class RegisterPage {
  fullName = '';
  companyName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = true;

  showPassword = signal<boolean>(false);
  showConfirmPassword = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword.update((v) => !v);
  }

  onSubmit(): void {
    if (!this.acceptTerms) return;

    this.isLoading.set(true);
    // Simulación de registro
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1200);
  }
}
