import { Component } from '@angular/core';
import { tarea } from '../../domain/tarea';
import { TareaService } from '../../srevices/tarea.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  tarea: tarea = new tarea()
  tareas: any

  constructor(private tareaService: TareaService){}

  ngOnInit(){
    this.tareaService.getMessages().then(data => {
      this.tareas = data.docs.map((doc:any) =>{
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      console.log('desc', this.tareas)
    })
  }

  guardar(){
    this.tareaService.addMensaje(this.tarea)
  }
}
