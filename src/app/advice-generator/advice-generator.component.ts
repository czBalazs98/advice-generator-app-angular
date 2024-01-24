import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

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

}
