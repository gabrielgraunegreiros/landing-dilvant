import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dilvant-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() textClass: string = '';
  @Input() buttonText: string = '';
  @Input() imgPath: string = '';
  @Input() position: string = 'left';

  ngOnInit() {
    console.log(this.position);
  }
}
