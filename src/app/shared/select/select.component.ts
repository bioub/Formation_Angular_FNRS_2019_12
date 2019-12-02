import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  opened = false;

  @Input() items: string[];
  @Input() selected: string;
  @Output() selectedChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {

  }

  onSelect(item) {
    this.selected = item;
    this.opened = false;
    this.selectedChange.emit(item);
  }

}
