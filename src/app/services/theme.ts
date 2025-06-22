import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light';

  constructor() {
    // Check for saved theme or default to light
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.currentTheme);
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-bs-theme', this.currentTheme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}