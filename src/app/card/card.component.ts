import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  title: string = "aweawe";
  @Input()
  price: string = "$0.00";
  @Input()
  content1: string = "";
  @Input()
  content2: string = "";
  @Input()
  content3: string = "";
  @Input()
  bg: string = "white";
  @Input()
  size: string = '254';
  @Input()
  color: string = '#4a4c60';
  @Input()
  border: string = '1px grey solid';
  @Input()
  index: string = '0';
  @Input()
  butcolor: string = "#8d91ea";

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()
  eventEmit(event: any): void {
    this.btnClickEvent.emit(event.type)
  }

} 
