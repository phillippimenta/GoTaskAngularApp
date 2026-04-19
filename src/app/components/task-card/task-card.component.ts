import { Component, inject } from '@angular/core';
import { ModalControllerService } from "../../services/modal-controller.service";
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

  private readonly _modalControllerService = inject(ModalControllerService);

  openEditTaskModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({ name: 'Nome da tarefa', description: 'Descrição da tarefa' });
    dialogRef.closed.pipe(take(1)).subscribe((taskForm) => {
      if (!taskForm) return;
      console.log('Tarefa alterada: ', taskForm);
    });
  }
}
