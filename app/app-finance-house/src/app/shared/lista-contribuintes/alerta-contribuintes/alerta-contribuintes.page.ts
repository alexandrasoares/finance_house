import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta-contribuintes',
  templateUrl: './alerta-contribuintes.page.html',
  styleUrls: ['./alerta-contribuintes.page.scss'],
})
export class AlertaContribuintesPage implements OnInit {

  @Input() emptyMovimentosMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
