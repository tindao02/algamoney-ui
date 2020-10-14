import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  public exibirSidebar = false;

  private items: MenuItem[];

  constructor() { }

  ngOnInit(): void
  {
    this.items = [
      { label: 'Home', icon: 'pi pi-home' },
      { separator: true },
      { label: 'Lançamentos', icon: 'pi pi-chart-line' },
      { label: 'Pessoas', icon: 'pi pi-user' },
      { separator: true },
      { label: 'Logout', icon: 'pi pi-times-circle' }
    ];
  }

  public getItems(): MenuItem[]
  {
    return this.items;
  }
  public setItems(items: MenuItem[]): void
  {
    this.items = items;
  }

}
