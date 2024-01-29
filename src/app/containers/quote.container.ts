import { Component, OnInit } from "@angular/core";
import { QuoteModel } from "src/models/quoteModel";
import { QuoteService } from "src/services/quote.service";

@Component({
    selector: 'quote-container',
    templateUrl: 'quote-container.html'
})

export class QuoteContainer implements OnInit {

    constructor(private quoteService: QuoteService){ }

    quotes: QuoteModel[] = [];

    ngOnInit(): void {
        this.quoteService.get().subscribe({
            next: (x: QuoteModel[]) => this.quotes = x,
            error: (x: string) => console.log(x)
        });
    }
}