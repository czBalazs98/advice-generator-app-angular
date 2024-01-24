import {Injectable, signal} from '@angular/core';
import {Advice, AdviceResponse} from "../model/advice";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdviceGeneratorService {

  _advice = signal<Advice | null>(null);
  advice = this._advice.asReadonly();

  constructor(private httpClient: HttpClient) { }

  generateAdvice() {
    this.httpClient.get<AdviceResponse>('https://api.adviceslip.com/advice')
      .subscribe(response => this._advice.set(response.slip));
  }
}
