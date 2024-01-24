import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AdviceGeneratorService} from "../service/advice-generator.service";

@Component({
  selector: 'app-advice-generator',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './advice-generator.component.html',
  styleUrl: './advice-generator.component.css'
})
export class AdviceGeneratorComponent {

  advice = this.adviceGeneratorService.advice;

  constructor(private adviceGeneratorService: AdviceGeneratorService) {
  }

  ngOnInit() {
    this.generateAdvice();
  }

  generateAdvice() {
    this.adviceGeneratorService.generateAdvice();
  }
}
