import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonServicesComponent } from './common-services.component';

describe('CommonServicesComponent', () => {
    let component: CommonServicesComponent;
    let fixture: ComponentFixture<CommonServicesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonServicesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommonServicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
