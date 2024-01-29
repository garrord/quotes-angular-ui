import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuoteModel } from "../models/quoteModel";

@Injectable()

export class QuoteService{
    constructor(public service: HttpClient) { }

    baseUrl:string = 'https://localhost:7196/api/quotes';

    public get(): Observable<QuoteModel[]>{
        return this.service.get<QuoteModel[]>(this.baseUrl);
    }
}