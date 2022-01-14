import { RouterTestingModule } from '@angular/router/testing';
import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-test-setup'`, () => {
    expect(component.title).toEqual('ng-test-setup');
  });

  it('should render title', async () => {
    await render(AppComponent, { imports: [RouterTestingModule] });

    expect(screen.getByText('ng-test-setup app is running!'));
  });
});
