import { Component, Input, OnInit } from "@angular/core";
import { QuoteModel } from "src/models/quoteModel";

@Component({
    selector: 'quote-component',
    templateUrl: 'quote-component.html'
})

export class QuoteComponent implements OnInit {
    
    @Input() quotes:QuoteModel[] = [];

    ngOnInit(): void {
        this.quotes;
    }
}