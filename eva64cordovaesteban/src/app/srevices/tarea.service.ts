import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { tarea } from '../domain/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private firestore: Firestore) { }

  addMensaje(tarea: tarea){
    addDoc(collection(this.firestore, 'tareas'), Object.assign({},tarea))
  }

  getMessages(){
    return getDocs(query(collection(this.firestore, 'tareas')))
  }
}
