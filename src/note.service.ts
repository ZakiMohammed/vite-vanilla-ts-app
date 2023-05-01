import { Note } from './note.model';

export class NoteService {
  private static key = 'notes';

  static get notes() {
    const item = this.getStore().getItem(this.key);
    return item ? (JSON.parse(item) as Note[]) : [];
  }

  static getStore() {
    return localStorage;
  }

  static addNote(note: Note) {
    const notes = this.notes;
    notes.push(note);

    const item = JSON.stringify(notes);
    this.getStore().setItem(this.key, item);
  }

  static removeNote(id: string) {
    const notes = this.notes.filter(i => i.id !== id);
    const item = JSON.stringify(notes);
    this.getStore().setItem(this.key, item);
  }
}
