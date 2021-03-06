        import { Component } from '@angular/core';
        import {MenubarModule,MenuItem} from 'primeng/primeng';

        @Component({
          selector: 'app-root',
          template: `
          <p-menubar [model]="items"></p-menubar>
          <button pButton type="button" (click)="onclick()" label="Click"></button>
        
          `,
        })
        export class AppComponent {
          title = 'app works!';
          items: MenuItem[];

          onclick() {
            alert(1234);
          }
          ngOnInit() {
            this.items = [
              {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                  label: 'New',
                  icon: 'fa-plus',
                  items: [
                    {label: 'Project'},
                    {label: 'Other'},
                  ]
                },
                  {label: 'Open'},
                  {separator: true},
                  {label: 'Quit'}
                ]
              },
              {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                  {label: 'Undo', icon: 'fa-mail-forward'},
                  {label: 'Redo', icon: 'fa-mail-reply'}
                ]
              },
              {
                label: 'Help',
                icon: 'fa-question',
                items: [
                  {
                    label: 'Contents'
                  },
                  {
                    label: 'Search',
                    icon: 'fa-search',
                    items: [
                      {
                        label: 'Text',
                        items: [
                          {
                            label: 'Workspace'
                          }
                        ]
                      },
                      {
                        label: 'File'
                      }
                    ]}
                ]
              },
              {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                  {
                    label: 'Edit',
                    icon: 'fa-refresh',
                    items: [
                      {label: 'Save', icon: 'fa-save'},
                      {label: 'Update', icon: 'fa-save'},
                    ]
                  },
                  {
                    label: 'Other',
                    icon: 'fa-phone',
                    items: [
                      {label: 'Delete', icon: 'fa-minus'}
                    ]
                  }
                ]
              },
              {
                label: 'Quit', icon: 'fa-minus'
              }
            ];
          }

        }
