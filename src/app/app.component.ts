import { Component } from '@angular/core';

import { AdviceService } from './advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  advice: string;
  title = 'Random Advice';

  constructor(private adviceService: AdviceService) {

    this.getAdvice();
  }


  getAdvice() {
    this.adviceService.getAdvice()
      .subscribe((data: any) => {
        this.advice = data.slip.advice;
      });
  }
}
