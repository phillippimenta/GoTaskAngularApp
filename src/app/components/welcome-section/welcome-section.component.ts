import { Component, inject } from '@angular/core';
import { take } from 'rxjs/operators';
import { ModalControllerService } from "../../services/modal-controller.service";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css'
})
export class WelcomeSectionComponent {

  private readonly _modalControllerService = inject(ModalControllerService);
  private readonly _taskService = inject(TaskService);

  openNewTaskModal() {
    const dialogRef = this._modalControllerService.openNewTaskModal();
    dialogRef.closed.pipe(take(1)).subscribe((taskForm) => {
      if (!taskForm) return;
      this._taskService.addTask(taskForm);
    });
  }
}
