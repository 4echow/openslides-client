import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { E2EImportsModule } from 'e2e-imports.module';

import { MotionMultiselectActionsComponent } from '../shared-motion/motion-multiselect-actions/motion-multiselect-actions.component';
import { AmendmentListComponent } from './amendment-list.component';

describe(`AmendmentListComponent`, () => {
    let component: AmendmentListComponent;
    let fixture: ComponentFixture<AmendmentListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [E2EImportsModule],
                declarations: [AmendmentListComponent, MotionMultiselectActionsComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AmendmentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(component).toBeTruthy();
    });
});
