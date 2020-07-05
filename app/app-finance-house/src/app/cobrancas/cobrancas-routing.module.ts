import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobrancasPage } from './cobrancas.page';
import { DetalhesCobrancaPage } from './detalhes-cobranca/detalhes-cobranca.page';
import { EditarCobrancaPage } from './editar-cobranca/editar-cobranca.page';
import { InserirCobrancaPage } from './inserir-cobranca/inserir-cobranca.page';
import { ListaCobrancaPage } from './lista-cobranca/lista-cobranca.page';
import { PagarCobrancaPage } from './pagar-cobranca/pagar-cobranca.page';
import { RemoverCobrancaPage } from './remover-cobranca/remover-cobranca.page';

const routes: Routes = [
  { path: '', redirectTo: 'cobranca', pathMatch: 'full' },
  { path: 'cobranca', component: CobrancasPage },
  { path: 'lista-cobranca', component: ListaCobrancaPage },
  { path: 'inserir-cobranca', component: InserirCobrancaPage },
  { path: 'editar-cobranca', component: EditarCobrancaPage },
  { path: 'detalhes-cobranca', component: DetalhesCobrancaPage},
  { path: 'pagar-cobranca', component: PagarCobrancaPage},
  { path: 'remover-cobranca', component: RemoverCobrancaPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobrancasPageRoutingModule {}
