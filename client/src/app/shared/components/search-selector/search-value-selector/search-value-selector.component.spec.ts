import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

import { E2EImportsModule } from 'e2e-imports.module';
import { SearchValueSelectorComponent } from './search-value-selector.component';
import { Selectable } from '../../selectable';
import { EmptySelectable } from '../../empty-selectable';

describe('SearchValueSelectorComponent', () => {
    @Component({
        selector: 'os-host-component',
        template: '<os-search-value-selector></os-search-value-selector>'
    })
    class TestHostComponent {
        @ViewChild(SearchValueSelectorComponent, { static: true })
        public searchValueSelectorComponent: SearchValueSelectorComponent;
    }

    let hostComponent: TestHostComponent;
    let hostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [E2EImportsModule],
                declarations: [TestHostComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        hostComponent = hostFixture.componentInstance;
    });

    it('should create', () => {
        const subjectList: Selectable[] = [];
        for (let index = 0; index < 20; index++) {
            subjectList.push(new EmptySelectable());
        }
        const subject: BehaviorSubject<Selectable[]> = new BehaviorSubject(subjectList);
        hostComponent.searchValueSelectorComponent.inputListValues = subject;

        const formBuilder: FormBuilder = TestBed.inject(FormBuilder);
        const formControl = formBuilder.control([]);
        hostComponent.searchValueSelectorComponent.contentForm = formControl;

        hostFixture.detectChanges();
        expect(hostComponent.searchValueSelectorComponent).toBeTruthy();
    });
});
