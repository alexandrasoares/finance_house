import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  @Input() headerName = '';
  @Input() showMenuButton = true;
  @Input() showCloseButton = false;

  @Output() closeEventEmitter = new EventEmitter();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.closeEventEmitter.emit();
  }

}
