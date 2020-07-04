import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  @Input() emptyMovimentosMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
