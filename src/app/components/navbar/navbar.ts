import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  
  @ViewChild('hamburger', { static: false }) hamburger!: ElementRef;
  @ViewChild('mobileOverlay', { static: false }) mobileOverlay!: ElementRef;
  @ViewChild('navbar', { static: false }) navbar!: ElementRef;

  isMenuOpen = false;
  activeLink = 'home';

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnInit(): void {
    // Any initialization logic
  }

  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.hamburger && this.mobileOverlay) {
      if (this.isMenuOpen) {
        this.hamburger.nativeElement.classList.add('active');
        this.mobileOverlay.nativeElement.classList.add('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
      } else {
        this.hamburger.nativeElement.classList.remove('active');
        this.mobileOverlay.nativeElement.classList.remove('active');
        // Restore body scroll
        document.body.style.overflow = '';
      }
    }
  }

  // Close mobile menu when clicking on a link
  closeMobileMenu(): void {
    if (this.isMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  // Set active navigation link
  setActiveLink(link: string): void {
    this.activeLink = link;
    this.closeMobileMenu();
  }

  // Check if link is active
  isActiveLink(link: string): boolean {
    return this.activeLink === link;
  }

  // Handle scroll effects (optional - adds scrolled class to navbar)
  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.navbar) {
      const scrolled = window.pageYOffset > 50;
      if (scrolled) {
        this.navbar.nativeElement.classList.add('scrolled');
      } else {
        this.navbar.nativeElement.classList.remove('scrolled');
      }
    }
  }

  // Close menu on escape key press
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isMenuOpen) {
      this.closeMobileMenu();
    }
  }

  // Close menu when clicking outside (optional)
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const hamburgerElement = this.hamburger?.nativeElement;
    const overlayElement = this.mobileOverlay?.nativeElement;
    
    // Close menu if clicking outside of hamburger and overlay
    if (this.isMenuOpen && hamburgerElement && overlayElement) {
      if (!hamburgerElement.contains(target) && !overlayElement.contains(target)) {
        this.closeMobileMenu();
      }
    }
  }
}