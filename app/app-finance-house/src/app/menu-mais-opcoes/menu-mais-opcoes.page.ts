import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-mais-opcoes',
  templateUrl: './menu-mais-opcoes.page.html',
  styleUrls: ['./menu-mais-opcoes.page.scss'],
})
export class MenuMaisOpcoesPage implements OnInit {
  appPagesCadastros: any[] = [
    {title: 'Familiares', icon: 'person-add-outline', link: '/contribuintes'},
    {title: 'Contas', icon: 'bookmarks', link: '/contas'},
    {title: 'Categorias', icon: 'pricetag', link: '/categorias'},
    {title: 'Subcategorias', icon: 'pricetags', link: '/subcategorias'},
    {title: 'Tipos de conta', icon: 'document', link: '/tipos-conta'},
    {title: 'Projetos', icon: 'briefcase', link: '/projetos'},
    {title: 'Beneficiários', icon: 'contacts', link: '/beneficiarios'},
    // {title: 'Corretoras', icon: 'business', link: '/corretoras'}
  ];

  appPagesOutros: any[] = [
    {title: 'Pendencias', icon: 'cash-outline', link: '/cobrancas'},
    // {title: 'Transferências', icon: 'repeat', link: '/transferencias'},
    // {title: 'Investimentos', icon: 'analytics', link: '/investimentos'}
  ];

  constructor() { }

  ngOnInit() {
  }

  hasPagesCadastros(): boolean {
    return this.appPagesCadastros.length > 0;
  }

  hasPagesOutros(): boolean {
    return this.appPagesOutros.length > 0;
  }

}
