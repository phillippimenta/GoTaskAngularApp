import { Component, inject } from '@angular/core';
import { ModalControllerService } from "../../services/modal-controller.service";
import { take } from 'rxjs/operators';
import { generateUniqueIdWithTimestamp } from "../../utils/generate-unique-id-with-timestamp";

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css'
})
export class WelcomeSectionComponent {

  private readonly _modalControllerService = inject(ModalControllerService);

  constructor() {
    console.log(generateUniqueIdWithTimestamp());
  }

  openNewTaskModal() {
    const dialogRef = this._modalControllerService.openNewTaskModal();
    dialogRef.closed.pipe(take(1)).subscribe((taskForm) => {
      if (!taskForm) return;
      console.log('Tarefa criada: ', taskForm);
    });
  }
}
