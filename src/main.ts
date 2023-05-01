import { v4 as uuid } from 'uuid';
import { NoteService } from './note.service';
import { Note } from './note.model';
import './style.css';

const form = document.querySelector<HTMLFormElement>('form');
const input = document.querySelector<HTMLInputElement>('form input');
const list = document.querySelector<HTMLUListElement>('ul');

const addNote = (note: Note) => {
  const button = document.createElement('button');
  button.textContent = 'Remove';
  button.className = 'btn btn-outline-danger btn-xs float-end';
  button.setAttribute('type', 'button');
  button.addEventListener('click', onRemoveClick);

  const item = document.createElement('li');
  item.textContent = note.title;
  item.className = 'list-group-item';
  item.setAttribute('data-id', note.id);

  item.appendChild(button);
  list!.appendChild(item);
};

const onFormSubmit = (event: Event) => {
  event.preventDefault();

  const value = input!.value;

  if (!value) {
    alert('Please provide your note!');
    return;
  }

  const note: Note = {
    id: uuid(),
    title: input!.value,
  };

  NoteService.addNote(note);
  addNote(note);

  input!.value = '';
};

const onRemoveClick = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const item = button.parentElement!;
  const id = item.getAttribute('data-id');

  if (id) {
    NoteService.removeNote(id);
    item.remove();
  }
};

form!.addEventListener('submit', onFormSubmit);
NoteService.notes.forEach(note => addNote(note));