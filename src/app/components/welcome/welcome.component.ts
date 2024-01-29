import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'welcome-component',
    templateUrl: 'welcome.component.html'
})

export class WelcomeComponent {
    
    constructor(private router: Router) { }

    navigateToRoute(): void {
        this.router.navigate(['/quote']);
    }
}