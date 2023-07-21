import axios from 'axios';
import { backend } from './index.js';

export function addTrainingNote(args) {
  const body = {
    sport: args.sport.value,
    groupCount: args.groupCount.value,
    amount: args.amount.value,
    unit: args.unit.value,
    comment: args.comment.value,
  };

  return axios.post(`${backend}/training/note`, body);
}

export function listTrainingNote(args) {
  return axios.post(`${backend}/training/note/list`);
}
