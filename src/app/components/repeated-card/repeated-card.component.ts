import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../classes/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repeated-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repeated-card.component.html',
  styleUrl: './repeated-card.component.scss'
})
export class RepeatedCardComponent {
  cards: Card[] = [];

  constructor(
    private _cardService: CardService
  )
  {

  }

  ngOnInit(): void {
    this._cardService.getCards().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.cards = data    
      },
      error:err=>{
        console.log(err);
        
      }
    });
  }
  getBackgroundColorTop(index: number): string {
    const colors = ['rgba(255, 139, 100, 1)', 'rgba(85, 194, 230, 1)', 'rgba(255, 94, 125, 1)', 'rgba(255, 139, 100, 1)']; 
    return colors[index % colors.length]; 
  }
  getBackgroundColorBottom(index: number): string {
    const colors = ['rgba(75, 207, 130, 1)', 'rgba(115, 53, 210, 1)', 'rgba(241, 199, 91, 1)', 'rgba(85, 194, 230, 1)']; 
    return colors[index % colors.length]; 
  }
}
