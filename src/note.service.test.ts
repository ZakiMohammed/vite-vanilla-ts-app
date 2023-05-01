import { expect, test, vi } from 'vitest';
import { NoteService } from './note.service';
import { Note } from './note.model';

const mockNotes: Note[] = [
  { id: '80588ccf-75bc-430d-aeee-e49fc22df963', title: 'Lorem ipsum dolor' },
  { id: '247ed093-30c2-4c50-a0e0-9b452fd29ab5', title: 'Mauris faucibus' },
  { id: 'e39e9ef8-f9fb-4e20-a22a-5e79e22f1ef2', title: 'Cras ut cursus' },
];

const mockStorage: Storage = {
  ...global.localStorage,
  getItem: () => JSON.stringify(mockNotes),
  setItem: vi.fn(),
};

test('should get notes array', () => {
  vi.spyOn(NoteService, 'getStore').mockReturnValue(mockStorage);
  
  const notes = NoteService.notes;

  expect(notes).toBeTruthy();
  expect(notes.length).toEqual(3);
});
